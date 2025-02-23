import { Role } from "@/types/user";
import { Button } from "@mantine/core";

interface RoleSelectorProps {
    selectedRole: string;
    setSelectedRole: (role: Role) => void;
    isDisabled: boolean;
}

export default function RoleSelector({ selectedRole, setSelectedRole, isDisabled }: RoleSelectorProps) {
    return (
        <div className="flex gap-2 p-1 ">
            {(['student', 'teacher', 'parent'] as const).map((role) => (
                <Button
                    key={role}
                    onClick={() => setSelectedRole(role)}
                    variant={selectedRole ? 'filled' : 'light'}
                    color={selectedRole === role ? '#C7D2FE' : '#CBD5E1'}
                    className="flex-1 text-sm font-medium"
                    disabled={isDisabled}
                >
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                </Button>
            ))}
        </div>
    );
}