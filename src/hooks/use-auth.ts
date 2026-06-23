import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserRole = 'student' | 'teacher' | 'parent' | 'admin';

type User = {
  id: string;
  role: UserRole;
  email: string;
  name: string;
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
  login: (email: string, password: string) => Promise<boolean>;
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
            user: {
              id: String(user.id),
              role: roleMap[user.role] ?? 'student',
              email: user.email,
              name: `${user.firstName} ${user.lastName}`,
            },
            isAuthenticated: true,
            token,
          });
          return true;
        } catch (error) {
          console.error('Login failed:', error);
          return false;
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
