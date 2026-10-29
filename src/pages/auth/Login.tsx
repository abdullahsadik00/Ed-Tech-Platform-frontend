import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';

// Public demo accounts, created by the backend seed (prisma/seed.ts).
const DEMO_ACCOUNTS = [
  { label: 'Demo student', email: 'demo.student@example.com', home: '/student' },
  { label: 'Demo instructor', email: 'demo.instructor@example.com', home: '/teacher' },
] as const;
const DEMO_PASSWORD = 'Demo@1234';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string })?.from;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const success = await login(email, password);
    setLoading(false);
    if (success) {
      const role = useAuth.getState().user?.role;
      navigate(from || (role === 'teacher' ? '/teacher' : '/student'), { replace: true });
    } else {
      setError('Invalid email or password');
    }
  };

  const handleDemoLogin = async (account: (typeof DEMO_ACCOUNTS)[number]) => {
    setError('');
    setLoading(true);
    const success = await login(account.email, DEMO_PASSWORD);
    setLoading(false);
    if (success) {
      navigate(from || account.home, { replace: true });
    } else {
      setError('The demo is unavailable right now. Please try again shortly.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm bg-white rounded-xl shadow p-8 space-y-6">
        <h1 className="text-2xl font-bold text-center">Sign In</h1>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white rounded-md py-2 text-sm font-medium hover:bg-primary/90 disabled:opacity-50"
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>

        <div className="space-y-2">
          <p className="text-center text-xs uppercase tracking-wide text-gray-400">
            Or try the demo
          </p>
          <div className="grid grid-cols-2 gap-2">
            {DEMO_ACCOUNTS.map((account) => (
              <button
                key={account.email}
                type="button"
                disabled={loading}
                onClick={() => handleDemoLogin(account)}
                className="border rounded-md py-2 text-sm font-medium hover:bg-gray-50 disabled:opacity-50"
              >
                {account.label}
              </button>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
