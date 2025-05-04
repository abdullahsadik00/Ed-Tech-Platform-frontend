import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CircularProgress } from '@/components/ui/circular-progress'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AppleCarousel, AppleCard } from "@/components/ui/apple-cards-carousel";

import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Checkbox } from '@/components/ui/checkbox'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'
import { ChevronDown, CalendarDays, AlertTriangle, CheckCircle2, Clock, BookOpen, Users, MessageSquare, Download, Calendar, CheckCircle, PlayCircle, Link } from 'lucide-react'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

import React, { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'
import Modal from '@/components/ui/modal'

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              loading="lazy"

              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Programming Languages",
    title: "Mastering JavaScript for Full-Stack Development",
    src: "https://images.unsplash.com/photo-1573497490604-60f7f1a15a02?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Web Development",
    title: "Building Modern Web Apps with React and Redux",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Data Science",
    title: "Advanced Machine Learning with Python and TensorFlow",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Cloud Computing",
    title: "Deploying Applications with AWS and Docker",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Software Engineering",
    title: "System Design for Scalable Applications",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "DevOps",
    title: "CI/CD with Jenkins and Kubernetes",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];

interface Course {
  id: string,
  title: string
  progress: number
  timeSpent: string
  timeRemaining: string
  nextLesson: string
  lastAccessed: string
  status: 'on-track' | 'behind' | 'ahead'
  instructorMessage?: string
  resources: string[]
  modulesCompleted: number
  totalModules: number
  deadline: Date
}
interface CourseCardProps {
  course: Course;
  isSelected: boolean;
  onSelect: (checked: boolean) => void;
}


interface BulkActionsToolbarProps {
  selectedCourses: string[];
  totalCourses: number;
  onSelectAll: (checked: boolean) => void;
  onBulkAction: (action: 'complete' | 'calender') => void;
  sortBy: 'deadline' | 'progress';
  onSortChange: (sort: 'deadline' | 'progress') => void;
}

interface UpcommingCourseTab {
  id: string
  title: string
  startDate: Date
  prerequisites: string[]
  preparationChecklist: {
    prerequisitesVerified: boolean
    softwareInstalled: boolean
    materialsReviewed: boolean
    webinarAttended: boolean
  }
  weeklyCommitment: string
  teaserContent: string[]
  orientationWebinars: Date[]
}

