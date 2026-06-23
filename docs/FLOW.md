# User Flow Diagrams

Visual flows for every major user journey in the Ed-Tech Platform. These diagrams use Mermaid syntax — rendered natively on GitHub and in most documentation tools.

---

## 1. Authentication Flow

```mermaid
flowchart TD
    A[User visits any protected route] --> B{isAuthenticated?}
    B -- No --> C[Redirect to /login\nwith from state]
    C --> D[Login Form\nemail + password]
    D --> E{Submit}
    E --> F[POST /api/auth/login]
    F --> G{Response ok?}
    G -- Error --> H[Show error message]
    H --> D
    G -- Success --> I[useAuth.login sets\nuser + token + isAuthenticated]
    I --> J[Navigate to from\nor /student default]
    B -- Yes --> K{Role allowed?}
    K -- No --> L[Redirect to /unauthorized]
    K -- Yes --> M[Render protected content]
```

---

## 2. Student — Course Discovery to Enrollment

```mermaid
flowchart LR
    A["/courses\nCourse Catalog"] --> B[Browse / Filter\nlevel, price, search]
    B --> C[Click course card]
    C --> D["/courses/:id\nCourse Detail"]
    D --> E{Enrolled?}
    E -- Yes --> F["Continue Learning\n→ /learn/:courseId"]
    E -- No --> G{isAuthenticated?}
    G -- No --> H[Redirect to /login]
    H --> I[Login / Signup]
    I --> D
    G -- Yes --> J[Click Enroll]
    J --> K[POST /api/courses/:id/enroll]
    K --> L{price = 0?}
    L -- Free --> M[Enrollment created\nredirect to /learn/:id]
    L -- Paid --> N[Button disabled\nPayments Phase 2]
```

---

## 3. Student — Learning Loop

```mermaid
flowchart TD
    A["/learn/:courseId\nCourse Player"] --> B{Enrollment check}
    B -- Not enrolled --> C[Redirect to /courses/:id]
    B -- Enrolled --> D[Load curriculum + progress\nGET /api/progress/:courseId]
    D --> E[Sidebar: sections & subsections\nwith completion checkmarks]
    E --> F[Click subsection]
    F --> G[Load video + title + description]
    G --> H[Watch video]
    H --> I{Already complete?}
    I -- Yes --> J[Checkmark shown in sidebar]
    I -- No --> K[Show Mark Complete button]
    K --> L[Click Mark Complete]
    L --> M[POST /api/progress/:courseId/subsections/:id]
    M --> N[Optimistic update: checkmark + progress bar]
    N --> O{All subsections\ncomplete?}
    O -- No --> F
    O -- Yes --> P[Progress = 100%\nPhase 2: trigger certificate]
```

---

## 4. Instructor — Course Creation & Publishing

```mermaid
flowchart TD
    A["/teacher\nInstructor Dashboard"] --> B[Click Create Course]
    B --> C["/teacher/courses/new\nCreate Course Form"]
    C --> D[Fill: title, description,\nthumbnail URL, level, price]
    D --> E{Zod validation OK?}
    E -- No --> F[Inline field errors]
    F --> D
    E -- Yes --> G[POST /api/courses]
    G --> H[Course created as DRAFT]
    H --> I[Redirect to /teacher/courses/:id/edit\nCourse Editor]
    I --> J[Add Section\nPOST /api/courses/:id/sections]
    J --> K[Section added to accordion]
    K --> L[Expand section\nAdd Subsection]
    L --> M[Fill: title, video URL, duration\nPOST /api/sections/:id/subsections]
    M --> N{More content?}
    N -- Yes --> J
    N -- No --> O{≥ 1 section with\n≥ 1 subsection?}
    O -- No --> J
    O -- Yes --> P[Click Publish Course]
    P --> Q[PUT /api/courses/:id/publish]
    Q --> R[published=true, publishedAt=now]
    R --> S[Course appears in GET /api/courses]
    S --> T[Students can enroll]
```

---

## 5. API Request Lifecycle

```mermaid
sequenceDiagram
    participant Browser
    participant TanStack
    participant api.ts
    participant Express
    participant Prisma
    participant PostgreSQL

    Browser->>TanStack: useQuery / useMutation
    TanStack->>api.ts: fetch call
    api.ts->>api.ts: attach Bearer token from localStorage
    api.ts->>Express: HTTP request
    Express->>Express: authenticate middleware\n(verify JWT, attach req.user)
    Express->>Express: requireRole middleware\n(check role if needed)
    Express->>Prisma: controller calls prisma.*
    Prisma->>PostgreSQL: SQL query
    PostgreSQL-->>Prisma: rows
    Prisma-->>Express: typed objects
    Express-->>api.ts: { success, data }
    api.ts-->>TanStack: parsed JSON
    TanStack-->>Browser: cached data / state update
```

---

## 6. Data Model Relationships (Core)

```mermaid
erDiagram
    USER {
        int id PK
        string email UK
        string role
        string firstName
        string lastName
    }
    COURSE {
        int id PK
        string slug UK
        int instructorId FK
        boolean published
        decimal price
        string level
    }
    SECTION {
        int id PK
        int courseId FK
        string title
        int order
    }
    SUBSECTION {
        int id PK
        int sectionId FK
        string title
        string content
        int duration
    }
    ENROLLMENT {
        int id PK
        int userId FK
        int courseId FK
        string status
    }
    COURSEPROGRESS {
        int id PK
        int userId FK
        int courseId FK
        float progress
    }

    USER ||--o{ COURSE : "teaches (INSTRUCTOR)"
    USER ||--o{ ENROLLMENT : "enrolls"
    USER ||--o{ COURSEPROGRESS : "tracks"
    COURSE ||--o{ SECTION : "has"
    COURSE ||--o{ ENROLLMENT : "receives"
    COURSE ||--o{ COURSEPROGRESS : "tracked by"
    SECTION ||--o{ SUBSECTION : "contains"
```

---

## 7. State Management

```mermaid
flowchart LR
    subgraph CLIENT_STATE["Client State (Zustand)"]
        AS["auth-storage\nin localStorage\n{user, token,\nisAuthenticated}"]
    end

    subgraph SERVER_STATE["Server State (TanStack Query)"]
        CQ["useCourses\ncoursesQuery"]
        EQ["useMyEnrollments\nenrollmentsQuery"]
        PQ["useCourseProgress\nprogressQuery"]
    end

    subgraph API["API (src/lib/api.ts)"]
        AF["fetch + Bearer token\nauto-injected"]
    end

    AS -->|"token injected by api.ts"| AF
    AF <--> CQ
    AF <--> EQ
    AF <--> PQ
```
