import type React from "react"
import { Paper, type PaperProps } from "@mantine/core"

export interface CardProps extends PaperProps {
    children: React.ReactNode,
    hoverable?: boolean
}

export const Card: React.FC<CardProps> = ({ children, hoverable = false, className, ...props }) => {
    return (
        <Paper
            className={`p-4 rounded-lg shadow-md ${hoverable ? "transition-shadow duration-200 hover:shadow-lg" : ""
                } ${className}`}
            {...props}
        >
            {children}
        </Paper>
    )
}

