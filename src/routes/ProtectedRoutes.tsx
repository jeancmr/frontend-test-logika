import { Outlet, Navigate } from 'react-router';
import { useAuth } from '../api/hooks/useAuth';

export const ProtectedRoutes = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
