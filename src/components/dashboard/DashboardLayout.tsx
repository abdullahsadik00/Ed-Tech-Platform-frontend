// components/dashboard/DashboardLayout.tsx
'use client';
import { ReactNode, useState } from 'react';
import { DashboardProvider } from './context';
import { useAuth } from '@/hooks/use-auth';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
    const { user } = useAuth();

    if (!user) {
        return <div>Redirecting...</div>;
    }

    return (
        <DashboardProvider role={user.role}>
            <div className="min-h-screen bg-gray-50">
                <Sidebar role={'admin'} isOpen={false} onClose={function (): void {
                    console.log('Clicked');
                }} />

                <div className="lg:pl-72">
                    <Navbar />
                    <main className="p-6">
                        <div className="max-w-7xl mx-auto">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </DashboardProvider>
    );
}