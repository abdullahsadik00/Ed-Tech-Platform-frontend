import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Users, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { useCourses } from '@/hooks/queries/use-courses';
import type { Course, CourseLevel } from '@/types/course';

const levelVariant: Record<CourseLevel, string> = {
  BEGINNER: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  INTERMEDIATE: 'bg-blue-100 text-blue-700 border-blue-200',
  ADVANCED: 'bg-orange-100 text-orange-700 border-orange-200',
  EXPERT: 'bg-red-100 text-red-700 border-red-200',
};

function CourseCard({ course }: { course: Course }) {
  const price = Number(course.price);
  return (
    <Link to={`/courses/${course.id}`} className="group block">
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all hover:shadow-md hover:-translate-y-0.5">
        <div className="aspect-video bg-gray-100 overflow-hidden">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://placehold.co/640x360/e2e8f0/94a3b8?text=Course';
            }}
          />
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span
              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${levelVariant[course.level]}`}
            >
              {course.level.charAt(0) + course.level.slice(1).toLowerCase()}
            </span>
            {price === 0 && (
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-violet-100 text-violet-700 border border-violet-200">
                Free
              </span>
            )}
          </div>
          <h3 className="font-semibold text-gray-900 line-clamp-2 mb-1 text-sm leading-snug group-hover:text-blue-600 transition-colors">
            {course.title}
          </h3>
          <p className="text-xs text-gray-500 mb-3">
            by {course.instructor.firstName} {course.instructor.lastName}
          </p>
          <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-3">
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              {(course._count?.enrollments ?? 0).toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {course.duration}m
            </span>
            <span className="font-semibold text-sm text-gray-900">
              {price === 0 ? 'Free' : `₹${price.toLocaleString()}`}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function CardSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <Skeleton className="aspect-video w-full" />
      <div className="p-4 space-y-2">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-3 w-28" />
        <div className="pt-1 flex justify-between">
          <Skeleton className="h-3 w-12" />
          <Skeleton className="h-3 w-12" />
          <Skeleton className="h-3 w-10" />
        </div>
      </div>
    </div>
  );
}

export default function CourseListing() {
  const [inputValue, setInputValue] = useState('');
  const [search, setSearch] = useState('');
  const [level, setLevel] = useState('');
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useCourses({
    search,
    level: level || undefined,
    page,
    limit: 12,
  });

  const handleSearch = useCallback(() => {
    setSearch(inputValue.trim());
    setPage(1);
  }, [inputValue]);

  const courses = data?.data.courses ?? [];
  const pagination = data?.data.pagination;

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Nav */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-gray-900 text-sm"
          >
            <BookOpen className="h-5 w-5 text-blue-600" />
            EdTech
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/login">Get started</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Browse Courses
          </h1>
          <p className="text-sm text-gray-500">
            {isLoading
              ? 'Loading...'
              : pagination
              ? `${pagination.total.toLocaleString()} courses available`
              : 'Discover what to learn next'}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="flex flex-1 gap-2 max-w-lg">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <Input
                placeholder="Search courses..."
                className="pl-9"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <Button onClick={handleSearch} variant="secondary">
              Search
            </Button>
          </div>
          <Select
            value={level || 'ALL'}
            onValueChange={(v) => {
              setLevel(v === 'ALL' ? '' : v);
              setPage(1);
            }}
          >
            <SelectTrigger className="w-[160px] bg-white">
              <SelectValue placeholder="All levels" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All levels</SelectItem>
              <SelectItem value="BEGINNER">Beginner</SelectItem>
              <SelectItem value="INTERMEDIATE">Intermediate</SelectItem>
              <SelectItem value="ADVANCED">Advanced</SelectItem>
              <SelectItem value="EXPERT">Expert</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {isError ? (
          <div className="text-center py-24 text-gray-500">
            <p className="font-medium">Failed to load courses</p>
            <p className="text-sm mt-1">Check your connection and try again.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {isLoading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <CardSkeleton key={i} />
                ))
              : courses.length === 0
              ? (
                <div className="col-span-full text-center py-24 text-gray-400">
                  <BookOpen className="h-10 w-10 mx-auto mb-3 opacity-30" />
                  <p className="font-medium text-gray-600">No courses found</p>
                  <p className="text-sm mt-1">Try a different search or filter</p>
                </div>
              )
              : courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
          </div>
        )}

        {pagination && pagination.pages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-12">
            <Button
              variant="outline"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
            >
              Previous
            </Button>
            <span className="text-sm text-gray-500">
              Page {page} of {pagination.pages}
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={page === pagination.pages}
              onClick={() => setPage((p) => p + 1)}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
