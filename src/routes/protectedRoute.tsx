// src/components/ProtectedRoute.tsx
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';
import { ReactNode } from 'react';

type UserRole = 'student' | 'teacher' | 'parent';

// interface User {
//   role?: UserRole;
//   // Add other user properties as needed
// }
interface ProtectedRouteProps {
  children?: ReactNode;
  allowedRoles?: UserRole[];
  redirectPath?: string;
  fallback?: ReactNode;  
}

export const ProtectedRoute = ({
  children,
  allowedRoles,
  redirectPath = '/login',
  fallback = null,
}: ProtectedRouteProps) => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();
  const currentPath = location.pathname;

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return (
      <Navigate
        to={redirectPath}
        state={{
          from: currentPath,
          message: 'Please login to access this page',
        }}
        replace
      />
    );
  }

  // If roles are specified but user doesn't have required role
  if (allowedRoles && user?.role && !allowedRoles.includes(user.role)) {
    return (
      <Navigate
        to="/unauthorized"
        state={{
          attemptedPath: currentPath,
          requiredRoles: allowedRoles,
          userRole: user.role,
        }}
        replace
      />
    );
  }

  // If loading state (optional)
  if (user === undefined) {
    return fallback;
  }

  // Render children or outlet
  return children ? <>{children}</> : <Outlet />;
};
