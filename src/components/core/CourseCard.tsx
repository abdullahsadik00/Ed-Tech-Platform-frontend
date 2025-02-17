import { Card, Text, Group, Badge } from '@mantine/core';

interface CourseCardProps {
    course: {
        id: string;
        title: string;
        description: string;
        progress: number;
    };
}

export function CourseCard({ course }: CourseCardProps) {
    return (
        <Card shadow="sm" padding="lg">
            <Text size="lg" fw={500}>{course.title}</Text>
            <Text mt="xs" c="dimmed" lineClamp={3}>{course.description}</Text>
            <Group mt="md">
                <Badge color="blue">Progress: {course.progress}%</Badge>
            </Group>
        </Card>
    );
}