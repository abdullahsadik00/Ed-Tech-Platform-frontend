// src/providers/ThemeProvider.tsx
'use client';

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <MantineProvider
            defaultColorScheme="light"
            theme={{
                primaryColor: 'blue',
                fontFamily: 'Inter, sans-serif',
            }}
        >
            <Notifications position="top-right" />
            {children}
        </MantineProvider>
    );
}