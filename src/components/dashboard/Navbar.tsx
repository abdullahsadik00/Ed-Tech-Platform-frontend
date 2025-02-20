// components/dashboard/Navbar.tsx
'use client';
import { cn } from '@/lib/utils';
import { useDashboard } from './context';

export function Navbar() {
    const { state, actions } = useDashboard();

    return (
        <header className={cn(
            "sticky top-0 z-40 flex h-16 items-center justify-between px-6",
            "bg-background border-b",
            "supports-backdrop-blur:bg-background/60 backdrop-blur"
        )}>
            <div className="flex items-center gap-4">
                <button
                    onClick={actions.toggleSidebar}
                    className="hover:bg-accent p-2 rounded-lg"
                >
                    {/* Add your MenuIcon component here */}
                    <span className="text-2xl">☰</span>
                </button>
                <h1 className="text-xl font-semibold">
                    {state.role.charAt(0).toUpperCase() + state.role.slice(1)} Dashboard
                </h1>
            </div>

            <div className="flex items-center gap-4">
                {/* Add your other components here */}
            </div>
        </header>
    );
}