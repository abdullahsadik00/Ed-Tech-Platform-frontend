import { useState } from "react";
import { Button, Progress, Select, TextInput, PasswordInput, Input, Stepper, Box } from "@mantine/core";
import { useToast } from "@/hooks/use-toast";
import { Role } from "@/types/user";
import { createStyles } from "@mantine/styles";

interface SignUpProps {
    onToggle: () => void;
    role: Role;
    onRoleChange: (role: Role) => void; // Add onRoleChange prop
    setIsDisabled: (isDisabled: boolean) => void
}

interface FormData {
    [key: string]: string | number | undefined;
    email?: string;
    password?: string;
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
        required: false
    },
    {
        id: "grade",
        label: "Grade/Class",
        type: "select",
        options: Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`),
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
    admin: [],
};

// Define styles using createStyles
const useStyles = createStyles((theme) => ({
    formContainer: {
        height: "70vh", // Fixed height to fit on one screen
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing.md,
        overflowY: "scroll",
    },
    stepContent: {
        flex: 1,
        overflowY: "auto", // Enable vertical scrolling
        padding: theme.spacing.md,
    },
    stepActions: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: theme.spacing.md,
    },
}));

export const SignUp = ({ onToggle, role, onRoleChange, setIsDisabled }: SignUpProps) => {
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState<FormData>({});
    // const [isRoleDisabled, setIsRoleDisabled] = useState(false); // Track if the role button should be disabled
    const { toast } = useToast();
    const { classes } = useStyles();

    const calculatePasswordStrength = (value: string): number => {
        let score = 0;
        if (value.length > 8) score += 25;
        if (value.match(/[A-Z]/)) score += 25;
        if (value.match(/[0-9]/)) score += 25;
        if (value.match(/[^A-Za-z0-9]/)) score += 25;
        return score;
    };

    const handleInputChange = (id: string, value: string) => {
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (step < 2) {
            setStep(step + 1);
            setIsDisabled(true); // Disable the role button after clicking "Next"
            onRoleChange(role); // Notify the parent component about the role change (if needed)
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

    const fields = roleFields[role];
    const maxSteps = 2;

    const renderStepContent = () => {
        const currentFields = step === 1 ? fields.slice(0, Math.ceil(fields.length / 2)) : fields.slice(Math.ceil(fields.length / 2));

        return (
            <div className={classes.stepContent}>
                {step === 1 && (
                    <>
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
                            value={formData.email || ""}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                        />
                        <PasswordInput
                            label="Password"
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            required
                            value={formData.password || ""}
                            onChange={(e) => handleInputChange("password", e.target.value)}
                        />
                        <PasswordInput
                            label="Confirm Password"
                            id="confirm_password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            required
                            value={formData.confirm_password || ""}
                            onChange={(e) => handleInputChange("confirm_password", e.target.value)}
                        />
                        <Progress value={calculatePasswordStrength(formData.password || "")} size="sm" mt="sm" />
                    </>
                )}
                {currentFields.map((field) => (
                    <Input.Wrapper key={field.id} label={field.label} required={field.required} mt="sm">
                        {field.type === "select" ? (
                            <Select
                                data={field.options}
                                value={String(formData[field.id] || "")}
                                onChange={(value) => handleInputChange(field.id, value || "")}
                            />
                        ) : (
                            <TextInput
                                type={field.type}
                                placeholder={field.placeholder}
                                value={String(formData[field.id] || "")}
                                onChange={(e) => handleInputChange(field.id, e.target.value)}
                            />
                        )}
                    </Input.Wrapper>
                ))}
            </div>
        );
    };

    return (
        <Box className={classes.formContainer}>
            <div>
                <h1 className="text-2xl font-semibold text-slate-900 text-center mb-2">
                    Sign up for your {role} account
                </h1>
            </div>

            <Stepper active={step - 1} onStepClick={setStep} orientation="horizontal">
                <Stepper.Step label="Step 1" description="Account Information" />
                <Stepper.Step label="Step 2" description="Additional Information" />
            </Stepper>

            <form onSubmit={handleSubmit} className="space-y-2">
                {renderStepContent()}

                <div className={classes.stepActions}>
                    {step > 1 && (
                        <Button variant="default" onClick={() => setStep(step - 1)}>
                            Back
                        </Button>
                    )}
                    <Button
                        type={step < maxSteps ? "button" : "submit"}
                        onClick={() => step < maxSteps && setStep(step + 1)}
                        variant="primary"
                        loading={isLoading}
                    >
                        {step < maxSteps ? "Next" : "Submit"}
                    </Button>
                </div>
            </form>

            <p className="text-center text-sm text-slate-600">
                Already have an account?{" "}
                <button
                    onClick={onToggle}
                    className="text-primary hover:underline font-medium"
                // disabled={isRoleDisabled} // Disable the role button if the form is in progress
                >
                    Sign in
                </button>
            </p>
        </Box>
    );
};