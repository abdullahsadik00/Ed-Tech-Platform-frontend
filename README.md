# Ed-Tech Platform — Frontend

React + TypeScript single-page app for the Ed-Tech Platform: a course
marketplace and learning experience where instructors publish video/document
courses and students enroll and track their progress.

This is the **frontend** only. It talks to the [Ed-Tech Platform backend](../Ed-Tech-Platform-backend)
(Express + Prisma + PostgreSQL) over a JSON API.

## Tech stack

- **React 18** + **TypeScript** + **Vite**
- **React Router v6** for routing (`src/routes`)
- **TanStack Query** for all server state (`src/hooks/queries`)
- **Zustand** (with `persist`) for auth state (`src/hooks/use-auth.ts`)
- **Tailwind CSS v4** + **shadcn/ui** + Radix primitives
- **framer-motion** for animation

## Features (v1)

- Public course catalog with search, level/price filters, and pagination
- Course detail pages with curriculum preview
- Email/password **signup** and **login** (JWT, stored in `localStorage`)
- Free-course **enrollment**
- Course **player** with a curriculum sidebar, video/document lessons, and
  **per-lesson progress tracking**
- Instructor flow: **create course → add sections & lessons → publish**
- Student & instructor dashboards (overview + my courses)

> Paid courses, quizzes, assignments, certificates, notifications, discussions,
> and the parent dashboard are out of scope for v1 (the backend schema reserves
> models for them, but they are not wired up).

## Getting started

### Prerequisites

- Node.js 18+
- The backend running locally (see `Ed-Tech-Platform-backend`) — it needs
  PostgreSQL 14+

### Install & run

```bash
npm install
npm run dev      # Vite dev server at http://localhost:5173
```

By default the app calls the API at `http://localhost:3000`. To point it
elsewhere, create a `.env`:

```env
VITE_API_URL="http://localhost:3000"
```

### Other scripts

```bash
npm run build    # type-check (tsc -b) + production build to dist/
npm run preview  # preview the production build
npm run lint     # ESLint
```

See `docs/SETUP.md` for full backend + frontend setup, and `docs/ARCHITECTURE.md`,
`docs/FLOW.md`, `docs/PRD.md` for design details.
