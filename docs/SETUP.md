# Development Setup Guide

Get both repos running locally from scratch.

---

## Prerequisites

- Node.js 18+ (`node -v`)
- PostgreSQL 14+ running locally or a hosted connection string
- Git

---

## 1. Clone both repos

```bash
git clone https://github.com/abdullahsadik00/Ed-Tech-Platform-frontend.git
git clone https://github.com/abdullahsadik00/Ed-Tech-Platform-backend.git
```

---

## 2. Backend setup

```bash
cd Ed-Tech-Platform-backend
npm install
```

Create `.env` in the backend root:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/edtech_dev"
JWT_SECRET="dev-secret-change-in-production-min-32-chars"
CLIENT_URL="http://localhost:5173"
PORT=3000
NODE_ENV="development"
```

Run Prisma migration to create the database schema:

```bash
npx prisma migrate dev --name init
```

Start the dev server:

```bash
npm run dev
```

Server runs at `http://localhost:3000`.

---

## 3. Frontend setup

```bash
cd Ed-Tech-Platform-frontend
npm install
```

Create `.env` in the frontend root (optional — defaults to localhost:3000):

```env
VITE_API_URL="http://localhost:3000"
```

Start the dev server:

```bash
npm run dev
```

App runs at `http://localhost:5173`.

---

## 4. Verify the setup

1. Visit `http://localhost:5173` — landing page should render
2. Click "Get Started" → login page
3. Sign up a new account via: `POST http://localhost:3000/api/auth/signup`
4. Login with those credentials
5. You should land on the student dashboard

---

## Common Commands

### Backend

```bash
npm run dev          # ts-node dev server with auto-reload
npm run build        # tsc compile to dist/
npm start            # run compiled dist/index.js

npx prisma studio    # GUI to browse/edit database
npx prisma migrate dev --name <name>   # create + apply migration
npx prisma db push   # push schema without migration (dev only)
npx prisma generate  # regenerate Prisma client after schema change
```

### Frontend

```bash
npm run dev          # Vite dev server
npm run build        # production build to dist/
npm run preview      # preview production build
npm run lint         # ESLint check
npm run type-check   # tsc --noEmit
```

---

## Creating Test Data

Sign up an instructor account directly via the API:

```bash
curl -X POST http://localhost:3000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Ravi",
    "lastName": "Kumar",
    "email": "ravi@example.com",
    "password": "password123",
    "role": "INSTRUCTOR"
  }'
```

Sign up a student account:

```bash
curl -X POST http://localhost:3000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Aanya",
    "lastName": "Sharma",
    "email": "aanya@example.com",
    "password": "password123",
    "role": "STUDENT"
  }'
```

---

## Troubleshooting

**`Missing environment variables: JWT_SECRET`**
Create `.env` in the backend root with the required vars. The server exits on startup if they're missing.

**`npx prisma migrate dev` fails**
Confirm PostgreSQL is running and the `DATABASE_URL` connection string is correct. Try `psql -U postgres` to verify access.

**CORS errors in browser**
Make sure `CLIENT_URL` in the backend `.env` matches exactly where the frontend runs (including port).

**`Cannot find module` errors**
Run `npm install` in the failing repo. This usually means `node_modules` is missing after a fresh clone.

**Prisma client is out of sync with schema**
Run `npx prisma generate` to regenerate the client after any schema change.
