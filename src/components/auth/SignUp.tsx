import { useState } from "react";
import { Button, Progress, Select, TextInput, PasswordInput, Checkbox } from "@mantine/core";
// import { FaGoogle } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Role } from "@/types/user";

interface SignUpProps {
    onToggle: () => void;
    role: Role;
}

const teacherFields = [
    {
        id: "title",
        label: "Title",
        type: "select",
        options: ["Mr.", "Ms.", "Dr."],
        required: true
    },
    {
        id: "fullName",
        label: "Full Name",
        type: "text",
        placeholder: "Dr. Jane Smith",
        required: true
    },
    {
        id: "professionalEmail",
        label: "Professional Email",
        type: "email",
        placeholder: "j.smith@institution.edu",
        required: true,
        pattern: ".+@.+\\.edu"
    },
    {
        id: "employeeId",
        label: "Employee ID",
        type: "text",
        required: true
    },
    {
        id: "subject",
        label: "Subject Specialization",
        type: "select",
        options: [
            "Mathematics",
            "Science",
            "English",
            "History",
            "Computer Science",
            "Physics",
            "Chemistry",
            "Biology",
            "Languages",
            "Arts",
            "Physical Education",
            "Other"
        ],
        required: true
    },
    {
        id: "department",
        label: "Department",
        type: "text",
        required: true
    },
    {
        id: "experience",
        label: "Years of Teaching Experience",
        type: "number",
        min: 0,
        required: true
    },
    {
        id: "qualifications",
        label: "Highest Qualification",
        type: "select",
        options: [
            "Bachelor's Degree",
            "Master's Degree",
            "Ph.D.",
            "Other"
        ],
        required: true
    }
];

