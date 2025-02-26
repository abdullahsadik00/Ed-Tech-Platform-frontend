'use client';
import React from 'react';
import { 
  AppShell,
  NavLink,
  Text,
  useMantineTheme,
  Stack
} from '@mantine/core';
import { 
  Home, 
  Users, 
  BookOpen, 
  Calendar, 
  Settings,
  GraduationCap,
  UserCheck,
  FileText
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Users', href: '/dashboard/users' },
  { icon: BookOpen, label: 'Courses', href: '/dashboard/courses' },
  { icon: Calendar, label: 'Schedule', href: '/dashboard/schedule' },
  { icon: FileText, label: 'Assignments', href: '/dashboard/assignments' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

export default function Sidebar() {
  const theme = useMantineTheme();
  const pathname = usePathname();

  return (
    <AppShell.Navbar p="xs" style={{ width: 250 }}>
      <AppShell.Section mt="xs">
        <Text 
          ta="center" 
          size="xl" 
          fw={700} 
          color={theme.primaryColor}
        >
          EdTech Platform
        </Text>
      </AppShell.Section>

      <AppShell.Section grow mt="md">
        <Stack gap="xs">
          {menuItems.map((item) => (
            <NavLink
              key={item.href}
              component={Link}
              href={item.href}
              label={item.label}
              leftSection={<item.icon size={20} />}
              active={pathname === item.href}
              variant="filled"
            />
          ))}
        </Stack>
      </AppShell.Section>
    </AppShell.Navbar>
  );
}