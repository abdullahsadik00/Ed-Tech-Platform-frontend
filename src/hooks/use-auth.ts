import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserRole = 'student' | 'teacher' | 'parent' | 'admin';

type User = {
  id: string;
  role: UserRole;
  email: string;
  name: string;
};

type SignUpInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: 'STUDENT' | 'INSTRUCTOR';
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  signUp: (input: SignUpInput) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
};

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const roleMap: Record<string, UserRole> = {
  STUDENT: 'student',
  INSTRUCTOR: 'teacher',
  ADMIN: 'admin',
  MODERATOR: 'teacher',
  SUPPORT: 'teacher',
};

function toUser(user: {
  id: number | string;
  role: string;
  email: string;
  firstName: string;
  lastName: string;
}): User {
  return {
    id: String(user.id),
    role: roleMap[user.role] ?? 'student',
    email: user.email,
    name: `${user.firstName} ${user.lastName}`,
  };
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      token: null,
      login: async (email: string, password: string) => {
        try {
          const res = await fetch(`${API_URL}/api/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
          });
          const data = await res.json();
          if (!res.ok) throw new Error(data.message || 'Login failed');

          const { user, token } = data.data;
          set({
            user: toUser(user),
            isAuthenticated: true,
            token,
          });
          return true;
        } catch (error) {
          console.error('Login failed:', error);
          return false;
        }
      },
      signUp: async (input: SignUpInput) => {
        try {
          const res = await fetch(`${API_URL}/api/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(input),
          });
          const data = await res.json();
          if (!res.ok) throw new Error(data.message || 'Sign up failed');

          const { user, token } = data.data;
          set({
            user: toUser(user),
            isAuthenticated: true,
            token,
          });
          return { ok: true };
        } catch (error) {
          const message =
            error instanceof Error ? error.message : 'Sign up failed';
          return { ok: false, error: message };
        }
      },
      logout: () => set({ user: null, isAuthenticated: false, token: null }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        token: state.token,
      }),
    }
  )
);
