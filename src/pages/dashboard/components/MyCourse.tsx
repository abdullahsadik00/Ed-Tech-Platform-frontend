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
import { ChevronDown,AlertTriangle, CheckCircle2, Clock, BookOpen, Users, MessageSquare, Download, CheckCircle} from 'lucide-react'

import React, { useState } from 'react'

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
  deadline?: Date
}

function InProgressTab() {
  const [selectedCourse, setSelectedCourse] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<'deadline' | 'progress'>('deadline')

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

  const handleBulkAction = (action: 'complete' | 'calender') => {
    // Implement bulk action logic
  }
  return (
    <div className='space-y-6'>
      {/* Bulk Actions & Sorting Toolbar */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex item-center gap-4">
          {/* <Checkbox checked={selectedCourse.length === courses.length}
            onCheckedChange={(checked) => checked ?
              setSelectedCourse(courses.map(course => course.id))
              : setSelectedCourse([])} /> */}

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
      </div>

      {/* Course Grid */}
      <div className="grid gap-6 md:grid-cols-6 lg:grid-cols-3">
        {courses.map(course => (
          <div className="relative group" key={course.id}>
            <div className="p-6 border rounded-xl bg-red-500 hover:shadow-lg transition-shadow">
              {/* Course Header */}
              <div className="flex items-start justify-between gap4">
                <Checkbox checked={selectedCourse.includes(course.id)}
                  onCheckedChange={checked => setSelectedCourse(prev => checked ? [...prev, course.id] : prev.filter(id => id !== course.id))} />

                {/* Progress Indicator */}
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
              {/* Course Status */}

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

              {/* Course Title */}
              <h3 className="mt-4 text-lg font-semibold">
                {course.title}
              </h3>
              {/* Time Metrics */}
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

              {/* Next Lesson */}
              <div className="mt-4">
                <Button variant="outline" className='w-full'>
                  {course.nextLesson}
                </Button>
              </div>
              {/* Last Accessed */}
              <div className="mt-4 text-sm text-muted-foreground">
                Last accessed {course.lastAccessed}
              </div>

              {/* Collaborative Features */}
              <div className="mt-4 flex gap-2">
                <Button variant="ghost" size="sm">
                  <Users className='mr-2 h-4 w-4' />Study Group
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageSquare className='mr-2 h-4 w-4' />Q&A
                </Button>
              </div>
              {/* Milestone Tracker */}
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Modules Completed</span>
                  <span>
                    {course.modulesCompleted}/{course.totalModules}
                  </span>
                </div>
                <Progress value={(course.modulesCompleted / course.totalModules) * 100} />
              </div>

              {/* Expandable Section */}
              <Collapsible>
                <CollapsibleTrigger className='w-full mt-4 text-sm flex items-center justify-between'>
                  <span>Resources & Message</span>
                  <ChevronDown className='h-4 w-4 transition-transform' />

                </CollapsibleTrigger>
                <CollapsibleContent>
                  {/* Instructor Messages */}
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
                  {/* Resource Attachments */}
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
      </div>
      {/* Empty State */}
      {courses.length === 0 && (
        <div className="flex flex-col items-center justify-center h-96 text-center">
          <div className="mb-4 text-muted-foreground">
            No courses in progress. Start learning!
          </div>
          <Button>Browse Courses</Button>
        </div>
      )}

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
              <TabsContent value="inProgress">Change your password here.
                <InProgressTab />
              </TabsContent>
              <TabsContent value="upcomming">Change your password here.</TabsContent>
              <TabsContent value="completed">Change your password here.</TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default MyCourse