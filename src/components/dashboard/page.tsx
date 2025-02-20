import { RouteGuard } from '@/components/auth/RouteGuard';
// import { DashboardLayout } from '@/components/dashboard/Layout';

export default function DashboardPage() {
    return (
        <RouteGuard allowedRoles={['admin', 'student', 'teacher', 'parent']}>
            Dahboard Content
        </RouteGuard>
    )
}