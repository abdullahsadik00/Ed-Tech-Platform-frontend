import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  Plus,
  Trash2,
  ChevronDown,
  ChevronRight,
  Globe,
  Lock,
  Play,
  Loader2,
} from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import {
  useCourse,
  useCreateSection,
  useDeleteSection,
  useCreateSubSection,
  useDeleteSubSection,
  usePublishCourse,
} from '@/hooks/queries/use-courses';
import type { Section } from '@/types/course';

interface AddSectionFormProps {
  courseId: number;
  onDone: () => void;
}

function AddSectionForm({ courseId, onDone }: AddSectionFormProps) {
  const [title, setTitle] = useState('');
  const { mutate, isPending } = useCreateSection();

  function save() {
    if (!title.trim()) return;
    mutate(
      { courseId, data: { title: title.trim(), order: 0, duration: 0 } },
      {
        onSuccess: () => {
          toast.success('Section added');
          onDone();
        },
        onError: (err: Error) => toast.error(err.message),
      }
    );
  }

  return (
    <div className="flex gap-2 mt-2">
      <Input
        autoFocus
        placeholder="Section title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') save();
          if (e.key === 'Escape') onDone();
        }}
        className="text-sm"
      />
      <Button size="sm" onClick={save} disabled={isPending || !title.trim()}>
        {isPending ? <Loader2 className="h-3 w-3 animate-spin" /> : 'Save'}
      </Button>
      <Button size="sm" variant="ghost" onClick={onDone}>
        Cancel
      </Button>
    </div>
  );
}

interface AddSubSectionFormProps {
  sectionId: number;
  courseId: number;
  order: number;
  onDone: () => void;
}

