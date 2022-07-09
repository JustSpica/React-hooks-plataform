import { createContext } from 'react';

import { AuthContextProps, AuthProviderProps } from './@types/auth';

import { useLocalStorage } from 'hooks';

export const AuthenticationContext = createContext({} as AuthContextProps);

export function AuthenticationProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useLocalStorage('token', '');

  return (
    <AuthenticationContext.Provider value={{ token, setToken }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
