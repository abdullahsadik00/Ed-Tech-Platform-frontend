import { Link } from 'react-router-dom';
import { BookOpen, Users, Edit2, Globe, Lock, Plus, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Progress } from '@/components/ui/progress';
import { useMyEnrollments } from '@/hooks/queries/use-enrollment';
import { useInstructorCourses } from '@/hooks/queries/use-courses';
import { useAuth } from '@/hooks/use-auth';

function StudentCourses() {
  const { data, isLoading } = useMyEnrollments();
  const enrollments = data?.data ?? [];

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-xl border bg-white overflow-hidden">
            <Skeleton className="h-40 w-full" />
            <div className="p-4 space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-3 w-2/3" />
              <Skeleton className="h-2 w-full mt-3" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (enrollments.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-gray-200 rounded-xl text-center">
        <BookOpen className="h-12 w-12 text-gray-300 mb-4" />
        <h3 className="font-semibold text-gray-700 mb-1">No courses yet</h3>
        <p className="text-sm text-gray-500 mb-4">
          Explore courses and start learning something new.
        </p>
        <Button asChild>
          <Link to="/courses">Browse courses</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {enrollments.map((enrollment) => {
        const course = enrollment.course;
        const progress = enrollment.progress ?? 0;
        return (
          <div
            key={enrollment.id}
            className="rounded-xl border bg-white overflow-hidden hover:shadow-md transition-shadow"
          >
            {course?.thumbnail ? (
              <img
                src={course.thumbnail}
                alt={course.title}
                className="h-40 w-full object-cover"
              />
            ) : (
              <div className="h-40 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <BookOpen className="h-10 w-10 text-white/60" />
              </div>
            )}
            <div className="p-4">
              <h3 className="font-semibold text-sm text-gray-900 line-clamp-2 mb-1">
                {course?.title ?? 'Untitled Course'}
              </h3>
              {course?.instructor && (
                <p className="text-xs text-gray-500 mb-3">
                  {course.instructor.firstName} {course.instructor.lastName}
                </p>
              )}
              <div className="space-y-1 mb-3">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-1.5" />
              </div>
              <Button asChild size="sm" className="w-full" variant={progress > 0 ? 'default' : 'outline'}>
                <Link to={`/learn/${enrollment.courseId}`}>
                  <Play className="h-3.5 w-3.5 mr-1.5" />
                  {progress > 0 ? 'Continue learning' : 'Start learning'}
                </Link>
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function InstructorCourses() {
  const { data, isLoading } = useInstructorCourses();
  const courses = data?.data ?? [];

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-28" />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-xl border bg-white overflow-hidden">
              <Skeleton className="h-40 w-full" />
              <div className="p-4 space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {courses.length} course{courses.length !== 1 ? 's' : ''}
        </p>
        <Button asChild size="sm">
          <Link to="/teacher/courses/new">
            <Plus className="h-4 w-4 mr-1.5" />
            New course
          </Link>
        </Button>
      </div>

      {courses.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-gray-200 rounded-xl text-center">
          <BookOpen className="h-12 w-12 text-gray-300 mb-4" />
          <h3 className="font-semibold text-gray-700 mb-1">No courses yet</h3>
          <p className="text-sm text-gray-500 mb-4">
            Create your first course to start teaching.
          </p>
          <Button asChild>
            <Link to="/teacher/courses/new">Create course</Link>
          </Button>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="rounded-xl border bg-white overflow-hidden hover:shadow-md transition-shadow"
            >
              {course.thumbnail ? (
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="h-40 w-full object-cover"
                />
              ) : (
                <div className="h-40 bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                  <BookOpen className="h-10 w-10 text-white/60" />
                </div>
              )}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-semibold text-sm text-gray-900 line-clamp-2">
                    {course.title}
                  </h3>
                  <Badge
                    variant={course.published ? 'default' : 'secondary'}
                    className={`flex-shrink-0 text-xs ${course.published ? 'bg-emerald-600' : ''}`}
                  >
                    {course.published ? (
                      <>
                        <Globe className="h-2.5 w-2.5 mr-1" />
                        Live
                      </>
                    ) : (
                      <>
                        <Lock className="h-2.5 w-2.5 mr-1" />
                        Draft
                      </>
                    )}
                  </Badge>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {course._count?.enrollments ?? 0} students
                  </span>
                  <span>
                    {course.level.charAt(0) + course.level.slice(1).toLowerCase()}
                  </span>
                </div>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link to={`/teacher/courses/${course.id}/edit`}>
                    <Edit2 className="h-3.5 w-3.5 mr-1.5" />
                    Edit course
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Courses() {
  const { user } = useAuth();
  const isInstructor = user?.role === 'teacher' || user?.role === 'admin';

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Courses</h1>
      {isInstructor ? <InstructorCourses /> : <StudentCourses />}
    </div>
  );
}
