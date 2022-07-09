import React from 'react';

export interface UserDataProps {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface AuthContextType {
  user?: UserDataProps;
  setUser: React.Dispatch<React.SetStateAction<UserDataProps | undefined>>;
  handleSignInWithGithub: () => void;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}
