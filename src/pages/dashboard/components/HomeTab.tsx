import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { CircularProgress } from '@/components/ui/circular-progress'
import { Label } from '@/components/ui/label'
import { AppleCarousel, AppleCard } from "@/components/ui/apple-cards-carousel";

import React from 'react'

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

const HomeTab: React.FC = () => {
    const cards = data.map((card, index) => (
        <AppleCard key={card.src} card={card} index={index} layout={true} />
    ));
    return (
        <div><Card className="bg-white rounded-xl shadow-apple-sm md:shadow-apple-md overflow-hidden border-none">
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
                <h3 className='leading-none font-semibold'>Upcoming course</h3>
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
            </Card></div>
    )
}

export default HomeTab