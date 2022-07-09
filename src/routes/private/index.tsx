import { Navigate } from 'react-router-dom';

import { useAuth } from 'hooks';

interface PriveRouteProps {
  children: JSX.Element;
  redirectTo: string;
}

export function PrivateRoute({ children, redirectTo }: PriveRouteProps) {
  const { token } = useAuth();

  console.log(token);
  console.log('aqui');

  return !token ? <Navigate to={redirectTo} /> : children;
}
