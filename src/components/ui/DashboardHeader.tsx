import type React from "react"
import { Container, Group, Avatar, Text, Menu } from "@mantine/core"
import { ChevronDown } from "lucide-react"

export interface DashboardHeaderProps {
    userName: string
    userAvatar: string
    onLogout: () => void
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ userName, userAvatar, onLogout }) => {
    return (
        <div className="border-b border-gray-200">
            <Container className="h-full flex items-center justify-between">
                <Text size="xl" fw={700}>
                    Dashboard
                </Text>
                <Group>
                    <Menu>
                        <Menu.Target>
                            <Group className="cursor-pointer">
                                <Avatar src={userAvatar} radius="xl" />
                                <Text>{userName}</Text>
                                <ChevronDown size={14} />
                            </Group>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item onClick={onLogout}>Logout</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>
            </Container>
        </div>
    )
}

