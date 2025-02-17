'use client';
import { ReactNode } from 'react';
import { Navbar } from '@/components/core/Navbar';
import { useAuth } from '@/hooks/use-auth';

export default function DashboardLayout({ children }: { children: ReactNode }) {
    const { user } = useAuth();

    if (!user) {
        return <div>Redirecting...</div>;
    }

    return (
        <div>
            <Navbar />
            <main className="container mx-auto p-4">{children}</main>
        </div>
    );
}