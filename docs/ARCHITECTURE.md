# Architecture — Ed-Tech Platform

## System Overview

```
┌─────────────────────────────┐     HTTP/JSON      ┌─────────────────────────┐
│  FRONTEND  :5173            │ ◄─────────────────► │  BACKEND API  :3000     │
│                             │   JWT Bearer token  │                         │
│  React 18 + TypeScript      │                     │  Node.js + Express      │
│  Vite build tool            │                     │  TypeScript             │
│  React Router v6            │                     │  Zod validation         │
│  TanStack Query             │                     │  Helmet + Rate limit    │
│  Zustand (auth state)       │                     │  JWT via jsonwebtoken   │
│  Tailwind CSS v4            │                     │                         │
│  shadcn/ui components       │                     └───────────┬─────────────┘
└─────────────────────────────┘                                 │ Prisma ORM
                                                                │ SQL queries
                                                     ┌──────────▼─────────────┐
                                                     │  POSTGRESQL  :5432     │
                                                     │                        │
                                                     │  ~35 models (6 wired   │
                                                     │   in v1; rest reserved)│
                                                     │  Prisma migrations     │
                                                     │  Relational schema     │
                                                     └────────────────────────┘
```

---

## Frontend Architecture

### Directory Layout

```
src/
├── pages/                    # Route-level components (one per route)
│   ├── Landing/
│   ├── auth/                 # Login, Signup
│   ├── courses/              # CourseListing, CourseDetail (public)
│   ├── instructor/           # CreateCourse, CourseEditor
│   ├── learn/                # CoursePlayer
│   └── dashboard/            # DashboardLayout + role sub-pages
│       ├── student/
│       └── teacher/
├── components/               # Reusable UI components
│   ├── ui/                   # shadcn/ui components
│   └── dashboard/menu/       # StudentMenu, TeacherMenu
├── hooks/
│   ├── use-auth.ts           # Zustand auth store (canonical)
│   └── queries/              # TanStack Query hooks
│       ├── use-courses.ts
│       ├── use-enrollment.ts
│       └── use-progress.ts
├── lib/
│   └── api.ts                # Fetch client (auto-injects Bearer token)
├── routes/
│   ├── index.tsx             # Full route tree
│   └── protectedRoute.tsx    # Auth + role guard
└── main.tsx                  # QueryClient + RouterProvider entry
```

### State Management Layers

| Layer | Tool | Scope | Persisted |
|-------|------|-------|-----------|
| Auth state | Zustand + persist | User, token, isAuthenticated | localStorage `auth-storage` |
| Server data | TanStack Query | Courses, enrollments, progress | Query cache (memory, TTL-based) |
| Form state | React Hook Form | In-component | No |
| UI state | useState | In-component | No |

### Routing Strategy

React Router v6 with `createBrowserRouter`. All routes defined in `src/routes/index.tsx`.

- **Public routes:** `/`, `/login`, `/courses`, `/courses/:id`
- **Protected routes (any authenticated):** `/learn/:courseId`, enrollment flow
- **Protected routes (INSTRUCTOR/ADMIN):** `/teacher/*`
- **Protected routes (STUDENT):** `/student/*`

`ProtectedRoute` checks `isAuthenticated` from Zustand and `allowedRoles` against `user.role`. Unauthorized users → `/unauthorized`.

### API Client (`src/lib/api.ts`)

Every request to the backend goes through `api.ts`:
1. Reads JWT from `auth-storage` in localStorage
2. Attaches `Authorization: Bearer <token>` header
3. Throws on non-2xx responses with the backend's `message` field
4. Returns typed response via generics

```typescript
const courses = await api.get<{ success: true; data: Course[] }>('/api/courses');
```

---

## Backend Architecture

### Directory Layout

```
src/
├── controllers/              # Business logic — one file per resource
│   ├── auth.controller.ts
│   ├── course.controller.ts
│   ├── section.controller.ts
│   ├── subsection.controller.ts
│   ├── enrollment.controller.ts
│   └── progress.controller.ts
├── routes/                   # Express Router — one file per resource
│   ├── auth.routes.ts
│   ├── course.routes.ts
│   ├── section.routes.ts
│   ├── enrollment.routes.ts
│   └── progress.routes.ts
├── middlewares/
│   ├── auth.ts               # authenticate (JWT verify) + requireRole
│   ├── errorHandler.ts       # global Express error handler
│   └── notFoundHandler.ts    # 404 handler
├── config/
│   └── prisma.ts             # Singleton PrismaClient (globalThis guard)
├── utils/
│   └── CustomError.ts        # Extends Error with statusCode
└── index.ts                  # Express app bootstrap + route wiring
```

### Request Lifecycle

```
HTTP Request
  → Helmet (security headers)
  → CORS (allow CLIENT_URL origin)
  → express.json() (parse body)
  → Rate limiter (200 req/15min)
  → Router match
  → authenticate middleware (if protected)
  → requireRole middleware (if role-protected)
  → Controller function
    → Zod schema validation
    → Prisma database query
    → JSON response
  ← errorHandler (catches CustomError and Zod errors)
```

### Auth Middleware

Two middleware functions exported from `src/middlewares/auth.ts`:

- `authenticate`: verifies JWT from `Authorization: Bearer` header, populates `req.user = { id, role }`
- `requireRole(...roles)`: checks `req.user.role` is in the allowed set, returns 403 if not

### Response Convention

```typescript
// Success
res.json({ success: true, data: { ... } });

// Error (via CustomError + errorHandler)
throw new CustomError(404, 'Course not found');
// → { hasError: true, message: 'Course not found', errors: [] }
```

---

## Data Model Summary

Key relationships for Phase 1:

```
User (role: STUDENT | INSTRUCTOR | ADMIN | MODERATOR | SUPPORT)
  ├── teachingCourses: Course[]    (as instructor)
  ├── enrollments: Enrollment[]    (as student)
  └── courseProgress: CourseProgress[]

Course (status: DRAFT | REVIEW | PUBLISHED | ARCHIVED | SUSPENDED)
  ├── sections: Section[]
  ├── enrollments: Enrollment[]
  └── progress: CourseProgress[]

Section
  └── subSections: SubSection[]

Enrollment @@unique([userId, courseId])
CourseProgress @@unique([userId, courseId])
```

The `published` boolean on Course is the gate for catalog visibility. `status` is a separate field for editorial workflow (Phase 2).

---

## Environment Variables

### Backend (`Ed-Tech-Platform-backend/.env`)

```env
DATABASE_URL="postgresql://user:pass@localhost:5432/edtech"
JWT_SECRET="your-secret-key-here"
CLIENT_URL="http://localhost:5173"   # optional, defaults to localhost:5173
PORT=3000                            # optional, defaults to 3000
NODE_ENV="development"               # optional
```

### Frontend (`Ed-Tech-Platform-frontend/.env`)

```env
VITE_API_URL="http://localhost:3000"   # optional, defaults to localhost:3000
```

---

## Security Notes

- JWT secret is **never hardcoded** — always read from `process.env.JWT_SECRET`
- Startup fails immediately (`process.exit(1)`) if `JWT_SECRET` or `DATABASE_URL` are missing
- CORS restricts origin to `CLIENT_URL` env var (not `*`)
- Rate limiter: 200 requests per 15 minutes per IP
- Helmet adds standard security headers
- Input validated with Zod before any database write
- No raw SQL — all queries go through Prisma's typed query builder
