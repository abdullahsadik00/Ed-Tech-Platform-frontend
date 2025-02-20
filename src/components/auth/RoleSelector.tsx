import { Role } from "@/types/user";
import { Button } from "@mantine/core";

interface RoleSelectorProps {
    selectedRole: string;
    setSelectedRole: (role: Role) => void;
}

export default function RoleSelector({ selectedRole, setSelectedRole }: RoleSelectorProps) {
    return (
        <div className="flex gap-2 p-1 bg-slate-100/80 rounded-lg backdrop-blur-sm shadow-inner">
            {(['student', 'teacher', 'parent'] as const).map((role) => (
                <Button
                    key={role}
                    onClick={() => setSelectedRole(role)}
                    variant={selectedRole ? 'filled' : 'light'}
                    color={selectedRole === role ? 'blue' : 'gray'}
                    className="flex-1 text-sm font-medium"
                >
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                </Button>
            ))}
        </div>
    );
}