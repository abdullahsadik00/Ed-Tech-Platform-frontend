import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Checkbox } from '@/components/ui/checkbox';
import Modal from '@/components/ui/modal';
import { calculateDaysUntil, cn, formatDate, formatTime, getPreparationProgress } from '@/lib/utils';
import { BookOpen, CalendarDays, Clock, Link, PlayCircle } from 'lucide-react';
import React, { useState } from 'react'

interface PreparationChecklist {
  prerequisitesVerified: boolean;
  softwareInstalled: boolean;
  materialsReviewed: boolean;
  webinarAttended: boolean;
}

interface Course {
  id: string;
  title: string;
  startDate: Date;
  prerequisites: string[];
  preparationChecklist: PreparationChecklist;
  weeklyCommitment: string;
  teaserContent: string[];
  orientationWebinars: Date[];
}

interface CourseCardProps {
  course: Course;
}

interface ChecklistItemProps {
  label: string;
  completed: boolean;
  onToggle?: () => void;
}

const UpcomingTab: React.FC = () => {
  const courses: Course[] = [
    {
      id: '1',
      title: 'Machine Learning Fundamentals',
      startDate: new Date('2025-05-15'),
      prerequisites: ['Python Basics', 'Linear Algebra'],
      preparationChecklist: {
        prerequisitesVerified: false,
        softwareInstalled: true,
        materialsReviewed: false,
        webinarAttended: false
      },
      weeklyCommitment: '6-8 hours/week',
      teaserContent: [
        'intro-video.mp4',
        'sample-lesson-1.pdf',
        'sample-quiz.html'
      ],
      orientationWebinars: [
        new Date('2024-04-10T14:00:00'),
        new Date('2024-04-12T18:00:00')
      ]
    },
    // Add more course objects...
  ]

  return (
    <div className="space-y-6 p-1">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Upcoming Courses
        </h2>
        {courses.length > 0 && (
          <Badge
            variant="outline"
            className="gap-2 py-1.5 px-3 self-start sm:self-auto"
          >
            <CalendarDays className="h-4 w-4 text-blue-500" />
            <span>
              {courses.length} course{courses.length !== 1 ? 's' : ''} starting soon
            </span>
          </Badge>
        )}
      </div>

      {/* Course Grid */}
      {courses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  )
}
const EmptyState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-80 text-center p-6 bg-white rounded-lg shadow-sm border border-dashed border-gray-300">
      <BookOpen className="h-12 w-12 text-gray-400 mb-4" />
      <h3 className="text-lg font-medium text-gray-900 mb-2">No courses in progress</h3>
      <p className="text-sm text-gray-500 mb-6 max-w-md">
        You haven't started any courses yet. Browse our catalog to find courses that interest you.
      </p>
      <Button className="animate-pulse">Browse Courses</Button>
    </div>
  );
};

