import { useRecoilState } from 'recoil';
import { userAtom } from '@/state/user';
import { api } from '@/lib/api';

export function useAuth() {
  const [user, setUser] = useRecoilState(userAtom);

  const login = async (values: { email: string; password: string }) => {
    const { data } = await api.post('/auth/login', values);
    setUser(data.user);
  };

  const logout = async () => {
    await api.post('/auth/logout');
    setUser(null);
  };

  return { user, login, logout };
  // return { user };
}
