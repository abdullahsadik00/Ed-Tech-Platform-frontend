import type React from "react"
import { Container, SimpleGrid, Title, Text } from "@mantine/core"
import { Card } from "./Card"

export interface Feature {
    title: string
    description: string
    icon: React.ReactNode
}

export interface FeatureListProps {
    features: Feature[]
}

export const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
    return (
        <Container size="lg" className="py-16">
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} // Responsive columns
                spacing="lg" >
                {features.map((feature, index) => (
                    <Card key={index} className="text-center">
                        <div className="flex justify-center mb-4">{feature.icon}</div>
                        <Title order={3} className="mb-2">
                            {feature.title}
                        </Title>
                        <Text>{feature.description}</Text>
                    </Card>
                ))}
            </SimpleGrid>
        </Container>
    )
}

