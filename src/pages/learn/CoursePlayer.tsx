import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  CheckCircle2,
  Circle,
  ChevronRight,
  ChevronLeft,
  BookOpen,
} from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { useCourse } from '@/hooks/queries/use-courses';
import { useCheckEnrollment } from '@/hooks/queries/use-enrollment';
import {
  useCourseProgress,
  useMarkSubSectionComplete,
} from '@/hooks/queries/use-progress';
import { useAuth } from '@/hooks/use-auth';
import type { SubSection, Section } from '@/types/course';

function getVideoSrc(url: string): { type: 'iframe' | 'video'; src: string } {
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    let embedUrl = url;
    if (url.includes('youtube.com/watch')) {
      try {
        const vid = new URL(url).searchParams.get('v');
        if (vid) embedUrl = `https://www.youtube.com/embed/${vid}`;
      } catch {
        /* use as-is */
      }
    } else if (url.includes('youtu.be/')) {
      const vid = url.split('youtu.be/')[1]?.split('?')[0];
      if (vid) embedUrl = `https://www.youtube.com/embed/${vid}`;
    }
    return { type: 'iframe', src: embedUrl };
  }
  return { type: 'video', src: url };
}

interface VideoPlayerProps {
  url: string;
}

function VideoPlayer({ url }: VideoPlayerProps) {
  const { type, src } = getVideoSrc(url);
  if (type === 'iframe') {
    return (
      <iframe
        src={src}
        className="w-full aspect-video rounded-lg bg-black"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video player"
      />
    );
  }
  return (
    <video
      src={src}
      controls
      className="w-full aspect-video rounded-lg bg-black"
    />
  );
}

