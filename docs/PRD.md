# Product Requirements Document — Ed-Tech Platform

## Phase 1: Core Learning Loop

**Version:** 1.0  
**Date:** June 2026  
**Author:** Sadik Shaikh

---

## 1. Problem Statement

Instructors have no way to publish course content. Students have no way to discover, enroll in, or learn from courses. The platform has a rich data model and complete auth system but zero working user-facing learning features. Phase 1 closes that gap by delivering the end-to-end core learning loop: a student can go from browsing to watching their first lesson in one session.

---

## 2. User Personas

### Student — Aanya, 19
- **Goal:** Find structured courses on web development, enroll for free, and watch lessons at her own pace while tracking progress.
- **Pain point today:** No course catalog, no way to enroll, dashboard shows only hardcoded mock data.

### Instructor — Ravi, 34
- **Goal:** Build a structured course (sections + video lessons), preview it, and publish it for students to find immediately.
- **Pain point today:** No course creation UI, no API to add sections or subsections, no publish mechanism.

### Admin — Platform Ops
- **Goal:** Monitor course creation and enrollment activity.
- **In scope for Phase 1:** Can use instructor role to create/unpublish courses.

---

## 3. Phase 1 Scope

| Epic | Feature | Priority | Who |
|------|---------|----------|-----|
| Course Catalog | Browse and filter published courses | P0 | Student / Public |
| Course Catalog | Course detail page with curriculum preview | P0 | Student / Public |
| Course Creation | Create course form (title, description, thumbnail, price, level) | P0 | Instructor |
| Course Creation | Add sections and video subsections | P0 | Instructor |
| Course Creation | Publish course | P0 | Instructor |
| Enrollment | Enroll in free courses | P0 | Student |
| Learning | Video player with curriculum navigation | P0 | Student |
| Learning | Mark complete + track progress % | P0 | Student |
| Dashboard | My enrolled courses with progress % | P1 | Student |
| Dashboard | Instructor course list with enrollment count | P1 | Instructor |

---

## 4. User Stories & Acceptance Criteria

### Epic: Course Catalog

**Story:** As a visitor, I can browse all published courses so I can find something to learn.

**Acceptance Criteria:**
- `GET /api/courses` returns only courses where `published = true`
- Courses render as cards: thumbnail, title, instructor name, level badge, price, enrollment count
- Page shows 12 courses by default; pagination controls appear when > 12 results
- Filters: level (BEGINNER / INTERMEDIATE / ADVANCED), price range (Free / Paid)
- Search input filters by title and description (case-insensitive)
- Loading skeleton shown while fetching; empty state with helpful message when no results

**Story:** As a visitor, I can view a course detail page so I can decide whether to enroll.

**Acceptance Criteria:**
- Route: `/courses/:id` — fetches single course by ID
- Shows: title, thumbnail, short description, price, level, language, duration
- Shows: instructor name, bio section
- Shows: learning outcomes list
- Shows: curriculum accordion — sections with subsection titles and durations (content not playable without enrollment)
- Shows: enroll CTA button ("Enroll Free" for price=0, "Enroll for ₹X" for paid)
- If already enrolled, button reads "Continue Learning" and links to `/learn/:courseId`

---

### Epic: Course Creation

**Story:** As an instructor, I can create a course so I have a container for my content.

**Acceptance Criteria:**
- Route: `/teacher/courses/new`
- Required fields: title (min 3 chars), description (min 10 chars), thumbnail URL, level, price (min 0), language
- On submit, calls `POST /api/courses` — backend validates, auto-generates slug, creates DRAFT course
- On success, redirects to `/teacher/courses/:id/edit`
- Inline field validation (React Hook Form + Zod) before submission
- Error toast if API call fails

**Story:** As an instructor, I can add sections and video lessons to my course.

**Acceptance Criteria:**
- Route: `/teacher/courses/:id/edit` — Course Editor page
- Shows existing sections in an accordion layout
- "Add Section" button opens inline form: title input + Save + Cancel
- Saving calls `POST /api/courses/:id/sections`
- Each section has "Add Lesson" button that expands inline form: title, video URL, duration (minutes)
- Saving calls `POST /api/sections/:id/subsections`
- Delete section button → confirmation → `DELETE /api/sections/:id`
- Delete subsection button → `DELETE /api/subsections/:id`
- "Publish Course" button visible when course has ≥ 1 section with ≥ 1 subsection
- Clicking Publish calls `PUT /api/courses/:id/publish` → success toast → button changes to "Unpublish"

---

### Epic: Enrollment

**Story:** As a student, I can enroll in a free course with one click.

**Acceptance Criteria:**
- Enroll button on course detail page
- If not logged in, redirects to `/login?from=/courses/:id` (state preserved)
- After login, returns to course detail and shows Enroll button
- On click, calls `POST /api/courses/:courseId/enroll`
- Backend creates Enrollment record; `@@unique([userId, courseId])` prevents duplicates (returns 409 if already enrolled)
- On success, redirect to `/learn/:courseId`
- For paid courses (price > 0): button is disabled in Phase 1 with tooltip "Payments coming soon"

---

### Epic: Learning

**Story:** As an enrolled student, I can watch video lessons and track my progress.

**Acceptance Criteria:**
- Route: `/learn/:courseId` — requires active enrollment (redirect to `/courses/:id` if not enrolled)
- Layout: fixed left sidebar (curriculum) + main content area (video + info)
- Curriculum sidebar shows all sections; each section lists subsections with: title, duration, checkmark if completed
- Clicking a subsection in sidebar loads it in the main area without full page reload
- Main area shows: HTML5 video player, subsection title, subsection description
- "Mark as Complete" button visible when subsection is not yet completed
- Clicking Mark Complete calls `POST /api/progress/:courseId/subsections/:subSectionId`
- Progress bar at top of sidebar updates immediately (optimistic update)
- Progress persists across sessions

---

## 5. Out of Scope — Phase 2

- **Payments:** Razorpay integration for paid course enrollment
- **Certificates:** Auto-generated on 100% completion
- **Quizzes:** Per-subsection quiz system
- **Reviews & Ratings:** After completion
- **Notifications:** Email + in-app
- **Video Upload:** Direct Cloudinary upload (Phase 1 uses video URLs)
- **Course Search Full-text:** PostgreSQL full-text index (Phase 1 uses ILIKE)
- **Parent Dashboard live data:** Phase 1 parent dashboard shows coming soon
- **Admin panel:** Course moderation and user management UI

---

## 6. Technical Constraints

- All API responses follow: `{ success: true, data: {...} }` (success) or `{ hasError: true, message: "...", errors: [] }` (error)
- Frontend uses TanStack Query for all server state — no ad-hoc `useEffect` + `fetch` patterns
- Backend Zod validation before any database write
- Auth middleware (`authenticate`) must be applied to all non-public endpoints
- Role check: instructors are `INSTRUCTOR` or `ADMIN` in the DB (`role` field on User)
- Prisma unique constraint on `Enrollment[userId, courseId]` prevents duplicate enrollments at DB level
- Video content is a URL string (YouTube embed or direct video URL) — no upload infrastructure in Phase 1

---

## 7. Definition of Done

A Phase 1 feature is done when:
1. Backend endpoint exists, validates input with Zod, returns correct response shape
2. Frontend page/component renders correctly with real API data (TanStack Query)
3. Error states are handled (API failure shows a toast or inline error message)
4. Loading states are handled (skeleton or spinner while fetching)
5. Code is type-safe (no `any` types in new code)
6. No `console.log` statements in shipped code
