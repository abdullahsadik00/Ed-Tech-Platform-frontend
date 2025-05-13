// src/hooks/use-auth.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserRole = 'student' | 'teacher' | 'parent';

type User = {
  id: string;
  role: UserRole;
  email: string;
  name: string;
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      // login: async (email, password) => {
      login: async () => {
        try {
          // Replace with actual API call
          // const mockUser = {
          //   id: '123',
          //   role: 'teacher', // Would come from API response
          //   email: email,
          //   name: 'John Doe',
          //   password: password,
          // };

          // set({
          //   user: mockUser,
          //   isAuthenticated: true,
          // });
          return true;
        } catch (error) {
          console.error('Login failed:', error);
          return false;
        }
      },
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: 'auth-storage', // LocalStorage key
      partialize: (state) => ({ user: state.user }), // Only persist user data
    }
  )
);
