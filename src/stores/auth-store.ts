// src/stores/auth-store.ts
import { create } from 'zustand';

type User = {
  id: string;
  role: 'student' | 'teacher' | 'parent';
  email: string;
  name: string;
};

type AuthStore = {
  user: User | null;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  login: async (credentials) => {
    // API call
    // set({ user: { id: '1', role: 'student', ...credentials } });
  },
  logout: () => set({ user: null }),
}));
