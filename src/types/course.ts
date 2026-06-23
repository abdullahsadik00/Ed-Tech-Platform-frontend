export type CourseLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'EXPERT';
export type ContentType = 'VIDEO' | 'DOCUMENT' | 'QUIZ' | 'ASSIGNMENT' | 'LIVE_SESSION';
export type EnrollmentStatus = 'ACTIVE' | 'COMPLETED' | 'CANCELLED' | 'SUSPENDED';

export interface Instructor {
  id: number;
  firstName: string;
  lastName: string;
  bio?: string;
  avatar?: string;
}

export interface SubSection {
  id: number;
  title: string;
  description?: string;
  type: ContentType;
  content: string;
  duration: number;
  order: number;
  isFree: boolean;
  isPublished: boolean;
}

export interface Section {
  id: number;
  title: string;
  description?: string;
  order: number;
  duration: number;
  isPublished: boolean;
  isFree: boolean;
  subSections: SubSection[];
}

export interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  shortDescription?: string;
  thumbnail: string;
  previewVideo?: string;
  price: string;
  currency: string;
  level: CourseLevel;
  language: string;
  duration: number;
  totalLectures: number;
  published: boolean;
  featured: boolean;
  publishedAt?: string;
  createdAt: string;
  instructor: Instructor;
  sections?: Section[];
  prerequisites?: Array<{ id: number; title: string; description: string }>;
  requirements?: Array<{ id: number; requirement: string }>;
  learningOutcomes?: Array<{ id: number; title: string; description: string }>;
  _count?: { enrollments: number; reviews: number };
}

export interface Enrollment {
  id: number;
  courseId: number;
  userId: number;
  status: EnrollmentStatus;
  enrolledAt: string;
  completedAt?: string;
  price: string;
  currency: string;
  course?: Pick<Course, 'id' | 'title' | 'slug' | 'thumbnail' | 'level' | 'language' | 'instructor'>;
  progress?: number;
  lastAccessed?: string;
}

export interface CourseProgress {
  progress: number;
  completedSectionIds: number[];
  lastAccessed: string | null;
  timeSpent: number;
}

export interface Pagination {
  total: number;
  pages: number;
  page: number;
  limit: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export interface PaginatedCoursesResponse {
  courses: Course[];
  pagination: Pagination;
}
