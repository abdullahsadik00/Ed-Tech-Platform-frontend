import type React from "react";
// import { Navbar, NavLink } from "@mantine/core";

export interface SidebarItem {
    label: string;
    icon: React.ReactNode;
    href: string;
}

export interface SidebarProps {
    items: SidebarItem[];
    onItemClick: (item: SidebarItem) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ items, onItemClick }) => {
    return (
        <div  >
            {items.map((item, index) => (
                <nav
                    key={index}
                    // label={item.label}
                    // leftSection={item.icon} // Use `leftSection` for the icon
                    onClick={() => onItemClick(item)}
                    className="mb-2"
                />
            ))}
        </div>
    );
};