import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth, firebase } from 'services/firebase';

import {
  AuthContextType,
  AuthProviderProps,
  UserDataProps,
} from './@types/auth';

export const AuthenticationContext = createContext({} as AuthContextType);

export function AuthenticationProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserDataProps>();

  const navigate = useNavigate();

  console.log(user);

  async function handleSignInWithGithub() {
    const provider = new firebase.auth.GithubAuthProvider();

    const { user } = await auth.signInWithPopup(provider);

    if (user) {
      const { displayName, uid, photoURL, email } = user;

      if (!displayName || !photoURL || !email) {
        throw new Error('Missing information from Google Account');
      }

      setUser({
        id: uid,
        email,
        name: displayName,
        avatar: photoURL,
      });

      navigate('/');
    }
  }

  return (
    <AuthenticationContext.Provider
      value={{ user, setUser, handleSignInWithGithub }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
