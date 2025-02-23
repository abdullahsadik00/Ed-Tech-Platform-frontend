"use client"
import { useState } from "react";
import { Container, Flex, Grid } from "@mantine/core";
import AuthColumn from "@/components/auth/AuthColumn";

// Define types for role content
interface RoleContent {
    teacher: string;
    student: string;
    parent: string;
    admin: string;
}

// Local constants for role content

export default function AuthPage() {
    const [selectedRole, setSelectedRole] = useState<keyof RoleContent>("student");
    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <Container fluid className=" p-0 gridContainer bg-gradient-to-br from-[#fdfcfb] via-[#e2d1c3] to-[#fdfcfb]">
            {/* <div className="absolute inset-0 bg-gradient-to-br from-[#fdfcfb] via-[#e2d1c3] to-[#fdfcfb] z-0"></div> */}
            <Flex className="gridCol h-screen   " justify="center"
            >
                <Flex className="gridCol" justify="center"
                    align="center">
                    <AuthColumn
                        selectedRole={selectedRole}
                        setSelectedRole={setSelectedRole}
                        isSignIn={isSignIn}
                        setIsSignIn={setIsSignIn}
                    />
                </Flex>
            </Flex>
        </Container>
    );
}