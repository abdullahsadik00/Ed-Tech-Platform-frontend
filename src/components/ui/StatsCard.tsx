import type React from "react"
import { Card } from "./Card"
import { Text, Group } from "@mantine/core"

export interface StatsCardProps {
    title: string
    value: string | number
    icon: React.ReactNode
    trend?: {
        value: number
        label: string
    }
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, trend }) => {
    return (
        <Card>
            <Group justify="space-between" className="mb-2">
                <Text size="sm" color="dimmed">
                    {title}
                </Text>
                {icon}
            </Group>
            <Text size="xl" fw={700}>
                {value}
            </Text>
            {trend && (
                <Text size="sm" color={trend.value >= 0 ? "teal" : "red"} className="mt-2">
                    {trend.value >= 0 ? "+" : ""}
                    {trend.value}% {trend.label}
                </Text>
            )}
        </Card>
    )
}

