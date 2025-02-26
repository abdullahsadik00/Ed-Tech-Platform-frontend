'use client';
import React from 'react';
import { SimpleGrid, Paper, useMantineTheme } from '@mantine/core';

interface BentoGridProps {
  items: {
    id: string;
    content: React.ReactNode;
    className: string;
  }[];
}

export default function BentoGrid({ items }: BentoGridProps) {
  const theme = useMantineTheme();

  return (
    <SimpleGrid
      spacing="lg"
      cols={{ base: 1, sm: 1, md: 2 }}
    >
      {items.map((item) => (
        <Paper
          key={item.id}
          p="md"
          radius="md"
          className={item.className}
          shadow="sm"
          withBorder
        >
          {item.content}
        </Paper>
      ))}
    </SimpleGrid>
  );
}
