import { Button } from '@/components/ui/button';
import { Award, BarChart, BookOpen, Download, Users, MessageCircle, Lightbulb, UserPlus, Star, ThumbsUp, MessageSquare } from 'lucide-react';
import React, { useEffect, useState } from 'react'

export interface Certificate {
    id: string;
    courseId: string;
    courseName: string;
    issueDate: string;
    thumbnailUrl: string;
    imageUrl: string;
    verificationUrl: string;
}

export interface Assessment {
    name: string;
    score: number;
    date: string;
}

export interface PreviousAttempt {
    date: string;
    score: number;
}

export interface Course {
    id: string;
    name: string;
    description: string;
    score: number;
    timeInvested: number;
    completionDate: string;
    hasCertificate: boolean;
    skills: {
        name: string;
        level: number;
    }[];
    assessments: Assessment[];
    previousAttempts?: PreviousAttempt[];
}

export interface Recommendation {
    id: string;
    title: string;
    description: string;
    skillLevel: string;
    estimatedTime: string;
    relatedTo: string[];
    imageUrl: string;
    difficulty: number;
}
interface AchievementSummaryProps {
    courses: Course[];
}
interface FeedbackModuleProps {
    course: Course;
}

const FeedbackModule: React.FC<FeedbackModuleProps> = ({ course }) => {
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [instructorRating, setInstructorRating] = useState(0);
    const [contentRating, setContentRating] = useState(0);
    const [exercisesRating, setExercisesRating] = useState(0);
    const [feedbackText, setFeedbackText] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // In a real app, this would submit to an API
        console.log({
            courseId: course.id,
            overallRating: rating,
            instructorRating,
            contentRating,
            exercisesRating,
            feedbackText
        });

        setSubmitted(true);
    };

    const renderStars = (
        currentRating: number,
        hoveredValue: number,
        setRatingFn: (value: number) => void,
        setHoveredFn: (value: number) => void
    ) => {
        return (
            <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        size={24}
                        className={`cursor-pointer transition-colors duration-150
                ${star <= (hoveredValue || currentRating)
                                ? 'text-amber-400 fill-amber-400'
                                : 'text-gray-300'}`}
                        onClick={() => setRatingFn(star)}
                        onMouseEnter={() => setHoveredFn(star)}
                        onMouseLeave={() => setHoveredFn(0)}
                    />
                ))}
            </div>
        );
    };

    if (submitted) {
        return (
            <div className="bg-white rounded-lg overflow-hidden shadow">
                <div className="px-6 py-5 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Course Feedback</h3>
                </div>
                <div className="p-6 text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                        <ThumbsUp className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Thank you for your feedback!</h3>
                    <p className="mt-2 text-sm text-gray-500">
                        Your insights help us improve our courses and learning experience.
                    </p>
                    <button
                        type="button"
                        className="mt-5 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                        onClick={() => setSubmitted(false)}
                    >
                        Submit Another Review
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow">
            <div className="px-6 py-5 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Course Feedback</h3>
                <p className="mt-1 text-sm text-gray-500">
                    Share your experience with {course.name}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Overall Rating
                        </label>
                        <div className="flex items-center">
                            {renderStars(rating, hoveredRating, setRating, setHoveredRating)}
                            <span className="ml-2 text-sm text-gray-500">
                                {rating > 0 ? getRatingLabel(rating) : 'Select a rating'}
                            </span>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-3">Detailed Assessment</h4>

                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <label className="block text-sm text-gray-600">
                                        Instructor Quality
                                    </label>
                                    <span className="text-xs text-gray-500">
                                        {instructorRating > 0 ? getRatingLabel(instructorRating) : ''}
                                    </span>
                                </div>
                                {renderStars(instructorRating, 0, setInstructorRating, () => { })}
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <label className="block text-sm text-gray-600">
                                        Course Content
                                    </label>
                                    <span className="text-xs text-gray-500">
                                        {contentRating > 0 ? getRatingLabel(contentRating) : ''}
                                    </span>
                                </div>
                                {renderStars(contentRating, 0, setContentRating, () => { })}
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <label className="block text-sm text-gray-600">
                                        Exercises & Assignments
                                    </label>
                                    <span className="text-xs text-gray-500">
                                        {exercisesRating > 0 ? getRatingLabel(exercisesRating) : ''}
                                    </span>
                                </div>
                                {renderStars(exercisesRating, 0, setExercisesRating, () => { })}
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">
                            Additional Feedback <span className="text-gray-500">(Optional)</span>
                        </label>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                                <MessageSquare size={64} />
                            </div>
                            <textarea
                                id="feedback"
                                rows={4}
                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm relative bg-transparent"
                                placeholder="What did you like or dislike about this course? What could be improved?"
                                value={feedbackText}
                                onChange={(e) => setFeedbackText(e.target.value)}
                            ></textarea>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={rating === 0}
                            className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white 
                  ${rating === 0
                                    ? 'bg-gray-300 cursor-not-allowed'
                                    : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'}`}
                        >
                            Submit Feedback
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

const getRatingLabel = (rating: number): string => {
    switch (rating) {
        case 1: return 'Poor';
        case 2: return 'Fair';
        case 3: return 'Good';
        case 4: return 'Very Good';
        case 5: return 'Excellent';
        default: return '';
    }
};
const mockCourses: Course[] = [
    {
        id: 'course1',
        name: 'Web Development Fundamentals',
        description: 'A comprehensive introduction to modern web development',
        score: 92,
        timeInvested: 48,
        completionDate: '2023-09-15',
        hasCertificate: true,
        skills: [
            { name: 'HTML5', level: 4 },
            { name: 'CSS3', level: 3 },
            { name: 'JavaScript', level: 3 },
            { name: 'Responsive Design', level: 3 }
        ],
        assessments: [
            { name: 'Mid-term Assessment', score: 88, date: '2023-08-01' },
            { name: 'Final Project', score: 95, date: '2023-09-10' }
        ]
    },
    {
        id: 'course2',
        name: 'Data Structures and Algorithms',
        description: 'Master the fundamentals of algorithms and data structures',
        score: 86,
        timeInvested: 60,
        completionDate: '2023-11-20',
        hasCertificate: true,
        skills: [
            { name: 'Algorithm Analysis', level: 3 },
            { name: 'Data Structures', level: 4 },
            { name: 'Problem Solving', level: 3 },
            { name: 'Python Programming', level: 3 }
        ],
        assessments: [
            { name: 'Quiz 1: Arrays and Strings', score: 90, date: '2023-10-05' },
            { name: 'Quiz 2: Trees and Graphs', score: 82, date: '2023-10-25' },
            { name: 'Final Exam', score: 86, date: '2023-11-15' }
        ],
        previousAttempts: [
            { date: '2023-05-10', score: 65 }
        ]
    },
    {
        id: 'course3',
        name: 'Machine Learning Essentials',
        description: 'Introduction to machine learning concepts and techniques',
        score: 89,
        timeInvested: 65,
        completionDate: '2024-01-10',
        hasCertificate: true,
        skills: [
            { name: 'Data Analysis', level: 3 },
            { name: 'Machine Learning', level: 2 },
            { name: 'Python Programming', level: 4 },
            { name: 'Statistics', level: 3 }
        ],
        assessments: [
            { name: 'Supervised Learning Assignment', score: 92, date: '2023-12-05' },
            { name: 'Unsupervised Learning Project', score: 88, date: '2023-12-20' },
            { name: 'Final Assessment', score: 87, date: '2024-01-05' }
        ]
    },
    {
        id: 'course4',
        name: 'Cloud Computing Basics',
        description: 'Learn the fundamentals of cloud infrastructure and services',
        score: 94,
        timeInvested: 35,
        completionDate: '2024-02-28',
        hasCertificate: false,
        skills: [
            { name: 'Cloud Architecture', level: 2 },
            { name: 'AWS Services', level: 3 },
            { name: 'DevOps', level: 2 },
            { name: 'Security', level: 2 }
        ],
        assessments: [
            { name: 'Cloud Infrastructure Quiz', score: 96, date: '2024-01-25' },
            { name: 'Deployment Lab Assessment', score: 92, date: '2024-02-15' }
        ]
    }
];

const AchievementSummary: React.FC<AchievementSummaryProps> = ({ courses }) => {
    const [isGeneratingReport, setIsGeneratingReport] = useState(false)
    const totalHours = courses.reduce((sum, course) => sum + course.timeInvested, 0)
    const averageScore = courses.reduce((sum, course) => sum + course.score, 0) / courses.length;
    const skillMap = new Map<string, number>()
    courses.forEach(course => {
        course.skills.forEach(skill => {
            const currentLevel = skillMap.get(skill.name) || 0
            skillMap.set(skill.name, Math.max(skill.level, currentLevel))
        })
    })

    const topSkills = Array.from(skillMap.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

    const handleGenerateReport = () => {
        setIsGeneratingReport(true);

        // Simulate report generation
        setTimeout(() => {
            setIsGeneratingReport(false);
            alert('Achievement report generated and ready for download');
        }, 1500);
    };
    return (

        <div className='bg-white rounded-lg overflow-hidden shadow'>
            <div className="px-6 py-5 border-b border-gray-200">
                <h3 className='text-lg font-medium text-gray-900 font-sans'>Achievement Summary</h3>
                <p className="mt-1 text-sm text-gray-500">Overview of your learning journey and accomplishments</p>
            </div>

            <div className="px-6 py-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 rounded-lg p-4 flex items-center">
                        <div className="flex-shrink-0 mr-4">
                            <div className="bg-blue-100 rounded-full p-3">
                                <BookOpen className="h-6 w-6 text-blue-600" />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Courses Completed</p>
                            <p className="text-2xl font-bold text-gray-900">{courses.length}</p>
                        </div>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-4 flex items-center">
                        <div className="flex-shrink-0 mr-4">
                            <div className="bg-purple-100 rounded-full p-3">
                                <Award className="h-6 w-6 text-purple-600" />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Certificates Earned</p>
                            <p className="text-2xl font-bold text-gray-900">
                                {courses.filter(course => course.hasCertificate).length}
                            </p>
                        </div>
                    </div>

                    <div className="bg-teal-50 rounded-lg p-4 flex items-center">
                        <div className="flex-shrink-0 mr-4">
                            <div className="bg-teal-100 rounded-full p-3">
                                <BarChart className="h-6 w-6 text-teal-600" />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Average Score</p>
                            <p className="text-2xl font-bold text-gray-900">{averageScore.toFixed(1)}%</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-base font-medium text-gray-900 mb-4">Learning Milestones</h4>
                        <div className="relative">
                            <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>

                            <div className="relative flex justify-center">
                                <span className="px-2 bg-white text-sm text-gray-500">Timeline</span>
                            </div>
                        </div>

                        <div className="mt-4 space-y-6">
                            {courses
                                .sort((a, b) => new Date(a.completionDate).getTime() - new Date(b.completionDate).getTime())
                                .map((course, index) => (
                                    <div key={course.id} className="relative">
                                        <div className="relative flex items-start group">
                                            <div className="h-9 flex items-center">
                                                <div className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-blue-600 rounded-full">
                                                    <span className="h-2.5 w-2.5 bg-blue-600 rounded-full"></span>
                                                </div>
                                            </div>
                                            <div className="ml-4 min-w-0 flex-1">
                                                <div className="text-sm font-medium text-gray-900 truncate">{course.name}</div>
                                                <p className="text-sm text-gray-500">{course.completionDate}</p>
                                            </div>
                                        </div>
                                        {index < courses.length - 1 && (
                                            <div className="absolute top-9 left-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-200"></div>
                                        )}
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div>
                        <h4 className="text-base font-medium text-gray-900 mb-4">Top Skills</h4>
                        <div className="space-y-4">
                            {topSkills.map(([skillName, level], index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm font-medium text-gray-900">{skillName}</span>
                                        <span className="text-sm text-gray-500">
                                            {getLevelLabel(level)}
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div
                                            className="bg-blue-600 h-2.5 rounded-full"
                                            style={{ width: `${(level / 4) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h4 className="text-sm font-medium text-gray-900 mb-2">Learning Stats</h4>

                            <div className="grid grid-cols-2 gap-2">
                                <div className="p-3 bg-white rounded border border-gray-100">
                                    <p className="text-xs text-gray-500">Total Learning Hours</p>
                                    <p className="text-lg font-medium text-gray-900">{totalHours}</p>
                                </div>

                                <div className="p-3 bg-white rounded border border-gray-100">
                                    <p className="text-xs text-gray-500">Courses Started</p>
                                    <p className="text-lg font-medium text-gray-900">{courses.length + 2}</p>
                                </div>

                                <div className="p-3 bg-white rounded border border-gray-100">
                                    <p className="text-xs text-gray-500">Completion Rate</p>
                                    <p className="text-lg font-medium text-gray-900">
                                        {Math.round((courses.length / (courses.length + 2)) * 100)}%
                                    </p>
                                </div>

                                <div className="p-3 bg-white rounded border border-gray-100">
                                    <p className="text-xs text-gray-500">Assessment Attempts</p>
                                    <p className="text-lg font-medium text-gray-900">
                                        {courses.reduce((sum, course) => sum + course.assessments.length, 0)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-center">
                    <Button
                        variant="outline"
                        onClick={handleGenerateReport}
                    // className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                    >
                        {isGeneratingReport ? (
                            <>
                                <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                                Generating Report...
                            </>
                        ) : (
                            <>
                                <Download size={16} className="mr-2" />
                                Generate Achievement Report
                            </>
                        )}
                    </Button>
                </div>
            </div>
        </div>
    )
}

const CommunityIntegration: React.FC = () => {
    // In a real application, these would be fetched from an API
    const mentors = [
        {
            id: 'm1',
            name: 'Dr. Sarah Chen',
            role: 'ML Engineer & Education Lead',
            specialty: 'Machine Learning & Data Science',
            imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            availability: 'Available'
        },
        {
            id: 'm2',
            name: 'James Wilson',
            role: 'Senior Software Architect',
            specialty: 'System Design & Cloud Architecture',
            imageUrl: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            availability: 'Next week'
        },
        {
            id: 'm3',
            name: 'Priya Sharma',
            role: 'Full-Stack Developer',
            specialty: 'Web Development & UI/UX',
            imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            availability: 'Limited'
        }
    ];

    const discussionGroups = [
        {
            id: 'dg1',
            name: 'Machine Learning Study Group',
            members: 215,
            activity: 'Very Active',
            lastPost: '5 minutes ago'
        },
        {
            id: 'dg2',
            name: 'Web Development Mastery',
            members: 458,
            activity: 'Active',
            lastPost: '1 hour ago'
        },
        {
            id: 'dg3',
            name: 'Cloud Architecture Patterns',
            members: 124,
            activity: 'Moderate',
            lastPost: 'Yesterday'
        }
    ];

    return (
        <div className='bg-white rounded-lg overflow-hidden shadow'>
            <div className="px-6 py-5 border-b border-gray-200">
                <h3 className='text-lg font-medium text-gray-900'>Community & Collaboration</h3>
                <p className='mt-1 text-sm text-gray-500'>Connect with alumni, mentors, and join collaborative projects</p>
            </div>

            <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <div className="flex items-center mb-4">
                            <UserPlus className="h-5 w-5 text-purple-600 mr-2" />
                            <h4 className="text-base font-medium text-gray-900">Mentor Connections</h4>
                        </div>

                        <div className="bg-purple-50 rounded-lg p-4">
                            <p className="text-sm text-gray-600 mb-4">
                                Connect with industry experts for guidance and career advice.
                            </p>

                            <div className="space-y-4">
                                {mentors.map(mentor => (
                                    <div key={mentor.id} className="bg-white rounded-lg p-3 shadow-sm flex items-center">
                                        <img
                                            src={mentor.imageUrl}
                                            alt={mentor.name}
                                            className="h-12 w-12 rounded-full object-cover mr-3"
                                        />
                                        <div className="flex-1">
                                            <h5 className="text-sm font-medium text-gray-900">{mentor.name}</h5>
                                            <p className="text-xs text-gray-500">{mentor.specialty}</p>
                                            <div className="mt-1 flex items-center">
                                                <span className={`inline-block h-2 w-2 rounded-full mr-1 ${mentor.availability === 'Available'
                                                    ? 'bg-green-500'
                                                    : mentor.availability === 'Next week'
                                                        ? 'bg-amber-500'
                                                        : 'bg-gray-500'
                                                    }`}></span>
                                                <span className="text-xs text-gray-500">{mentor.availability}</span>
                                            </div>
                                        </div>
                                        <button className="px-3 py-1 border border-purple-200 rounded-md bg-purple-50 text-purple-700 text-xs hover:bg-purple-100 transition-colors">
                                            Connect
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <button className="mt-4 w-full text-sm text-center text-purple-700 hover:text-purple-800">
                                View all mentors →
                            </button>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center mb-4">
                            <MessageCircle className="h-5 w-5 text-blue-600 mr-2" />
                            <h4 className="text-base font-medium text-gray-900">Discussion Forums</h4>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-4">
                            <p className="text-sm text-gray-600 mb-4">
                                Join topic-based discussion groups with fellow graduates.
                            </p>

                            <div className="space-y-3">
                                {discussionGroups.map(group => (
                                    <div key={group.id} className="bg-white rounded-lg p-3 shadow-sm">
                                        <div className="flex justify-between items-start">
                                            <h5 className="text-sm font-medium text-gray-900">{group.name}</h5>
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${group.activity === 'Very Active'
                                                ? 'bg-green-100 text-green-800'
                                                : group.activity === 'Active'
                                                    ? 'bg-blue-100 text-blue-800'
                                                    : 'bg-gray-100 text-gray-800'
                                                }`}>
                                                {group.activity}
                                            </span>
                                        </div>
                                        <div className="mt-2 flex justify-between text-xs text-gray-500">
                                            <span className="flex items-center">
                                                <Users size={12} className="mr-1" />
                                                {group.members} members
                                            </span>
                                            <span>Last post: {group.lastPost}</span>
                                        </div>
                                        <button className="mt-2 w-full text-center py-1 border border-blue-200 rounded-md bg-blue-50 text-blue-700 text-xs hover:bg-blue-100 transition-colors">
                                            Join Discussion
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6">
                                <div className="flex items-center mb-3">
                                    <Lightbulb className="h-4 w-4 text-amber-500 mr-2" />
                                    <h5 className="text-sm font-medium text-gray-900">Collaborative Projects</h5>
                                </div>

                                <div className="bg-white rounded-lg p-3 shadow-sm">
                                    <p className="text-sm text-gray-600 mb-3">
                                        Apply your skills by joining community-driven projects.
                                    </p>

                                    <Button variant="outline" className="w-full text-center  border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100   ">
                                        Explore Project Opportunities
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Alumni Network</h4>
                    <p className="text-sm text-gray-600">
                        Access exclusive benefits for program graduates, including job opportunities, events, and networking.
                    </p>
                    <Button variant="outline"
                        className="mt-4">
                        Join Alumni Network
                    </Button>
                </div>
            </div>

        </div>
    )
}
const CompletedTab: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        // Simulate API call
        const fetchCourses = async () => {
            try {
                // In a real app, this would be an API call
                await new Promise(resolve => setTimeout(resolve, 800));
                setCourses(mockCourses);
                setLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err : new Error('Failed to fetch courses'));
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    if (loading) {
        return (
            <div className="py-12 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading your achievements...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="py-12 text-center text-red-500">
                <p>Failed to load your completed courses. Please try again later.</p>
            </div>
        );
    }

    if (courses.length === 0) {
        return (
            <div className="py-12 text-center">
                <h3 className="text-lg font-medium text-gray-900">No completed courses yet</h3>
                <p className="mt-2 text-gray-600">
                    Complete your first course to see your achievements and track your progress.
                </p>
            </div>
        );
    }
    return (
        <div className='space-y-8'>
            <AchievementSummary courses={courses} />
            <CommunityIntegration />
            <FeedbackModule course={courses[0]} />

        </div>
    )
}
const getLevelLabel = (level: number): string => {
    switch (level) {
        case 1: return 'Beginner';
        case 2: return 'Intermediate';
        case 3: return 'Advanced';
        case 4: return 'Expert';
        default: return 'N/A';
    }
};

export default CompletedTab