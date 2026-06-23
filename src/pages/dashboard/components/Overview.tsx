import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Users,
  TrendingUp,
  CheckCircle2,
  Play,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar } from '@/components/ui/calendar';
import { useAuth } from '@/hooks/use-auth';
import { useMyEnrollments } from '@/hooks/queries/use-enrollment';
import { useInstructorCourses } from '@/hooks/queries/use-courses';

type ColorKey = 'blue' | 'amber' | 'emerald' | 'violet';

const colorMap: Record<ColorKey, { bg: string; text: string; iconBg: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', iconBg: 'bg-blue-100' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-600', iconBg: 'bg-amber-100' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', iconBg: 'bg-emerald-100' },
  violet: { bg: 'bg-violet-50', text: 'text-violet-600', iconBg: 'bg-violet-100' },
};

function StatCard({
  icon: Icon,
  label,
  value,
  color,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
  color: ColorKey;
}) {
  const c = colorMap[color];
  return (
    <div className={`${c.bg} rounded-xl p-4 flex items-center gap-3`}>
      <div className={`${c.iconBg} p-2.5 rounded-lg`}>
        <Icon className={`h-5 w-5 ${c.text}`} />
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-xs text-gray-500">{label}</p>
      </div>
    </div>
  );
}

function StudentOverview({ name }: { name: string }) {
  const { data, isLoading } = useMyEnrollments();
  const enrollments = data?.data ?? [];

  const total = enrollments.length;
  const completed = enrollments.filter((e) => e.status === 'COMPLETED').length;
  const inProgress = enrollments.filter(
    (e) => (e.progress ?? 0) > 0 && e.status === 'ACTIVE'
  ).length;

  const recentEnrollments = enrollments.slice(0, 3);

  return (
    <div className="space-y-5">
      <Card className="border-0 text-white overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-5 relative overflow-hidden">
          <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/10" />
          <div className="absolute -right-2 bottom-0 h-16 w-16 rounded-full bg-white/10" />
          <h2 className="text-xl font-semibold mb-1 relative">
            Welcome back, {name || 'Student'}!
          </h2>
          <p className="text-blue-100 text-sm relative">
            {inProgress > 0
              ? `${inProgress} course${inProgress !== 1 ? 's' : ''} in progress — keep going!`
              : total > 0
              ? 'Pick up where you left off.'
              : 'Start your learning journey today.'}
          </p>
        </div>
      </Card>

      {isLoading ? (
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-20" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <StatCard icon={BookOpen} label="Enrolled" value={total} color="blue" />
          <StatCard icon={TrendingUp} label="In Progress" value={inProgress} color="amber" />
          <StatCard icon={CheckCircle2} label="Completed" value={completed} color="emerald" />
        </div>
      )}

      {(isLoading || recentEnrollments.length > 0) && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-gray-800">
              Continue learning
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            {isLoading
              ? [1, 2, 3].map((i) => <Skeleton key={i} className="h-14" />)
              : recentEnrollments.map((enrollment) => (
                  <Link
                    key={enrollment.id}
                    to={`/learn/${enrollment.courseId}`}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-md bg-blue-100 flex items-center justify-center">
                      <Play className="h-3.5 w-3.5 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {enrollment.course?.title ?? 'Course'}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Progress value={enrollment.progress ?? 0} className="h-1 flex-1" />
                        <span className="text-[10px] text-gray-400 flex-shrink-0 w-7 text-right">
                          {Math.round(enrollment.progress ?? 0)}%
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
            {!isLoading && enrollments.length > 3 && (
              <Button variant="ghost" size="sm" asChild className="w-full mt-1">
                <Link to="/student/courses" className="text-xs text-blue-600">
                  View all courses
                </Link>
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function InstructorOverview({ name }: { name: string }) {
  const { data, isLoading } = useInstructorCourses();
  const courses = data?.data ?? [];

  const total = courses.length;
  const published = courses.filter((c) => c.published).length;
  const totalStudents = courses.reduce(
    (sum, c) => sum + (c._count?.enrollments ?? 0),
    0
  );

  const recentCourses = courses.slice(0, 4);

  return (
    <div className="space-y-5">
      <Card className="border-0 text-white overflow-hidden">
        <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-5 relative overflow-hidden">
          <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/10" />
          <div className="absolute -right-2 bottom-0 h-16 w-16 rounded-full bg-white/10" />
          <h2 className="text-xl font-semibold mb-1 relative">
            Welcome back, {name || 'Instructor'}!
          </h2>
          <p className="text-violet-100 text-sm relative">
            {published > 0
              ? `${published} published course${published !== 1 ? 's' : ''} · ${totalStudents} student${totalStudents !== 1 ? 's' : ''} enrolled`
              : total > 0
              ? 'Publish your draft course to reach students.'
              : 'Create your first course to start teaching.'}
          </p>
        </div>
      </Card>

      {isLoading ? (
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-20" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <StatCard icon={BookOpen} label="Total courses" value={total} color="violet" />
          <StatCard icon={TrendingUp} label="Published" value={published} color="emerald" />
          <StatCard icon={Users} label="Total students" value={totalStudents} color="blue" />
        </div>
      )}

      {(isLoading || recentCourses.length > 0) && (
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-semibold text-gray-800">My courses</CardTitle>
            {!isLoading && courses.length > 4 && (
              <Button variant="ghost" size="sm" asChild>
                <Link to="/teacher/courses" className="text-xs text-blue-600">
                  View all
                </Link>
              </Button>
            )}
          </CardHeader>
          <CardContent className="space-y-1">
            {isLoading
              ? [1, 2, 3].map((i) => <Skeleton key={i} className="h-12" />)
              : recentCourses.map((course) => (
                  <Link
                    key={course.id}
                    to={`/teacher/courses/${course.id}/edit`}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {course.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {course._count?.enrollments ?? 0} students
                      </p>
                    </div>
                    <Badge
                      variant={course.published ? 'default' : 'secondary'}
                      className={`text-xs flex-shrink-0 ${course.published ? 'bg-emerald-600' : ''}`}
                    >
                      {course.published ? 'Live' : 'Draft'}
                    </Badge>
                  </Link>
                ))}
            {!isLoading && courses.length === 0 && (
              <Button asChild size="sm" className="w-full mt-2">
                <Link to="/teacher/courses/new">Create your first course</Link>
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export function Overview() {
  const { user } = useAuth();
  const [date, setDate] = useState<Date | undefined>(new Date());

  const isInstructor = user?.role === 'teacher' || user?.role === 'admin';
  const firstName = user?.name?.split(' ')[0] ?? '';

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex gap-6 items-start">
        <div className="flex-1 min-w-0">
          {isInstructor ? (
            <InstructorOverview name={firstName} />
          ) : (
            <StudentOverview name={firstName} />
          )}
        </div>
        <div className="w-72 flex-shrink-0 hidden lg:block">
          <Card>
            <CardContent className="pt-4 px-3 pb-3">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md w-full"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
