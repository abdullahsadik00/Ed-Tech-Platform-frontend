"use client";
import React from 'react';
import { 
  Title, 
  Group, 
  Text, 
  Stack,
  useMantineTheme,
  Paper
} from '@mantine/core';
import BentoGrid from '@/components/dashboard/BentoGrid';
import { Activity, Users, BookOpen, Calendar, TrendingUp, FileText } from 'lucide-react';

export default function DashboardPage() {
  const theme = useMantineTheme();

  const statsItems = [
    {
      id: 'total-users',
      content: (
        <Group>
          <Users size={32} />
          <Stack gap="sm">
            <Text size="sm" color="dimmed">Total Users</Text>
            <Text size="xl" fw={700}>1,234</Text>
          </Stack>
        </Group>
      ),
      className: 'col-span-1',
    },
    {
      id: 'active-courses',
      content: (
        <Group>
          <BookOpen size={32} />
          <Stack gap="sm">
            <Text size="sm" color="dimmed">Active Courses</Text>
            <Text size="xl" fw={700}>42</Text>
          </Stack>
        </Group>
      ),
      className: 'col-span-1',
    },
    {
      id: 'upcoming-events',
      content: (
        <Group>
          <Calendar size={32}  />
          <Stack gap="sm">
            <Text size="sm" color="dimmed">Upcoming Events</Text>
            <Text size="xl" fw={700}>8</Text>
          </Stack>
        </Group>
      ),
      className: 'col-span-1',
    },
    {
      id: 'performance',
      content: (
        <Group>
          <TrendingUp size={32}  />
          <Stack gap="sm">
            <Text size="sm" color="dimmed">Performance</Text>
            <Text size="xl" fw={700}>89%</Text>
          </Stack>
        </Group>
      ),
      className: 'col-span-1 row-span-2',
    },
    {
      id: 'assignments',
      content: (
        <Group>
          <FileText size={32}  />
          <Stack gap="sm">
            <Text size="sm" color="dimmed">Assignments</Text>
            <Text size="xl" fw={700}>12</Text>
          </Stack>
        </Group>
      ),
      className: 'col-span-2',
    },
  ];

  return (
    <Stack gap="lg">
      <Title order={2}>Dashboard</Title>
      <BentoGrid items={statsItems} />
    </Stack>
  );
}