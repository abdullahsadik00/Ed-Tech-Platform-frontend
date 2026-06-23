import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  BookOpen,
  ChevronDown,
  Clock,
  Globe,
  Users,
  ArrowLeft,
  Play,
  CheckCircle2,
} from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useCourse } from '@/hooks/queries/use-courses';
import { useEnroll, useCheckEnrollment } from '@/hooks/queries/use-enrollment';
import { useAuth } from '@/hooks/use-auth';
import type { CourseLevel } from '@/types/course';

const levelLabel: Record<CourseLevel, string> = {
  BEGINNER: 'Beginner',
  INTERMEDIATE: 'Intermediate',
  ADVANCED: 'Advanced',
  EXPERT: 'Expert',
};

function totalDuration(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m}m`;
  return `${h}h ${m}m`;
}

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const courseId = Number(id);

  const { isAuthenticated } = useAuth();
  const { data: courseData, isLoading, isError } = useCourse(courseId);
  const { data: enrollData, isLoading: enrollLoading } = useCheckEnrollment(
    isAuthenticated ? courseId : 0
  );
  const { mutate: enroll, isPending: enrolling } = useEnroll();

  const course = courseData?.data;
  const alreadyEnrolled = enrollData?.data.enrolled ?? false;
  const price = Number(course?.price ?? 0);

  function handleEnroll() {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: `/courses/${courseId}` } });
      return;
    }
    enroll(courseId, {
      onSuccess: () => {
        toast.success('Enrolled! Starting your learning journey.');
        navigate(`/learn/${courseId}`);
      },
      onError: (err: Error) => {
        if (err.message.toLowerCase().includes('payment')) {
          toast.error('This course requires payment — coming soon!');
        } else if (err.message.toLowerCase().includes('already enrolled')) {
          navigate(`/learn/${courseId}`);
        } else {
          toast.error(err.message || 'Enrollment failed. Please try again.');
        }
      },
    });
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f8fafc]">
        <div className="bg-gray-900 py-12 px-4">
          <div className="max-w-5xl mx-auto space-y-4">
            <Skeleton className="h-8 w-2/3 bg-gray-700" />
            <Skeleton className="h-4 w-1/2 bg-gray-700" />
            <Skeleton className="h-4 w-1/3 bg-gray-700" />
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 py-8 space-y-4">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    );
  }

  if (isError || !course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-medium text-gray-700">Course not found</p>
          <Button variant="link" asChild className="mt-2">
            <Link to="/courses">Browse all courses</Link>
          </Button>
        </div>
      </div>
    );
  }

  const sections = course.sections ?? [];
  const totalLectures = sections.reduce(
    (acc, s) => acc + s.subSections.length,
    0
  );

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Nav */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/courses">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to courses
            </Link>
          </Button>
          <Separator orientation="vertical" className="h-5" />
          <Link
            to="/"
            className="flex items-center gap-1.5 font-bold text-gray-900 text-sm"
          >
            <BookOpen className="h-4 w-4 text-blue-600" />
            EdTech
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <Badge className="bg-blue-600 hover:bg-blue-600 text-white">
                {levelLabel[course.level]}
              </Badge>
              <span className="text-gray-400 text-sm">{course.language}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-3">
              {course.title}
            </h1>
            {course.shortDescription && (
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {course.shortDescription}
              </p>
            )}
            <div className="flex items-center gap-4 text-sm text-gray-400 flex-wrap">
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {(course._count?.enrollments ?? 0).toLocaleString()} students
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {totalDuration(course.duration)}
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                {totalLectures} lessons
              </span>
              <span className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                {course.language}
              </span>
            </div>
            <p className="text-gray-400 text-sm mt-3">
              Instructor:{' '}
              <span className="text-white font-medium">
                {course.instructor.firstName} {course.instructor.lastName}
              </span>
            </p>
          </div>

          {/* Enroll card */}
          <div className="md:col-span-1">
            <div className="bg-white text-gray-900 rounded-xl p-5 shadow-xl">
              {course.thumbnail && (
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full aspect-video object-cover rounded-lg mb-4"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              )}
              <div className="text-2xl font-bold mb-4">
                {price === 0 ? (
                  <span className="text-emerald-600">Free</span>
                ) : (
                  `₹${price.toLocaleString()}`
                )}
              </div>
              {alreadyEnrolled ? (
                <Button
                  className="w-full"
                  onClick={() => navigate(`/learn/${courseId}`)}
                >
                  <Play className="h-4 w-4 mr-2" />
                  Continue Learning
                </Button>
              ) : price > 0 ? (
                <Button className="w-full" disabled>
                  Payment coming soon
                </Button>
              ) : (
                <Button
                  className="w-full"
                  onClick={handleEnroll}
                  disabled={enrolling || enrollLoading}
                >
                  {enrolling ? 'Enrolling...' : 'Enroll for Free'}
                </Button>
              )}
              <ul className="mt-4 space-y-1.5 text-xs text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  {totalLectures} video lessons
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  {totalDuration(course.duration)} total content
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  Track your progress
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:pr-[calc(33.33%+2rem)]">

        {/* Learning outcomes */}
        {course.learningOutcomes && course.learningOutcomes.length > 0 && (
          <section className="mb-8 bg-white rounded-xl border border-gray-200 p-5">
            <h2 className="font-semibold text-gray-900 mb-3">
              What you'll learn
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {course.learningOutcomes.map((o) => (
                <li key={o.id} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  {o.title}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Description */}
        <section className="mb-8">
          <h2 className="font-semibold text-gray-900 mb-2">About this course</h2>
          <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
            {course.description}
          </p>
        </section>

        {/* Curriculum */}
        {sections.length > 0 && (
          <section className="mb-8">
            <h2 className="font-semibold text-gray-900 mb-1">Curriculum</h2>
            <p className="text-xs text-gray-500 mb-3">
              {sections.length} sections · {totalLectures} lessons ·{' '}
              {totalDuration(course.duration)} total
            </p>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <Accordion type="multiple" className="divide-y divide-gray-100">
                {sections.map((section) => (
                  <AccordionItem
                    key={section.id}
                    value={String(section.id)}
                    className="px-4"
                  >
                    <AccordionTrigger className="text-sm font-medium py-3 hover:no-underline">
                      <div className="flex items-center justify-between w-full pr-2">
                        <span>{section.title}</span>
                        <span className="text-xs text-gray-400 font-normal ml-auto mr-2">
                          {section.subSections.length} lessons ·{' '}
                          {section.duration}m
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-3">
                      <ul className="space-y-1">
                        {section.subSections.map((ss) => (
                          <li
                            key={ss.id}
                            className="flex items-center gap-2 text-xs text-gray-600 py-1"
                          >
                            <Play className="h-3 w-3 text-gray-400" />
                            <span className="flex-1">{ss.title}</span>
                            <span className="text-gray-400">{ss.duration}m</span>
                            {ss.isFree && (
                              <span className="text-[10px] text-blue-600 font-medium">
                                Preview
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        )}

        {/* Instructor */}
        <section className="mb-8 bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-semibold text-gray-900 mb-3">Instructor</h2>
          <div className="flex items-start gap-3">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-600">
              {course.instructor.firstName[0]}
              {course.instructor.lastName[0]}
            </div>
            <div>
              <p className="font-medium text-gray-900">
                {course.instructor.firstName} {course.instructor.lastName}
              </p>
              {course.instructor.bio && (
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                  {course.instructor.bio}
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
