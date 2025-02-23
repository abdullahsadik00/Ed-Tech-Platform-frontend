import { useState } from "react";
// import { Button } from "@mantine/core";
import { TextInput, PasswordInput } from "@mantine/core";
// import { FaGoogle } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Role } from "@/types/user";
import { Button } from "../ui";
// import type { UserRole } from "@/pages/Index";

interface SignInProps {
    onToggle: () => void;
    role: Role;
}

export const SignIn = ({ onToggle, role }: SignInProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));
            toast({
                title: "Success!",
                description: "You have successfully signed in.",
            });
        } catch (error) {
            toast({
                title: "Error",
                description: "Something went wrong. Please try again.",
                variant: "warning",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-2 fade-in">
            <div>
                <h1 className="text-2xl font-semibold font-sans text-slate-900 text-center mb-2">Welcome back</h1>
                <p className="text-2xl font-semibold text-slate-900 text-center mb-2">
                    Sign in to your {role} account
                </p>
            </div>

            <button className="social-button scale-in">
                {/* <FaGoogle className="w-5 h-5" /> */}
                <span>Continue with Google</span>
            </button>
            {/* <Button variant="secondary"> Google</Button> */}

            <div className="divider">
                <span>or continue with email</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2">
                <div className="space-y-2">
                    <TextInput
                        label="Email"
                        id="email"
                        type="email"
                        placeholder={
                            role === "teacher"
                                ? "teacher@school.edu"
                                : role === "student"
                                    ? "student@school.edu"
                                    : "parent@example.com"
                        }
                        required
                        className="w-full"
                    />
                </div>

                <div className="space-y-2">
                    <PasswordInput
                        label="Password"
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        required
                        className="w-full"
                    // rightSection={
                    //     <button
                    //         type="button"
                    //         className="text-gray-500 hover:text-gray-700"
                    //         onClick={() => setShowPassword(!showPassword)}
                    //     >
                    //         {showPassword ? "Hide" : "Show"}
                    //     </button>
                    // }
                    />
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="remember"
                            className="rounded border-gray-300"
                        />
                        <label htmlFor="remember" className="text-sm cursor-pointer">
                            Remember me
                        </label>
                    </div>
                    <button
                        type="button"
                        className="text-sm text-primary hover:underline"
                        onClick={() => toast({ title: "Coming soon!" })}
                    >
                        Forgot password?
                    </button>
                </div>

                <Button
                    variant="primary"
                    className={cn(
                        "w-full",
                        isLoading && "animate-pulse cursor-not-allowed"
                    )}
                    disabled={isLoading}
                >
                    {isLoading ? "Signing in..." : "Sign in"}
                </Button>
            </form>

            <p className="text-center text-sm text-slate-600">
                Don't have an account?{" "}
                <button
                    onClick={onToggle}
                    className="text-primary hover:underline font-medium"
                >
                    Sign up
                </button>
            </p>
        </div>
    );
};
