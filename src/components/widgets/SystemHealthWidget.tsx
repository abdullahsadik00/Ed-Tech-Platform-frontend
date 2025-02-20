// components/widgets/SystemHealthWidget.tsx
'use client';
import { useMemo } from 'react';
import { Progress, Card, Text, Group, Badge, SimpleGrid } from '@mantine/core';

export function SystemHealthWidget() {
    const healthData = useMemo(() => [
        { name: 'Healthy', value: 85, color: 'green' },
        { name: 'Degraded', value: 10, color: 'yellow' },
        { name: 'Down', value: 5, color: 'red' },
    ], []);

    return (
        <Card shadow="sm" padding="lg" radius="md" className="h-full flex flex-col">
            <Text size="lg" mb="md">
                System Health
            </Text>

            <SimpleGrid cols={1} spacing="md" className="flex-1">
                {healthData.map((entry) => (
                    <div key={entry.name}>
                        <Text size="sm" mb="xs">
                            {entry.name}
                        </Text>
                        <Progress value={entry.value} color={entry.color} />
                    </div>
                ))}
            </SimpleGrid>

            <Group >
                {healthData.map((entry) => (
                    <div key={entry.name} className="flex items-center gap-2">
                        <Badge color={entry.color} variant="dot" size="sm" />
                        <Text size="sm">{entry.name}</Text>
                    </div>
                ))}
            </Group>
        </Card>
    );
}
