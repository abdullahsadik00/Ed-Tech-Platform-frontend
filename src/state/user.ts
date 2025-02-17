import { atom } from 'recoil';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'parent' | 'admin';
}

export const userAtom = atom<User | null>({
  key: 'userState',
  default: null,
});
