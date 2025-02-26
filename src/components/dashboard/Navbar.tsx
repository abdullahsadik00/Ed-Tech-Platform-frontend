// components/dashboard/Navbar.tsx
'use client';
import React from 'react';
import { 
  AppShell, 
  TextInput, 
  ActionIcon, 
  Group, 
  useMantineTheme,
  Container
} from '@mantine/core';
import { Bell, Search, User } from 'lucide-react';

export default function Navbar() {
  const theme = useMantineTheme();

  return (
    <AppShell.Header style={{ width: 60 }}    p="xs">
      <Container fluid>
        <Group justify="space-between">
          <TextInput
            placeholder="Search"
            leftSection={<Search size={16} />}
            style={{ width: '300px' }}
          />
          <Group>
            <ActionIcon variant="subtle" color="gray">
              <Bell size={20} />
            </ActionIcon>
            <ActionIcon variant="subtle" color="gray">
              <User size={20} />
            </ActionIcon>
          </Group>
        </Group>
      </Container>
    </AppShell.Header>
  );
}