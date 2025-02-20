"use client"
import { useState } from "react";
import { Container, Grid } from "@mantine/core";
import AuthColumn from "@/components/auth/AuthColumn";
import HeroColumn from "@/components/auth/HeroColumn";

// Define types for role images, descriptions, and quotes
interface RoleContent {
    teacher: string;
    student: string;
    parent: string;
    admin: string;
}

const roleImages: RoleContent = {
    teacher: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    student: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    parent: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    admin: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
};

const roleDescriptions: RoleContent = {
    teacher: "Empower the next generation through education",
    student: "Begin your learning journey with us",
    parent: "Stay connected with your child's education journey",
    admin: "Manage and oversee the educational experience",
};

const roleQuotes: RoleContent = {
    teacher: "Shape minds, inspire futures",
    student: "Learn, grow, achieve",
    parent: "Support their dreams",
    admin: "Lead with vision",
};

// interface AuthPageProps {
//     roleImages: RoleContent;
//     roleDescriptions: RoleContent;
//     roleQuotes: RoleContent;
// }

export default function AuthPage() {
    const [selectedRole, setSelectedRole] = useState<keyof RoleContent>("student");
    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <Container fluid className="min-h-screen">
            <Grid gutter={0} style={{ height: "100%" }}>
                <AuthColumn
                    selectedRole={selectedRole}
                    setSelectedRole={setSelectedRole}
                    isSignIn={isSignIn}
                    setIsSignIn={setIsSignIn}
                    roleImages={roleImages}
                    roleDescriptions={roleDescriptions}
                    roleQuotes={roleQuotes}
                />
                <HeroColumn
                    selectedRole={selectedRole}
                    roleImages={roleImages}
                    roleDescriptions={roleDescriptions}
                    roleQuotes={roleQuotes}
                />
            </Grid>
        </Container>
    );
}