const studentFields = [
    {
        id: "fullName",
        label: "Full Name",
        type: "text",
        required: true
    },
    {
        id: "email",
        label: "School Email",
        type: "email",
        placeholder: "student@school.edu",
        required: true
    },
    {
        id: "grade",
        label: "Grade/Class",
        type: "select",
        options: Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`),
        required: true
    },
    {
        id: "studentId",
        label: "Student ID",
        type: "text",
        required: true
    },
    {
        id: "dateOfBirth",
        label: "Date of Birth",
        type: "date",
        required: true
    },
    {
        id: "parentEmail",
        label: "Parent/Guardian Email",
        type: "email",
        required: true
    },
    {
        id: "previousSchool",
        label: "Previous School (Optional)",
        type: "text",
        required: false
    }
];

const parentFields = [
    {
        id: "fullName",
        label: "Full Name",
        type: "text",
        required: true
    },
    {
        id: "emailOrPhone",
        label: "Email or Phone Number",
        type: "text",
        required: true
    },
    {
        id: "childrenIds",
        label: "Children's Student IDs",
        type: "text",
        placeholder: "Separate multiple IDs with commas",
        required: true
    },
    {
        id: "relationship",
        label: "Relationship to Student",
        type: "select",
        options: ["Mother", "Father", "Legal Guardian", "Other"],
        required: true
    },
    {
        id: "emergencyContact",
        label: "Emergency Contact Number",
        type: "tel",
        required: true
    }
];

const roleFields = {
    teacher: teacherFields,
    student: studentFields,
    parent: parentFields,
    admin: []
};

export const SignUp = ({ onToggle, role }: SignUpProps) => {
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [password, setPassword] = useState("");
    const { toast } = useToast();

    const calculatePasswordStrength = (value: string): number => {
        let score = 0;
        if (value.length > 8) score += 25;
        if (value.match(/[A-Z]/)) score += 25;
        if (value.match(/[0-9]/)) score += 25;
        if (value.match(/[^A-Za-z0-9]/)) score += 25;
        return score;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (step < 3) {
            setStep(step + 1);
            return;
        }

        setIsLoading(true);
        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));
            toast({
                title: "Success!",
                description: "Your account has been created. Please verify your email to continue.",
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

    const strength = calculatePasswordStrength(password);
    const getStrengthColor = () => {
        if (strength < 25) return "bg-red-500";
        if (strength < 50) return "bg-orange-500";
        if (strength < 75) return "bg-yellow-500";
        return "bg-green-500";
    };

    const maxSteps = 3;

    return (
        <div className="space-y-6 fade-in">
            <div>
                <h1 className="auth-title">
                    Create your {role} account
                </h1>
                <p className="auth-subtitle">Join our learning platform</p>
            </div>

            {step === 1 && (
                <>
                    <button className="social-button scale-in">
                        {/* <FaGoogle className="w-5 h-5" /> */}
                        <span>Continue with Google</span>
                    </button>

                    <div className="divider">
                        <span>or continue with email</span>
                    </div>
                </>
            )}

            <Progress
                value={(step / maxSteps) * 100}
                className="h-1"
            />

            <form onSubmit={handleSubmit} className="space-y-4">
                {step === 1 && (
                    <div className="space-y-4 slide-in">
                        {roleFields[role].slice(0, 2).map((field) => (
                            <div key={field.id} className="space-y-2">
                                <label htmlFor={field.id} className="text-sm">{field.label}</label>
                                {field.type === "select" ? (
                                    <Select
                                        id={field.id}
                                        // data={field.options.map(option => ({ value: option, label: option }))}
                                        placeholder={`Select ${field.label}`}
                                        required={field.required}
                                        className="w-full"
                                    />
                                ) : (
                                    <TextInput
                                        id={field.id}
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        required={field.required}
                                        // pattern={field.pattern}
                                        // min={field.min}
                                        className="w-full"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-4 slide-in">
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <PasswordInput
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                                className="w-full"
                            />
                            <Progress
                                value={strength}
                                className={cn("h-1", getStrengthColor())}
                            />
                            <p className="text-sm text-slate-500">
                                Password strength:{" "}
                                {strength < 25
                                    ? "Weak"
                                    : strength < 50
                                        ? "Fair"
                                        : strength < 75
                                            ? "Good"
                                            : "Strong"}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="confirm" className="text-sm">Confirm Password</label>
                            <PasswordInput
                                id="confirm"
                                placeholder="••••••••"
                                required
                                className="w-full"
                            />
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="space-y-4 slide-in">
                        {roleFields[role].slice(2).map((field) => (
                            <div key={field.id} className="space-y-2">
                                <label htmlFor={field.id} className="text-sm">{field.label}</label>
                                {field.type === "select" ? (
                                    <Select
                                        id={field.id}
                                        // data={field.options.map(option => ({ value: option, label: option }))}
                                        placeholder={`Select ${field.label}`}
                                        required={field.required}
                                        className="w-full"
                                    />
                                ) : (
                                    <TextInput
                                        id={field.id}
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        required={field.required}
                                        // pattern={field.pattern}
                                        // min={field.min}
                                        className="w-full"
                                    />
                                )}
                            </div>
                        ))}

                        <div className="flex items-start space-x-2">
                            <Checkbox
                                id="terms"
                                required
                                label={
                                    <span>
                                        I agree to the{" "}
                                        <button
                                            type="button"
                                            className="text-primary hover:underline"
                                            onClick={() => toast({ title: "Terms coming soon!" })}
                                        >
                                            Terms of Service
                                        </button>{" "}
                                        and{" "}
                                        <button
                                            type="button"
                                            className="text-primary hover:underline"
                                            onClick={() => toast({ title: "Privacy policy coming soon!" })}
                                        >
                                            Privacy Policy
                                        </button>
                                    </span>
                                }
                            />
                        </div>
                    </div>
                )}

                <div className="flex gap-4">
                    {step > 1 && (
                        <Button
                            type="button"
                            variant="outline"
                            className="flex-1"
                            onClick={() => setStep(step - 1)}
                        >
                            Back
                        </Button>
                    )}
                    <Button
                        type="submit"
                        className={cn(
                            "flex-1",
                            isLoading && "animate-pulse cursor-not-allowed"
                        )}
                        disabled={isLoading}
                    >
                        {step === maxSteps
                            ? isLoading
                                ? "Creating account..."
                                : "Create account"
                            : "Continue"}
                    </Button>
                </div>
            </form>

            <p className="text-center text-sm text-slate-600">
                Already have an account?{" "}
                <button
                    onClick={onToggle}
                    className="text-primary hover:underline font-medium"
                >
                    Sign in
                </button>
            </p>
        </div>
    );
};
