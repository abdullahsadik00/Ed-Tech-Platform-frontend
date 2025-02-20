import { Card, Grid } from "@mantine/core";
import RoleSelector from "./RoleSelector";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

// Define the types for role images, descriptions, and quotes
interface RoleContent {
    teacher: string;
    student: string;
    parent: string;
    admin: string;
}

interface AuthColumnProps {
    selectedRole: keyof RoleContent;
    setSelectedRole: (role: keyof RoleContent) => void;
    isSignIn: boolean;
    setIsSignIn: (isSignIn: boolean) => void;
    roleImages: RoleContent;
    roleDescriptions: RoleContent;
    roleQuotes: RoleContent;
}

export default function AuthColumn({
    selectedRole,
    setSelectedRole,
    isSignIn,
    setIsSignIn,
    roleImages,
    roleDescriptions,
    roleQuotes,
}: AuthColumnProps) {
    return (
        <Grid.Col span={{ base: 12, md: 6, lg: 5 }} className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white/40 z-0"></div>
            <div className="relative h-full p-6 lg:p-12 flex flex-col justify-center">
                <Card
                    shadow="xl"
                    padding="xl"
                    radius="md"
                    className="backdrop-blur-sm bg-white/80 border-white/20"
                >
                    {/* Role Selector */}
                    <RoleSelector selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
                    {/* Auth Forms */}
                    <div className="fade-in mt-6">
                        {isSignIn ? (
                            <SignIn
                                onToggle={() => setIsSignIn(false)}
                                role={selectedRole}
                            />
                        ) : (
                            <SignUp
                                onToggle={() => setIsSignIn(true)}
                                role={selectedRole}
                            />
                        )}
                    </div>
                </Card>
            </div>
        </Grid.Col>
    );
}
