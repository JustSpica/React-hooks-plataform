import { useContext } from 'react';

import { AuthenticationContext } from 'contexts/AuthenticationContext';

export function useAuth() {
  const context = useContext(AuthenticationContext);

  return context;
}
