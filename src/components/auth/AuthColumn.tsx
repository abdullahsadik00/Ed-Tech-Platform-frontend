import { Card } from "@mantine/core";
import RoleSelector from "./RoleSelector";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { useState } from "react";

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
}

export default function AuthColumn({
    selectedRole,
    setSelectedRole,
    isSignIn,
    setIsSignIn
}: AuthColumnProps) {
    const [isDisabled, setIsDisabled] = useState(false)
    return (
        <div className="relative w-full authColumn">
            <div className="relative p-6 lg:p-2 flex flex-col justify-center h-4/5">
                <Card
                    shadow="xl"
                    padding="xl"
                    radius="md"
                    className="backdrop-blur-sm bg-white/80 border-white/20"
                >
                    {/* Role Selector */}
                    <RoleSelector selectedRole={selectedRole} setSelectedRole={setSelectedRole} isDisabled={isDisabled} />
                    {/* Auth Forms */}
                    <div className="fade-in">
                        {isSignIn ? (
                            <SignIn
                                onToggle={() => setIsSignIn(false)}
                                role={selectedRole}
                            />
                        ) : (
                            <SignUp
                                onToggle={() => setIsSignIn(true)}
                                role={selectedRole}
                                onRoleChange={setSelectedRole} // Pass the onRoleChange prop
                                setIsDisabled={setIsDisabled}
                            />
                        )}
                    </div>
                </Card>
            </div>
        </div>
    );
}