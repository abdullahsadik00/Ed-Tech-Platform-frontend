import type React from "react";
import { Button as MantineButton, type ButtonProps as MantineButtonProps } from "@mantine/core";
import { cn } from "@/lib/utils"; // Ensure you have a `cn` utility for merging class names

export interface ButtonProps extends MantineButtonProps {
    variant?: "primary" | "secondary" | "outline";
    onClick?: () => void; // Explicitly define the onClick prop
}

export const Button: React.FC<ButtonProps> = ({ variant = "primary", className, onClick, ...props }) => {
    const getVariantClasses = () => {
        switch (variant) {
            case "primary":
                return "bg-blue-600 hover:bg-blue-700 text-white";
            case "secondary":
                return "bg-gray-200 hover:bg-gray-300 text-gray-800";
            case "outline":
                return "border border-blue-600 text-blue-600 hover:bg-blue-50";
            default:
                return "";
        }
    };

    return (
        <MantineButton
            className={cn(
                "px-4 py-2 rounded-md transition-colors duration-200", // Base styles
                getVariantClasses(), // Variant-specific styles
                className // Additional custom classes
            )}
            onClick={onClick} // Pass the onClick prop to MantineButton
            {...props}
        />
    );
};