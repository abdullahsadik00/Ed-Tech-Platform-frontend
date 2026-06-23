import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';

const Unauthorized = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Access Denied</h1>
      <p className="text-muted-foreground">You don't have permission to view this page.</p>
      <div className="flex gap-3">
        <button
          className="px-4 py-2 rounded bg-primary text-white"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
        <button
          className="px-4 py-2 rounded border"
          onClick={() => { logout(); navigate('/login'); }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
