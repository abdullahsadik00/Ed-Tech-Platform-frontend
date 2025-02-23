import type React from "react"
import { Card } from "./Card"
import { Avatar, Text } from "@mantine/core"

export interface TestimonialProps {
    quote: string
    author: string
    role: string
    avatarSrc: string
}

export const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, avatarSrc }) => {
    return (
        <Card className="text-center p-6">
            <Text className="text-lg italic mb-4">"{quote}"</Text>
            <Avatar src={avatarSrc} size="lg" className="mx-auto mb-2" />
            <Text className="font-bold">{author}</Text>
            <Text size="sm" color="dimmed">
                {role}
            </Text>
        </Card>
    )
}

