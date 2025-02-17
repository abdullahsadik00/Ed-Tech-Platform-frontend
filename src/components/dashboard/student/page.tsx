'use client';
import { useCourses } from '@/hooks/use-courses';
import { CourseCard } from '@/components/core/CourseCard';

export default function StudentDashboard() {
    const { courses, loading, error } = useCourses();

    if (loading) return <div>Loading courses...</div>;
    if (error) return <div>{error}</div>;
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">My Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
}