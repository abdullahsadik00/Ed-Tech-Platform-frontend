import type React from "react"
import { Card } from "./Card"
import { Text, Image, Badge, Group } from "@mantine/core"
import { Button } from "./Button"

export interface CourseCardProps {
    title: string
    description: string
    image: string
    category: string
    duration: string
    onEnroll: () => void
}

export const CourseCard: React.FC<CourseCardProps> = ({ title, description, image, category, duration, onEnroll }) => {
    return (
        <Card className="overflow-hidden">
            <Image src={image || "/placeholder.svg"} height={160} alt={title} />
            <div className="p-4">
                <Text size="lg" fw={500} className="mb-2">
                    {title}
                </Text>
                <Text size="sm" color="dimmed" className="mb-4">
                    {description}
                </Text>
                <Group position="apart" className="mb-4">
                    <Badge color="blue">{category}</Badge>
                    <Text size="sm">{duration}</Text>
                </Group>
                <Button onClick={onEnroll} fullWidth>
                    Enroll Now
                </Button>
            </div>
        </Card>
    )
}

