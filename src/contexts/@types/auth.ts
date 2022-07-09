import React from 'react';

export interface AuthContextProps {
  token: string;
  setToken: (value: string) => void;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}