export default function CoursePlayer() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const id = Number(courseId);

  const { isAuthenticated } = useAuth();
  const { data: courseData, isLoading: courseLoading } = useCourse(id);
  const { data: enrollData, isLoading: enrollLoading } = useCheckEnrollment(
    isAuthenticated ? id : 0
  );
  const { data: progressData } = useCourseProgress(
    isAuthenticated ? id : 0
  );
  const { mutate: markComplete, isPending: marking } = useMarkSubSectionComplete(id);

  const course = courseData?.data;
  const sections = course?.sections ?? [];

  const [activeSectionId, setActiveSectionId] = useState<number | null>(null);
  const [activeSubSectionId, setActiveSubSectionId] = useState<number | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Auth guard
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: `/learn/${id}` } });
    }
  }, [isAuthenticated, navigate, id]);

  // Enrollment guard
  useEffect(() => {
    if (!enrollLoading && enrollData && !enrollData.data.enrolled) {
      toast.error('You are not enrolled in this course.');
      navigate(`/courses/${id}`);
    }
  }, [enrollData, enrollLoading, navigate, id]);

  // Auto-select first subsection on load
  useEffect(() => {
    if (sections.length > 0 && activeSectionId === null) {
      const firstSection = sections[0];
      setActiveSectionId(firstSection.id);
      if (firstSection.subSections.length > 0) {
        setActiveSubSectionId(firstSection.subSections[0].id);
      }
    }
  }, [sections, activeSectionId]);

  const completedIds = progressData?.data.completedSectionIds ?? [];
  const progress = progressData?.data.progress ?? 0;

  const activeSection = sections.find((s) => s.id === activeSectionId);
  const activeSubSection = activeSection?.subSections.find(
    (ss) => ss.id === activeSubSectionId
  );

  const isSectionComplete = (sectionId: number) =>
    completedIds.includes(sectionId);

  function selectSubSection(section: Section, ss: SubSection) {
    setActiveSectionId(section.id);
    setActiveSubSectionId(ss.id);
  }

  function handleMarkComplete() {
    if (!activeSubSectionId) return;
    markComplete(activeSubSectionId, {
      onSuccess: () => toast.success('Section marked as complete!'),
      onError: (err: Error) => toast.error(err.message),
    });
  }

  if (courseLoading || enrollLoading) {
    return (
      <div className="flex h-screen">
        <div className="w-72 border-r p-4 space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="flex-1 p-8 space-y-4">
          <Skeleton className="aspect-video w-full" />
          <Skeleton className="h-6 w-64" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-950 text-white overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-72' : 'w-0'
        } flex-shrink-0 border-r border-gray-800 bg-gray-900 overflow-hidden transition-all duration-200 flex flex-col`}
      >
        {/* Sidebar header */}
        <div className="p-4 border-b border-gray-800">
          <Link
            to="/student/courses"
            className="text-xs text-gray-400 hover:text-gray-200 flex items-center gap-1 mb-3"
          >
            <BookOpen className="h-3.5 w-3.5" />
            My courses
          </Link>
          <h2 className="text-sm font-semibold line-clamp-2 text-white leading-snug">
            {course?.title}
          </h2>
          <div className="mt-3 space-y-1">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-1.5 bg-gray-700" />
          </div>
        </div>

        {/* Curriculum */}
        <nav className="flex-1 overflow-y-auto py-2">
          {sections.map((section) => (
            <div key={section.id}>
              <div
                className={`px-4 py-2 text-xs font-semibold flex items-center gap-2 ${
                  isSectionComplete(section.id)
                    ? 'text-emerald-400'
                    : 'text-gray-400'
                }`}
              >
                {isSectionComplete(section.id) ? (
                  <CheckCircle2 className="h-3.5 w-3.5" />
                ) : (
                  <Circle className="h-3.5 w-3.5" />
                )}
                {section.title}
              </div>
              {section.subSections.map((ss) => (
                <button
                  key={ss.id}
                  onClick={() => selectSubSection(section, ss)}
                  className={`w-full text-left px-6 py-2 text-xs flex items-center gap-2 transition-colors ${
                    ss.id === activeSubSectionId
                      ? 'bg-blue-600/20 text-blue-400 border-l-2 border-blue-500'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                  }`}
                >
                  <span className="flex-1 truncate">{ss.title}</span>
                  <span className="text-[10px] text-gray-600 flex-shrink-0">
                    {ss.duration}m
                  </span>
                </button>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      {/* Toggle sidebar button */}
      <button
        onClick={() => setSidebarOpen((o) => !o)}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 rounded-r-md p-1 transition-all"
        style={{ left: sidebarOpen ? '288px' : '0' }}
      >
        {sidebarOpen ? (
          <ChevronLeft className="h-4 w-4 text-gray-400" />
        ) : (
          <ChevronRight className="h-4 w-4 text-gray-400" />
        )}
      </button>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        {activeSubSection ? (
          <div className="max-w-4xl mx-auto p-6">
            <VideoPlayer url={activeSubSection.content} />

            <div className="mt-6 flex items-start justify-between gap-4">
              <div>
                <h1 className="text-lg font-semibold text-white leading-snug mb-1">
                  {activeSubSection.title}
                </h1>
                {activeSubSection.description && (
                  <p className="text-sm text-gray-400 leading-relaxed mt-2">
                    {activeSubSection.description}
                  </p>
                )}
              </div>
              {!isSectionComplete(activeSectionId ?? 0) ? (
                <Button
                  size="sm"
                  onClick={handleMarkComplete}
                  disabled={marking}
                  className="flex-shrink-0 bg-emerald-600 hover:bg-emerald-700"
                >
                  {marking ? (
                    'Saving...'
                  ) : (
                    <>
                      <CheckCircle2 className="h-4 w-4 mr-1.5" />
                      Mark complete
                    </>
                  )}
                </Button>
              ) : (
                <div className="flex items-center gap-1.5 text-sm text-emerald-400 flex-shrink-0">
                  <CheckCircle2 className="h-4 w-4" />
                  Completed
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            <div className="text-center">
              <BookOpen className="h-12 w-12 mx-auto mb-3 opacity-30" />
              <p className="font-medium">Select a lesson to start</p>
              <p className="text-sm mt-1 text-gray-600">
                Choose from the curriculum on the left
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
