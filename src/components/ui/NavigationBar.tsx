import type React from "react";
import { AppShell, Container, Group, Burger, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export interface NavItem {
    label: string;
    href: string;
}

export interface NavigationBarProps {
    logo: React.ReactNode;
    navItems: NavItem[];
    ctaText: string;
    onCtaClick: () => void;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({ logo, navItems, ctaText, onCtaClick }) => {
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <AppShell.Header className="border-b border-gray-200">
            <Container className="h-full flex items-center justify-between">
                <div className="flex items-center">
                    {logo}
                    <Burger opened={opened} onClick={toggle} className="ml-4 md:hidden" />
                </div>
                <Group gap={5} className="hidden md:flex">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                        >
                            {item.label}
                        </a>
                    ))}
                </Group>
                <Button onClick={onCtaClick} className="hidden md:block">
                    {ctaText}
                </Button>
            </Container>
        </AppShell.Header>
    );
};