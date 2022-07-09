import { Navigate } from 'react-router-dom';

import { useAuth } from 'hooks';

interface PriveRouteProps {
  children: JSX.Element;
  redirectTo: string;
}

export function PrivateRoute({ children, redirectTo }: PriveRouteProps) {
  const { user } = useAuth();

  return !user ? <Navigate to={redirectTo} /> : children;
}
