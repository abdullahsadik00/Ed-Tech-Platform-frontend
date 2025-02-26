'use client';
import React from 'react';
import { 
  Title, 
  Group, 
  Text, 
  Stack,
  useMantineTheme 
} from '@mantine/core';
import BentoGrid from '@/components/dashboard/BentoGrid';
import { Users, Settings, Database } from 'lucide-react';

export default function AdminDashboard() {
  const theme = useMantineTheme();

  const adminStats = [
    {
      id: 'total-users',
      content: (
        <Group>
          <Users size={32} color={theme.colors.blue[6]} />
          <Stack gap="sm">
            <Text size="sm" color="dimmed">Total Users</Text>
            <Text size="xl" fw={700}>1,234</Text>
          </Stack>
        </Group>
      ),
      className: 'col-span-1',
    },
    // Add admin-specific stats
  ];

  return (
    <Stack gap="lg">
      <Title order={2}>Admin Dashboard</Title>
      <BentoGrid items={adminStats} />
    </Stack>
  );
}