function AddSubSectionForm({
  sectionId,
  courseId,
  order,
  onDone,
}: AddSubSectionFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [duration, setDuration] = useState('');
  const { mutate, isPending } = useCreateSubSection();

  function save() {
    if (!title.trim() || !content.trim() || !duration) return;
    mutate(
      {
        sectionId,
        courseId,
        data: {
          title: title.trim(),
          content: content.trim(),
          duration: Number(duration),
          order,
          type: 'VIDEO',
        },
      },
      {
        onSuccess: () => {
          toast.success('Lesson added');
          onDone();
        },
        onError: (err: Error) => toast.error(err.message),
      }
    );
  }

  return (
    <div className="mt-2 p-3 bg-gray-50 rounded-lg space-y-2 border border-gray-200">
      <Input
        autoFocus
        placeholder="Lesson title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="text-sm"
      />
      <Input
        placeholder="Video URL (YouTube link or direct video URL)"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="text-sm"
      />
      <div className="flex gap-2">
        <Input
          type="number"
          min="1"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="text-sm"
        />
        <Button
          size="sm"
          onClick={save}
          disabled={isPending || !title.trim() || !content.trim() || !duration}
        >
          {isPending ? (
            <Loader2 className="h-3 w-3 animate-spin" />
          ) : (
            'Add lesson'
          )}
        </Button>
        <Button size="sm" variant="ghost" onClick={onDone}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

interface SectionItemProps {
  section: Section;
  courseId: number;
}

function SectionItem({ section, courseId }: SectionItemProps) {
  const [expanded, setExpanded] = useState(true);
  const [addingLesson, setAddingLesson] = useState(false);
  const { mutate: deleteSection, isPending: deleting } = useDeleteSection();
  const { mutate: deleteSubSection } = useDeleteSubSection();

  function handleDeleteSection() {
    if (!confirm(`Delete section "${section.title}" and all its lessons?`)) return;
    deleteSection(
      { sectionId: section.id, courseId },
      {
        onSuccess: () => toast.success('Section deleted'),
        onError: (err: Error) => toast.error(err.message),
      }
    );
  }

  function handleDeleteSubSection(subId: number, title: string) {
    if (!confirm(`Delete lesson "${title}"?`)) return;
    deleteSubSection(
      { subSectionId: subId, courseId },
      {
        onSuccess: () => toast.success('Lesson deleted'),
        onError: (err: Error) => toast.error(err.message),
      }
    );
  }

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-white">
        <button
          onClick={() => setExpanded((e) => !e)}
          className="flex items-center gap-2 flex-1 text-left"
        >
          {expanded ? (
            <ChevronDown className="h-4 w-4 text-gray-400" />
          ) : (
            <ChevronRight className="h-4 w-4 text-gray-400" />
          )}
          <span className="font-medium text-sm text-gray-900">
            {section.title}
          </span>
          <span className="text-xs text-gray-400">
            {section.subSections.length} lesson
            {section.subSections.length !== 1 ? 's' : ''}
          </span>
        </button>
        <Button
          variant="ghost"
          size="sm"
          className="text-red-500 hover:text-red-600 hover:bg-red-50 h-7 px-2"
          onClick={handleDeleteSection}
          disabled={deleting}
        >
          <Trash2 className="h-3.5 w-3.5" />
        </Button>
      </div>

      {expanded && (
        <div className="border-t border-gray-100 bg-gray-50 px-4 py-3 space-y-1">
          {section.subSections.length === 0 && !addingLesson && (
            <p className="text-xs text-gray-400 py-1">No lessons yet.</p>
          )}
          {section.subSections.map((ss) => (
            <div
              key={ss.id}
              className="flex items-center gap-2 py-1.5 px-2 rounded-md hover:bg-white group"
            >
              <Play className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" />
              <span className="flex-1 text-sm text-gray-700 truncate">
                {ss.title}
              </span>
              <span className="text-xs text-gray-400">{ss.duration}m</span>
              {ss.isFree ? (
                <Globe className="h-3 w-3 text-blue-500" />
              ) : (
                <Lock className="h-3 w-3 text-gray-300" />
              )}
              <button
                onClick={() =>
                  handleDeleteSubSection(ss.id, ss.title)
                }
                className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600 transition-opacity"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            </div>
          ))}

          {addingLesson ? (
            <AddSubSectionForm
              sectionId={section.id}
              courseId={courseId}
              order={section.subSections.length}
              onDone={() => setAddingLesson(false)}
            />
          ) : (
            <button
              onClick={() => setAddingLesson(true)}
              className="flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 mt-1"
            >
              <Plus className="h-3.5 w-3.5" />
              Add lesson
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default function CourseEditor() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const courseId = Number(id);
  const [addingSection, setAddingSection] = useState(false);

  const { data: courseData, isLoading } = useCourse(courseId);
  const { mutate: publishCourse, isPending: publishing } = usePublishCourse();

  const course = courseData?.data;
  const sections = course?.sections ?? [];
  const hasContent = sections.some((s) => s.subSections.length > 0);

  function handlePublish() {
    publishCourse(courseId, {
      onSuccess: (res) => {
        const updated = res.data;
        toast.success(updated.published ? 'Course published!' : 'Course unpublished.');
      },
      onError: (err: Error) => toast.error(err.message),
    });
  }

  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto space-y-4">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="text-center py-20 text-gray-500">
        Course not found.{' '}
        <Link to="/teacher/courses" className="text-blue-600 hover:underline">
          Back to my courses
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <Link
            to="/teacher/courses"
            className="text-xs text-gray-400 hover:text-gray-600 mb-1 block"
          >
            ← My courses
          </Link>
          <h1 className="text-xl font-bold text-gray-900 line-clamp-1">
            {course.title}
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <Badge
              variant={course.published ? 'default' : 'secondary'}
              className={course.published ? 'bg-emerald-600' : ''}
            >
              {course.published ? 'Published' : 'Draft'}
            </Badge>
            <span className="text-xs text-gray-400">
              {sections.length} section{sections.length !== 1 ? 's' : ''} ·{' '}
              {sections.reduce((a, s) => a + s.subSections.length, 0)} lessons
            </span>
          </div>
        </div>
        <Button
          size="sm"
          variant={course.published ? 'outline' : 'default'}
          disabled={!hasContent || publishing}
          onClick={handlePublish}
          title={!hasContent ? 'Add at least one lesson before publishing' : undefined}
        >
          {publishing
            ? 'Saving...'
            : course.published
            ? 'Unpublish'
            : 'Publish course'}
        </Button>
      </div>

      {!hasContent && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-5 text-sm text-amber-800">
          Add at least one lesson before you can publish this course.
        </div>
      )}

      {/* Sections list */}
      <div className="space-y-3">
        {sections.length === 0 && !addingSection && (
          <div className="text-center py-10 border-2 border-dashed border-gray-200 rounded-xl text-gray-400">
            <p className="font-medium">No sections yet</p>
            <p className="text-sm mt-1">
              Add your first section to start building the curriculum
            </p>
          </div>
        )}

        {sections.map((section) => (
          <SectionItem
            key={section.id}
            section={section}
            courseId={courseId}
          />
        ))}

        {addingSection ? (
          <div className="border border-gray-200 rounded-lg p-4 bg-white">
            <AddSectionForm
              courseId={courseId}
              onDone={() => setAddingSection(false)}
            />
          </div>
        ) : (
          <button
            onClick={() => setAddingSection(true)}
            className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-gray-200 rounded-lg py-3 text-sm text-gray-500 hover:border-blue-300 hover:text-blue-600 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add section
          </button>
        )}
      </div>
    </div>
  );
}
