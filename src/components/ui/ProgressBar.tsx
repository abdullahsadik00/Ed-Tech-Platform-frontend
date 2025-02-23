import type React from "react"
import { Progress, Text } from "@mantine/core"

export interface ProgressBarProps {
    value: number
    label: string
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value, label }) => {
    return (
        <div>
            <Text size="sm" className="mb-1">
                {label}
            </Text>
            <Progress value={value} label={`${value}%`} size="md" radius="xl" />
        </div>
    )
}

