export interface AuthFormProps {
  onToggle: () => void;
}

export interface UserAuth {
  email: string;
  password: string;
  name?: string;
  role?: 'student' | 'teacher' | 'parent' | 'admin';
}
