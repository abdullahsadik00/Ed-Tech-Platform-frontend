// components/dashboard/context.tsx
'use client';
import { createContext, useContext, useState } from 'react';
import type { Role } from '@/types/user';

type State = {
    role: Role;
    // add other state properties here
};

type Actions = {
    toggleSidebar: () => void;
    // add other actions here
};

const DashboardContext = createContext<{
    state: State;
    actions: Actions;
}>({} as any);

export function useDashboard() {
    return useContext(DashboardContext);
}

export function DashboardProvider({
    children,
    role,
}: {
    children: React.ReactNode;
    role: Role;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const state: State = {
        role,
    };

    const actions: Actions = {
        toggleSidebar: () => setIsSidebarOpen(!isSidebarOpen),
    };

    return (
        <DashboardContext.Provider value={{ state, actions }}>
            {children}
        </DashboardContext.Provider>
    );
}