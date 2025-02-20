'use client';
import { ReactNode, useState } from 'react';
import { Navbar } from '@/components/core/Navbar';
import { useAuth } from '@/hooks/use-auth';
import { Sidebar } from './Sidebar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { user } = useAuth();

    if (!user) {
        return <div>Redirecting...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar
                role={user.role}
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            <div className="lg:pl-72">
                {/* <Navbar
                    role={user.role}
                    onMenuClick={() => setIsSidebarOpen(true)}
                /> */}

                <main className="p-6">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}