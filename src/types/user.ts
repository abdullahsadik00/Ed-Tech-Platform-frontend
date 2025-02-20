// types/user.ts
export type Role = 'admin' | 'teacher' | 'student' | 'parent';

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
};
