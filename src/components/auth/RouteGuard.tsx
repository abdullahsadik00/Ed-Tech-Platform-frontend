// src/components/auth/RouteGuard.tsx
'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Role } from '@/types/user';
import { useAuth } from '@/hooks/use-auth';

export function RouteGuard({ children, allowedRoles }: {
    children: React.ReactNode;
    allowedRoles: Role[];
}) {
    const { user, loading } = useAuth()
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/auth');
        }
        if (user && !allowedRoles.includes(user.role)) {
            router.push('/unauthorized');
        }
    }, [user, loading, allowedRoles, router]);
    if (loading || !user) return <div>Loading...</div>;

    return <>{children}</>
}