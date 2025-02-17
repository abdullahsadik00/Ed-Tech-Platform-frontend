"use client";
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import type { Metadata } from 'next';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';
import '../styles/mantine.css';
import { ThemeProvider } from '@/providers/ThemeProvider';

// export const metadata: Metadata = {
//   title: 'EdTech Platform',
//   description: 'Next-gen Education Platform',
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <RecoilRoot>
          <ThemeProvider>
            <Notifications position="top-right" />
            {children}
          </ThemeProvider>
        </RecoilRoot>

      </body>
    </html>
  );
}