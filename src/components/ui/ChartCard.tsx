import type React from "react"
import { Text } from "@mantine/core"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { Card } from "./Card"

export interface ChartData {
    name: string
    value: number
}

export interface ChartCardProps {
    title: string
    data: ChartData[]
}

export const ChartCard: React.FC<ChartCardProps> = ({ title, data }) => {
    return (
        <Card className="h-64">
            <Text size="lg" fw={500} className="mb-4">
                {title}
            </Text>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </Card>
    )
}

