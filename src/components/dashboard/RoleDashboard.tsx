'use client';
import { useAuth } from '@/hooks/use-auth';
import { BentoGrid } from './BentoGrid';
import { Role } from '@/types/user';
import { AnnouncementsWidget } from '../widgets/AnnouncementsWidget';
// Import all required widgets
import { SystemHealthWidget } from '../widgets/SystemHealthWidget';
// import { UserStatsWidget } from '../widgets/UserStatsWidget';
// ... import all other necessary widgets

type BentoItem = {
    id: string;
    component: React.ReactNode;
    col: number;
    row: number;
}

const getRoleWidgets = (role: Role): BentoItem[] => {
    const commonWidgets: BentoItem[] = [
        {
            id: 'announcements',
            component: <AnnouncementsWidget />,
            col: 4,
            row: 1
        }
    ];

    switch (role) {
        case 'admin':
            return [...commonWidgets,
            { id: 'system-health', component: <SystemHealthWidget />, col: 2, row: 2 },
            { id: 'user-stats', component: "<UserStatsWidget />", col: 2, row: 2 },
            { id: 'recent-activity', component: "<AdminActivityWidget />", col: 4, row: 2 }
            ];
        case 'teacher':
            return [...commonWidgets,
            { id: 'course-progress', component: "<CourseProgressWidget />", col: 2, row: 2 },
            { id: 'grade-distribution', component: "<GradeDistributionWidget />", col: 2, row: 2 },
            { id: 'upcoming-classes', component: "<TeacherScheduleWidget />", col: 4, row: 1 }
            ];
        case 'student':
            return [...commonWidgets,
            { id: 'my-progress', component: "<StudentProgressWidget />", col: 3, row: 2 },
            { id: 'upcoming-deadlines', component: "<DeadlinesWidget />", col: 1, row: 2 },
            { id: 'recommended-courses', component: "<CourseRecommendations />", col: 4, row: 1 }
            ];
        case 'parent':
            return [...commonWidgets,
            { id: 'child-progress', component: "<ChildProgressWidget />", col: 3, row: 2 },
            { id: 'attendance', component: "<AttendanceWidget />", col: 1, row: 2 },
            { id: 'school-updates', component: "<SchoolUpdatesWidget />", col: 4, row: 1 }
            ];
        default:
            return commonWidgets;
    }
}

export const RoleDashboard = () => {
    const { user } = useAuth();

    if (!user?.role) {
        return <div>Loading...</div>;
    }

    return (
        <BentoGrid
            role={user.role as Role}
            initialItems={getRoleWidgets(user.role as Role)}
        />
    );
}