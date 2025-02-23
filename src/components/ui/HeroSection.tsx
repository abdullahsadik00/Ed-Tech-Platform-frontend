import type React from "react"
import { Container, Title, Text } from "@mantine/core"
import { Button } from "./Button"

export interface HeroSectionProps {
    title: string
    subtitle: string
    ctaText: string
    onCtaClick: () => void
    backgroundImage?: string
}

export const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, ctaText, onCtaClick, backgroundImage }) => {
    return (
        <div className="bg-cover bg-center py-20" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Container size="lg">
                <div className="max-w-2xl">
                    <Title order={1} className="text-4xl font-bold mb-4 text-white">
                        {title}
                    </Title>
                    <Text className="text-xl mb-8 text-white">{subtitle}</Text>
                    <Button onClick={onCtaClick} size="lg">
                        {ctaText}
                    </Button>
                </div>
            </Container>
        </div>
    )
}

