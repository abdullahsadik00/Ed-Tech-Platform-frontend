import { useRecoilState } from 'recoil';
import { userAtom } from '@/state/user';
import { api } from '@/lib/api';

export function useAuth() {
  const [user, setUser] = useRecoilState(userAtom);

  const login = async (values: { email: string; password: string }) => {
    const { data } = await api.post('/auth/login', values);
    setUser(data.user);
  };

  const checkSession = async () => {
    try {
      const { data } = await api.get('/auth/me');
      setUser(data);
    } catch (error) {
      setUser(null);
    }
  };

  const logout = async () => {
    await api.post('/auth/logout');
    setUser(null);
  };

  return { user, login, logout, loading: false, checkSession }; // TODO
  // return { user };
}
