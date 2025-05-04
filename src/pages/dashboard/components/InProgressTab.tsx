import { Button } from '@/components/ui/button'
import { CircularProgress } from '@/components/ui/circular-progress'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Checkbox } from '@/components/ui/checkbox'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import React, { useMemo, useState } from 'react'
import { ChevronDown, AlertTriangle, CheckCircle2, Clock, BookOpen, Users, MessageSquare, Download, CheckCircle, } from 'lucide-react'
import Modal from '@/components/ui/modal'

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
interface BulkActionsToolbarProps {
    selectedCourses: string[];
    totalCourses: number;
    onSelectAll: (checked: boolean) => void;
    onBulkAction: (action: 'complete' | 'calender') => void;
    sortBy: 'deadline' | 'progress';
    onSortChange: (sort: 'deadline' | 'progress') => void;
}

interface CourseCardProps {
    course: Course;
    isSelected: boolean;
    onSelect: (checked: boolean) => void;
}

const InProgressTab: React.FC = () => {
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

const BulkActionsToolbar: React.FC<BulkActionsToolbarProps> = ({ selectedCourses, totalCourses,
    onSelectAll,
    onBulkAction,
    sortBy,
    onSortChange }) => {
    return (
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 rounded-lg shadow-sm mb-6'>
            <div className='flex flex-wrap items-center gap-3 w-full sm:w-auto'>
                <Checkbox checked={selectedCourses.length === totalCourses && totalCourses > 0}
                    onCheckedChange={onSelectAll} />
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

export default InProgressTab