function UpcomingTab() {
  const courses: UpcommingCourseTab[] = [
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

  const daysUntilStart = (startDate: Date) => {
    const diff = (startDate.getTime() - Date.now())
    return Math.ceil(diff / (1000 * 60 * 60 * 24))
  }

  const ChecklistItem = ({ label, completed }: { label: string, completed: boolean }) => {
    return (
      <div className="flex items-center gap-4">
        <Checkbox checked={completed} />
        <span className={cn('text-sm', completed ? ' text-muted-foreground line-through' : '')}>
          {label}
        </span>
      </div>)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className='text-2xl font-semibold'>Upcomming course</h2>
        <Badge variant="outline" className='gap-2'>
          <CalendarDays className='h-4 w-4' />
          {courses.length} courses starting soon
        </Badge>
      </div>
      {/* Course Grid */}
      <div className="gird grid-cols-6 md:grid-cols-2 lg:grid-cols-3" >
        {courses.map(course => (
          <div className="border rounded-xl bg-red-200 p-6" key={course.id}>
            {/* Course Header */}
            <div className="flex justify-center items-start mb-4" ><div className="">
              <h3 className='text-lg font-semibold'>{course.title}</h3><div className="text-sm text-muted-foreground mt-2">
                Starts in {daysUntilStart(course.startDate)} days
              </div>
            </div>
              <Badge variant="secondary">Upcoming</Badge>
            </div>
            {/* Preparation Checklist */}
            <div className="space-y-3 mb-6">
              <h4 className="font-medium">Preparation Checklist</h4>
              <ChecklistItem label='Verify prerequisites'
                completed={course.preparationChecklist.prerequisitesVerified} />
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
            {/* Teaser Content Carousel */}
            <Carousel className='mb-6'>
              <CarouselContent>
                {course.teaserContent.map((content, index) => (
                  <CarouselItem key={index}>
                    <div className='relative aspect-video rounded-lg bg-muted flex items-center justify-center'>
                      {content.endsWith('.mp4') ? (
                        <video className='absolute inset-0 w-full h-full object-cover rounded-lg' controls>
                          <source src={content} type='video/mp4' />
                        </video>
                      ) : (
                        <div className="p-4 text-center">
                          <PlayCircle className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                          <span className="text-sm font-medium">
                            {content.includes('quiz') ? 'Sample Quiz' : 'Sample Lesson'}
                          </span>
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            {/* Calendar Integration */}
            <div className="mb-4">
              <h4 className='font-medium mb-3'>Add to Calender</h4>
              <div className='flex gap-2'>
                <Button variant="outline" size="sm">
                  <img src="/google-calendar.svg" className="h-4 w-4 mr-2" />
                  Google
                </Button>
                <Button variant="outline" size="sm">
                  <img src="/outlook-calendar.svg" className="h-4 w-4 mr-2" />
                  Outlook
                </Button>
                <Button variant="outline" size="sm">
                  <CalendarDays className="h-4 w-4 mr-2" />
                  iCal
                </Button>

              </div>
            </div>

            {/* Learning Load & Prerequisites */}
            <Collapsible>
              <CollapsibleTrigger className='w-ful flex items-center justify-between'>
                <span className='font-medium'>Course Details</span>
                <ChevronDown className="h-4 w-4 transition-transform" />
                <CollapsibleContent className='mt-4 space-y-4'>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Weekly Commitment</h4>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{course.weeklyCommitment}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Prerequisites</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.prerequisites.map((prereq, index) => (
                        <Badge key={index} variant="outline" className="gap-1">
                          <Link className="h-3 w-3" />
                          {prereq}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {course.orientationWebinars.length > 0 && (
                    <div>
                      <h4 className='text-sm font-medium mb-2'>Orientation Webinar</h4>
                      <div className="space-y-2">
                        {
                          course.orientationWebinars.map((date, index) => (
                            <div key={index} className='flex items-center gap-2 text-sm'>
                              <CalendarDays className='h-4 w-4 text-muted-foreground' />
                              {date.toLocaleDateString()} - {date.toLocaleTimeString()}
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  )}


                </CollapsibleContent>
              </CollapsibleTrigger>

            </Collapsible>

          </div>
        ))}
      </div>
      {/* Empty State */}
      {courses.length === 0 && (
        <div className="flex flex-col items-center justify-center h-96 text-center">
          <div className="text-muted-foreground mb-4">
            No upcoming courses. Explore new courses to continue learning!
          </div>
          <Button>Browse Courses</Button>
        </div>
      )}


    </div>
  )
}
const BulkActionsToolbar:React.FC<BulkActionsToolbarProps> = ({selectedCourses,totalCourses,
  onSelectAll,
  onBulkAction,
  sortBy,
  onSortChange})=>{
    return (
      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 rounded-lg shadow-sm mb-6'>
        <div className='flex flex-wrap items-center gap-3 w-full sm:w-auto'>
          <Checkbox checked={selectedCourses.length === totalCourses && totalCourses > 0}
          onCheckedChange={onSelectAll}/>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
<Button variant="outline" className='text-sm h-9' disabled={selectedCourses.length === 0}>
Bulk Actions <ChevronDown className="ml-1.5 h-3.5 w-3.5" />
</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
            <DropdownMenuItem onClick={() => onBulkAction('complete')}>
              <CheckCircle2 className="mr-2 h-4 w-4" /> Mark Complete
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onBulkAction('calender')}>
              <CheckCircle2 className="mr-2 h-4 w-4" /> Add to Calendar
            </DropdownMenuItem>
          </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="text-sm h-9">
              Sort by {sortBy === 'deadline' ? 'deadline' : 'progress'}
              <ChevronDown className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => onSortChange('deadline')}>
              Deadline Proximity
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onSortChange('progress')}>
              Progress Percentage
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
        <div className="text-sm text-gray-500 w-full sm:w-auto text-center sm:text-right mt-2 sm:mt-0">
          {totalCourses} {totalCourses === 1 ? 'course' : 'courses'} in progress
        </div>
      </div>
    )
  }
  const CourseCard: React.FC<CourseCardProps> = ({ course, isSelected, onSelect }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    return (
      <div className="relative group h-full">
        <div className="h-full p-4 sm:p-6 border rounded-xl bg-white hover:shadow-lg transition-all duration-300 flex flex-col">
          {/* Course Header */}
          <div className="flex items-start justify-between gap-2">
            <Checkbox 
              checked={isSelected}
              onCheckedChange={onSelect}
              className="mt-0.5"
            />
  
            {/* Progress Indicator */}
            <Tooltip>
              <TooltipTrigger>
                <div className="relative w-12 h-12">
                  <CircularProgress
                    value={course.progress}
                    className="absolute inset-0"
                    // fgColor={
                    //   course.status === 'behind' ? '#ef4444' : 
                    //   course.status === 'ahead' ? '#10b981' : 
                    //   '#3b82f6'
                    // }
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                    {course.progress}%
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                {course.progress}% completed
              </TooltipContent>
            </Tooltip>
          </div>
  
          {/* Course Status */}
          <div className="mt-3 flex items-center gap-2">
            {course.status === 'behind' && (
              <Badge variant="destructive" className="gap-1">
                <AlertTriangle className="h-3 w-3 mr-1" /> Behind
              </Badge>
            )}
  
            {course.status === "ahead" && (
              <Badge variant="success" className="gap-1">
                <CheckCircle2 className="h-3 w-3 mr-1" /> Ahead
              </Badge>
            )}
  
            {course.status === 'on-track' && (
              <Badge variant="default" className="gap-1">
                <CheckCircle className="h-3 w-3 mr-1" /> On track
              </Badge>
            )}
          </div>
  
          {/* Course Title */}
          <h3 className="mt-3 text-lg font-semibold line-clamp-2">
            {course.title}
          </h3>
  
          {/* Time Metrics */}
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-gray-500" />
              <span className="text-gray-700">{course.timeSpent}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen className="h-3.5 w-3.5 text-gray-500" />
              <span className="text-gray-700">{course.timeRemaining}</span>
            </div>
          </div>
  
          {/* Next Lesson */}
          <div className="mt-4 flex-grow">
            <Button variant="outline" className="w-full text-sm truncate">
              {course.nextLesson}
            </Button>
          </div>
  
          {/* Last Accessed */}
          <div className="mt-3 text-xs text-gray-500">
            Last accessed {course.lastAccessed}
          </div>
  
          {/* Collaborative Features */}
          <div className="mt-3 flex gap-2 flex-wrap">
            <Button variant="ghost" size="sm" className="text-xs h-8 px-2">
              <Users className="mr-1.5 h-3.5 w-3.5" />Study Group
            </Button>
            <Button variant="ghost" size="sm" className="text-xs h-8 px-2">
              <MessageSquare className="mr-1.5 h-3.5 w-3.5" />Q&A
            </Button>
          </div>
  
          {/* Milestone Tracker */}
          <div className="mt-3">
            <div className="flex justify-between text-xs mb-1.5">
              <span>Modules Completed</span>
              <span>
                {course.modulesCompleted}/{course.totalModules}
              </span>
            </div>
            <Progress 
              value={(course.modulesCompleted / course.totalModules) * 100} 
              className={
                course.status === 'behind' ? 'bg-red-500' : 
                course.status === 'ahead' ? 'bg-green-500' : 
                'bg-blue-500'
              }
            />
          </div>
  
          {/* Resources & Message Button */}
          <Button
            variant="ghost"
            className="mt-4 w-full text-sm font-medium text-gray-700 hover:text-gray-900"
            onClick={() => setIsModalOpen(true)}
          >
            View Resources & Message
          </Button>
  
          {/* Modal */}
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title={course.title}
          >
            <div className="space-y-6">
              {/* Instructor Message Section */}
              {course.instructorMessage && (
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Instructor Message</h3>
                  <p className="text-gray-700">{course.instructorMessage}</p>
                </div>
              )}
  
              {/* Resources Section */}
              {course.resources.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Course Resources</h3>
                  <div className="grid gap-3">
                    {course.resources.map((resource, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 rounded-xl border hover:bg-gray-50 transition-colors"
                      >
                        <Download className="h-5 w-5 text-gray-500" />
                        <div className="flex-grow">
                          <p className="font-medium text-gray-900">{resource}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
  
              {/* Course Progress Section */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Course Progress</h3>
                <div className="grid gap-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Completion</span>
                    <span className="font-semibold">{course.progress}%</span>
                  </div>
                  <Progress 
                    value={course.progress}
                    className={
                      course.status === 'behind' ? 'bg-red-500' : 
                      course.status === 'ahead' ? 'bg-green-500' : 
                      'bg-blue-500'
                    }
                  />
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Time Spent</p>
                      <p className="font-semibold">{course.timeSpent}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Time Remaining</p>
                      <p className="font-semibold">{course.timeRemaining}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    );
  };
  
  // export default CourseCard;

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
  
  // export default EmptyState;
function InProgressTab() {
    // Example data - replace with real data
    const courses: Course[] = [
      {
        id: '1',
        title: 'Advanced React Patterns',
        progress: 65,
        timeSpent: '15h 30m',
        timeRemaining: '8h 15m',
        nextLesson: 'State Management with Zustand',
        lastAccessed: '2 hours ago',
        status: 'on-track',
        instructorMessage: 'Don\'t forget to submit Assignment 3 by Friday!',
        resources: ['Cheat Sheet.pdf', 'Course Syllabus.docx'],
        modulesCompleted: 5,
        totalModules: 8,
        deadline: new Date('2024-03-25')
      },
      {
        id: '2',
        title: 'Data Structures & Algorithms in TypeScript',
        progress: 40,
        timeSpent: '10h 45m',
        timeRemaining: '16h 30m',
        nextLesson: 'Binary Search Trees',
        lastAccessed: '1 day ago',
        status: 'behind',
        instructorMessage: 'Consider revisiting Recursion Basics before moving on.',
        resources: ['Practice Problems.pdf', 'Algorithm Visualizer Links'],
        modulesCompleted: 4,
        totalModules: 10,
        deadline: new Date('2024-04-10')
      },
      {
        id: '3',
        title: 'Full-Stack Web Development with Node.js',
        progress: 90,
        timeSpent: '35h 00m',
        timeRemaining: '3h 00m',
        nextLesson: 'Deploying with Docker',
        lastAccessed: '30 minutes ago',
        status: 'ahead',
        instructorMessage: 'Excellent progress—feel free to start the final project early!',
        resources: ['Docker Setup Guide.pdf', 'Final Project Template.zip'],
        modulesCompleted: 9,
        totalModules: 10,
        deadline: new Date('2024-05-01')
      },
      {
        id: '4',
        title: 'UI/UX Design Principles',
        progress: 25,
        timeSpent: '4h 20m',
        timeRemaining: '12h 40m',
        nextLesson: 'Color Theory in UI',
        lastAccessed: '3 days ago',
        status: 'behind',
        instructorMessage: 'Catch up on the last two modules to stay on track!',
        resources: ['Design Checklist.docx', 'Figma Templates.zip'],
        modulesCompleted: 2,
        totalModules: 8,
        deadline: new Date('2024-04-20')
      },
      {
        id: '5',
        title: 'Machine Learning Basics',
        progress: 75,
        timeSpent: '20h 10m',
        timeRemaining: '6h 50m',
        nextLesson: 'Overfitting and Regularization',
        lastAccessed: '5 hours ago',
        status: 'on-track',
        instructorMessage: 'Quiz 2 is now available—complete it by Monday.',
        resources: ['Lecture Notes.pdf', 'Dataset Samples.csv'],
        modulesCompleted: 6,
        totalModules: 8,
        deadline: new Date('2024-03-30')
      }
    ];
  
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'deadline' | 'progress'>('deadline');

  // Sort courses based on the selected sort option
  const sortedCourses = useMemo(() => {
    return [...courses].sort((a, b) => {
      if (sortBy === 'deadline') {
        return a.deadline.getTime() - b.deadline.getTime();
      } else {
        return b.progress - a.progress;
      }
    });
  }, [courses, sortBy]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedCourses(courses.map(course => course.id));
    } else {
      setSelectedCourses([]);
    }
  };

  const handleSelectCourse = (courseId: string, checked: boolean) => {
    if (checked) {
      setSelectedCourses(prev => [...prev, courseId]);
    } else {
      setSelectedCourses(prev => prev.filter(id => id !== courseId));
    }
  };

  const handleBulkAction = (action: 'complete' | 'calender') => {
    // Implement bulk action logic
    console.log(`Performing ${action} on selected courses:`, selectedCourses);
  };

  if (courses.length === 0) {
    return <EmptyState />;
  }

  
  return (
    <div className='space-y-6'>
<BulkActionsToolbar 
        selectedCourses={selectedCourses}
        totalCourses={courses.length}
        onSelectAll={handleSelectAll}
        onBulkAction={handleBulkAction}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      {/* Course Grid */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {sortedCourses.map(course => (
          <CourseCard
            key={course.id}
            course={course}
            isSelected={selectedCourses.includes(course.id)}
            onSelect={(checked) => handleSelectCourse(course.id, checked)}
          />
        ))}
      </div>

      {/* Bulk Actions & Sorting Toolbar */}
      {/* <div className="flex items-center justify-between gap-4">
        <div className="flex item-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Bulk Actions <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => handleBulkAction('complete')}>
                <CheckCircle2 className="mr-2 h-4 w-4" /> Mark Complete
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleBulkAction('calender')}>
                <CheckCircle2 className="mr-2 h-4 w-4" /> Add to Calender
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Sort by {sortBy === 'deadline' ? 'deadline' : 'progress'}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setSortBy('deadline')}>Deadline Proximity</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy('progress')}>Progress Percentage</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            {courses.length} courses in progress
          </span>
        </div>
      </div> */}

      {/* Course Grid */}
      {/* <div className="grid gap-6 md:grid-cols-6 lg:grid-cols-3">
        {courses.map(course => (
          <div className="relative group" key={course.id}>
            <div className="p-6 border rounded-xl bg-gray-50/20 hover:shadow-lg transition-shadow">
              Course Header
              <div className="flex items-start justify-between gap4">
                <Checkbox checked={selectedCourse.includes(course.id)}
                  onCheckedChange={checked => setSelectedCourse(prev => checked ? [...prev, course.id] : prev.filter(id => id !== course.id))} />

                Progress Indicator
                <Tooltip>
                  <TooltipTrigger>
                    <div className="relative w-12 h-12">
                      <CircularProgress value={course.progress} className='absolute inset-0' />
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                        {course.progress}%
                      </span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    {course.progress}% completed
                  </TooltipContent>
                </Tooltip>
              </div>
              Course Status

              <div className="mt-4 flex items-center gap-2">
                {course.status === 'behind' && (
                  <Badge variant="destructive" className='gap-1'>
                    <AlertTriangle className='h-4 w-4' /> Behind Schedule
                  </Badge>
                )}

                {course.status === "ahead" && (
                  <Badge variant="default" className='gap-1'>
                    <CheckCircle2 className='h-4 w-4'>Ahead of Schedule</CheckCircle2>
                  </Badge>
                )}

                {course.status === 'on-track' && (
                  <Badge variant="default" className='gap-1'>
                    <CheckCircle className='h-4 w-4'>On track</CheckCircle>
                  </Badge>
                )}
              </div>

              Course Title
              <h3 className="mt-4 text-lg font-semibold">
                {course.title}
              </h3>
              Time Metrics
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className='h-4 w-4 text-muted-foreground' />
                  <span>{course.timeSpent} spent</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className='h-4 w-4 text-muted-foreground' />
                  <span>{course.timeRemaining} left</span>
                </div>
              </div>

              Next Lesson
              <div className="mt-4">
                <Button variant="outline" className='w-full'>
                  {course.nextLesson}
                </Button>
              </div>
              Last Accessed
              <div className="mt-4 text-sm text-muted-foreground">
                Last accessed {course.lastAccessed}
              </div>

              Collaborative Features
              <div className="mt-4 flex gap-2">
                <Button variant="ghost" size="sm">
                  <Users className='mr-2 h-4 w-4' />Study Group
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageSquare className='mr-2 h-4 w-4' />Q&A
                </Button>
              </div>
              Milestone Tracker
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Modules Completed</span>
                  <span>
                    {course.modulesCompleted}/{course.totalModules}
                  </span>
                </div>
                <Progress value={(course.modulesCompleted / course.totalModules) * 100} />
              </div>

              Expandable Section
              <Collapsible>
                <CollapsibleTrigger className='w-full mt-4 text-sm flex items-center justify-between'>
                  <span>Resources & Message</span>
                  <ChevronDown className='h-4 w-4 transition-transform' />

                </CollapsibleTrigger>
                <CollapsibleContent>
                  Instructor Messages
                  {course.instructorMessage && (
                    <div className="mt-4 p-4 bg-muted rounded-lg">
                      <p className="text-sm font-medium">
                        Instructor Message:
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {course.instructorMessage}
                      </p>

                    </div>
                  )}
                  Resource Attachments
                  {course.resources.length > 0 && (
                    <div className="mt-4 space-y-2 ">
                      <p className="text-sm font-medium">Resources:</p>
                      {course.resources.map((resource, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <Download className='h-4 w-4' />
                          <a href="#" className="hover:underline">
                            {resource}
                          </a>
                        </div>
                      ))}

                    </div>
                  )}
                </CollapsibleContent>
              </Collapsible>



            </div>
          </div>
        ))}
      </div> */}
      {/* Empty State
      {courses.length === 0 && (
        <div className="flex flex-col items-center justify-center h-96 text-center">
          <div className="mb-4 text-muted-foreground">
            No courses in progress. Start learning!
          </div>
          <Button>Browse Courses</Button>
        </div>
      )} */}

    </div>
  )
}

const MyCourse: React.FC = () => {
  const cards = data.map((card, index) => (
    <AppleCard key={card.src} card={card} index={index} layout={true} />
  ));
  return (
    <div className="bg-[#f6f6f6]">
      <div className="space-y-4">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>
              My Course
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="home" className="">
              <TabsList className="flex h-12 space-x-1 bg-gray-50 p-1 rounded-lg border border-gray-200 w-full">
                <TabsTrigger
                  value="home"
                  className="px-4 py-2 text-sm font-medium text-gray-700 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-apple-sm rounded-md transition-all duration-200 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  Home
                </TabsTrigger>
                <TabsTrigger
                  value="inProgress"
                  className="px-4 py-2 text-sm font-medium text-gray-700 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-apple-sm rounded-md transition-all duration-200 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  In Progress
                </TabsTrigger>
                <TabsTrigger
                  value="upcomming"
                  className="px-4 py-2 text-sm font-medium text-gray-700 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-apple-sm rounded-md transition-all duration-200 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  Upcoming
                </TabsTrigger>
                <TabsTrigger
                  value="completed"
                  className="px-4 py-2 text-sm font-medium text-gray-700 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-apple-sm rounded-md transition-all duration-200 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  Completed
                </TabsTrigger>
              </TabsList>
              <TabsContent value="home">
                <Card className="bg-white rounded-xl shadow-apple-sm md:shadow-apple-md overflow-hidden border-none">
                  <CardContent className="p-4 sm:p-6">
                    {/* Mobile Layout (stacked) */}
                    <div className="flex flex-col gap-4 md:hidden">
                      {/* Image - Full width on mobile */}
                      <div className="w-full aspect-video rounded-lg overflow-hidden shadow-apple-sm">
                        <img
                          loading="lazy"

                          className="w-full h-full object-cover"
                          src="https://picsum.photos/600/400"
                          alt="Course thumbnail"
                        />
                      </div>

                      {/* Content */}
                      <div className="space-y-3">
                        <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900">
                          Course Title
                        </CardTitle>
                        <CardDescription className="text-xs sm:text-sm font-medium text-gray-500">
                          25 Videos • 20 hours
                        </CardDescription>
                        <p className="text-gray-600 text-xs sm:text-sm leading-5">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore maiores eaque
                          accusantium esse laboriosam unde natus optio consequatur.
                        </p>

                        {/* Tags - Horizontal scroll on mobile if needed */}
                        <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
                          <span className="flex-shrink-0 bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-md">
                            Beginner
                          </span>
                          <span className="flex-shrink-0 bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-md">
                            Design
                          </span>
                          <span className="flex-shrink-0 bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-md">
                            UI/UX
                          </span>
                        </div>
                      </div>

                      {/* Mobile Action Area */}
                      <div className="space-y-4 pt-2 border-t border-gray-200">
                        <Button className="w-full bg-[#3AC4FE] hover:bg-primary-dark text-white font-medium shadow-apple-sm hover:shadow-apple-md text-sm py-2">
                          Resume Course
                        </Button>

                        <div className="flex items-center justify-between">
                          <span className="text-primary text-xs sm:text-sm font-medium">
                            In person course
                          </span>

                          {/* Compact Progress for mobile */}
                          <div className="flex items-center gap-2">
                            <CircularProgress value={80} className="h-8 w-8" />
                            <Label className="text-gray-600 text-xs">80%</Label>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tablet/Desktop Layout (side by side) */}
                    <div className="hidden md:flex gap-6">
                      {/* Left Section - Image and Content */}
                      <div className="flex-1 flex flex-col sm:flex-row gap-4">
                        {/* Image */}
                        <div className="w-[160px] lg:w-[180px] xl:w-[200px] flex-shrink-0">
                          <div className="relative aspect-square overflow-hidden rounded-lg shadow-apple-sm">
                            <img
                              loading="lazy"

                              className="w-full h-full object-cover"
                              src="https://picsum.photos/400/400"
                              alt="Course thumbnail"
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <CardTitle className="text-xl font-semibold text-gray-900 mb-1">
                              Course Title
                            </CardTitle>
                            <CardDescription className="text-sm font-medium text-gray-500 mb-3">
                              25 Videos • 20 hours
                            </CardDescription>
                            <p className="text-gray-600 text-sm leading-5 mb-4 line-clamp-2">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore maiores eaque
                              accusantium esse laboriosam unde natus optio consequatur, ratione deserunt.
                            </p>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-md">
                              Beginner
                            </span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-md">
                              Design
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Right Section - Progress and Action */}
                      <div className="w-[180px] xl:w-[200px] flex flex-col items-center justify-center border-l pl-6 border-gray-200 gap-4">
                        <Button className="w-full bg-[#3AC4FE] hover:bg-primary-dark text-white font-medium shadow-apple-sm hover:shadow-apple-md">
                          Resume Course
                        </Button>

                        <span className="text-primary text-sm font-medium">
                          In person course
                        </span>

                        {/* Progress */}
                        <div className="flex flex-col items-center gap-2 w-full">
                          <CircularProgress value={80} className="h-16 w-16" />
                          <Label className="text-gray-600 text-sm">80% completed</Label>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className='bg-blue-300/20 p-3 my-4'>
                  <CardContent className='flex justify-between px-3'>
                    <Label>You have enrolled in 5 course</Label>
                    <div className='text-sm font-semibold text-gray-700 cursor-pointer'>View all   &#8594;
                    </div>
                  </CardContent>
                </Card>
                <div>
                  <h3 className='leading-none font-semibold'>Upcomming course</h3>
                  <div className="w-full h-full py-8">
                    <AppleCarousel items={cards} />
                  </div>
                </div>
                <Card className='bg-blue-300/20 p-3 my-4'>
                  <CardContent className='flex justify-between px-3'>
                    <Label>You have 1 course that you haven't started </Label>
                    <div className='text-sm font-semibold text-gray-700 cursor-pointer'>View all   &#8594;
                    </div>
                  </CardContent>
                </Card>

              </TabsContent>
              <TabsContent value="inProgress">
                <InProgressTab />
              </TabsContent>
              <TabsContent value="upcomming">
                <UpcomingTab />
              </TabsContent>
              <TabsContent value="completed">Change your password here.</TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default MyCourse