function CourseCard({ course }: CourseCardProps) {
  const daysUntil = calculateDaysUntil(course.startDate);
  const progress = getPreparationProgress(course.preparationChecklist);

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div
      className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Progress bar */}
      <div className="h-1.5 bg-gray-100 w-full">
        <div
          className="h-full bg-blue-500 transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="p-6">
        {/* Course Header */}
        <div className="flex justify-between items-start mb-5">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
            <div className="text-sm text-gray-600 flex items-center">
              <CalendarDays className="h-3.5 w-3.5 mr-1.5" />
              Starts in <span className="font-medium ml-1 text-blue-600">{daysUntil} days</span>
            </div>
          </div>
          <Badge
            variant="secondary"
            className="animate-pulse bg-blue-50 text-blue-600"
          >
            Upcoming
          </Badge>
        </div>

        {/* Preparation Checklist */}
        <div className="space-y-3 mb-6">
          <h4 className="font-medium text-gray-900 flex items-center">
            Preparation Checklist
            <span className="ml-auto text-sm font-normal text-gray-500">
              {progress}% complete
            </span>
          </h4>

          <div className="space-y-3">
            <ChecklistItem
              label="Verify prerequisites"
              completed={course.preparationChecklist.prerequisitesVerified}
            />
            <ChecklistItem
              label="Install required software"
              completed={course.preparationChecklist.softwareInstalled}
            />
            <ChecklistItem
              label="Review introductory materials"
              completed={course.preparationChecklist.materialsReviewed}
            />
            <ChecklistItem
              label="Attend orientation webinar"
              completed={course.preparationChecklist.webinarAttended}
            />
          </div>
        </div>

        {/* Teaser Content Carousel */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-900 mb-3">Preview Course Content</h4>
          <Carousel className="w-full">
            <CarouselContent>
              {course.teaserContent.map((content, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden group">
                    {content.endsWith('.mp4') ? (
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent group-hover:opacity-75 transition-opacity" />
                        <PlayCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 text-white opacity-90 group-hover:scale-110 transition-transform" />
                        <span className="absolute bottom-3 left-3 text-white font-medium text-sm">
                          Course Introduction
                        </span>
                      </div>
                    ) : content.includes('quiz') ? (
                      <div className="p-4 text-center group-hover:scale-105 transition-transform">
                        <div className="bg-blue-50 rounded-full p-3 inline-flex mb-2">
                          <PlayCircle className="h-8 w-8 text-blue-500" />
                        </div>
                        <span className="block text-sm font-medium text-gray-800">
                          Sample Quiz
                        </span>
                      </div>
                    ) : (
                      <div className="p-4 text-center group-hover:scale-105 transition-transform">
                        <div className="bg-amber-50 rounded-full p-3 inline-flex mb-2">
                          <PlayCircle className="h-8 w-8 text-amber-500" />
                        </div>
                        <span className="block text-sm font-medium text-gray-800">
                          Sample Lesson
                        </span>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselNext />
              <CarouselPrevious /> */}
          </Carousel>
        </div>

        {/* Calendar Integration */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-900 mb-3">Add to Calendar</h4>
          <div className="flex gap-2 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors"
            >
              <svg
                className="h-4 w-4 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="12" fill="#4285F4" />
                <rect x="6" y="10" width="12" height="8" rx="1" fill="white" />
                <rect x="8" y="6" width="2" height="4" rx="0.5" fill="white" />
                <rect x="14" y="6" width="2" height="4" rx="0.5" fill="white" />
              </svg>
              Google
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors"
            >
              <svg
                className="h-4 w-4 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="12" fill="#0078D4" />
                <path d="M7 7H17V17H7V7Z" fill="white" />
                <path d="M9 9H15V11H9V9Z" fill="#0078D4" />
                <path d="M9 12H12V15H9V12Z" fill="#0078D4" />
              </svg>
              Outlook
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors"
            >
              <CalendarDays className="h-4 w-4 mr-2" />
              iCal
            </Button>
          </div>
        </div>

        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={course.title}
        >
          <div className="space-y-6">
            {/* New Modal */}
            {/* Scrollable content */}
            <div className="overflow-y-auto p-6 space-y-6 flex-1">
              {/* Course title and start date */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h2>
                <div className="flex items-center gap-2 text-gray-600">
                  <CalendarDays className="h-4 w-4 text-blue-500" />
                  <span>Starts on {formatDate(course.startDate)}</span>
                </div>
              </div>

              {/* Weekly commitment */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Weekly Commitment</h4>
                <div
                  className="flex items-center gap-2 text-gray-600 p-3 bg-blue-50/50 rounded-lg border border-blue-100/50"
                >
                  <Clock className="h-5 w-5 text-blue-500" />
                  <span className="font-medium">{course.weeklyCommitment}</span>
                </div>
              </div>

              {/* Prerequisites */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Prerequisites</h4>
                <div className="space-y-2">
                  {course.prerequisites.map((prereq, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-100/80 flex items-center justify-center flex-shrink-0">
                        <Link className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-800">{prereq}</span>
                        <p className="text-xs text-gray-500">Required for this course</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Orientation Webinars */}
              {course.orientationWebinars.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Orientation Webinars</h4>
                  <div className="space-y-3">
                    {course.orientationWebinars.map((date, index) => (
                      <div
                        key={index}
                        className="flex items-start sm:items-center flex-col sm:flex-row sm:gap-4 p-3 rounded-lg border border-gray-200 hover:border-blue-200 hover:bg-blue-50/20 transition-all cursor-pointer"
                      >
                        <div className="flex items-center gap-3 mb-2 sm:mb-0">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <CalendarDays className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="space-y-0.5">
                            <div className="text-sm font-medium text-gray-800">{formatDate(date)}</div>
                            <div className="text-xs text-gray-500">{formatTime(date)}</div>
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className="bg-green-50 text-green-700 border-green-200 ml-0 sm:ml-auto"
                        >
                          Available
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Course timeline */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Course Timeline</h4>
                <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-1 before:w-px before:h-[calc(100%-8px)] before:bg-blue-200">
                  <div className="relative">
                    <div className="absolute left-[-24px] top-0 w-5 h-5 rounded-full border-2 border-blue-500 bg-white"></div>
                    <h5 className="text-sm font-semibold text-gray-800">Preparation Phase</h5>
                    <p className="text-xs text-gray-500 mt-1">Complete all checklist items before the course starts</p>
                  </div>

                  <div className="relative">
                    <div className="absolute left-[-24px] top-0 w-5 h-5 rounded-full border-2 border-blue-300 bg-white"></div>
                    <h5 className="text-sm font-semibold text-gray-800">Course Start</h5>
                    <p className="text-xs text-gray-500 mt-1">{formatDate(course.startDate)}</p>
                  </div>

                  <div className="relative">
                    <div className="absolute left-[-24px] top-0 w-5 h-5 rounded-full border-2 border-blue-300 bg-white"></div>
                    <h5 className="text-sm font-semibold text-gray-800">Mid-Course Project</h5>
                    <p className="text-xs text-gray-500 mt-1">Four weeks after course start</p>
                  </div>

                  <div className="relative">
                    <div className="absolute left-[-24px] top-0 w-5 h-5 rounded-full border-2 border-blue-300 bg-white"></div>
                    <h5 className="text-sm font-semibold text-gray-800">Final Assessment</h5>
                    <p className="text-xs text-gray-500 mt-1">Eight weeks after course start</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>

        <Button
          variant="outline"
          className="w-full py-3 px-4 bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg text-gray-900 font-medium flex items-center justify-center gap-2 group/button border border-gray-200"
          onClick={() => setIsModalOpen(true)}
        >
          Course Details
        </Button>

      </div>
    </div>)
}
function ChecklistItem({ label, completed, onToggle }: ChecklistItemProps) {
  return (
    <div
      className="flex items-center gap-3 group cursor-pointer"
      onClick={onToggle}
    >
      <Checkbox
        checked={completed}
        className="transition-all group-hover:scale-110"
      />
      <span
        className={cn(
          'text-sm transition-all duration-300',
          completed ? 'text-gray-500 line-through' : 'text-gray-800',
          'group-hover:text-blue-600'
        )}
      >
        {label}
      </span>
    </div>
  );
}
export default UpcomingTab