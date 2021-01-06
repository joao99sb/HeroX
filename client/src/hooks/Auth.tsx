import React, { createContext, useCallback, useState, useContext } from 'react';
import { api } from '../services/api';

interface ISingInRequest {
  email: string;
  password: string;
}

interface AuthContextData {
  ngo: Ngo;
  signIn(request: ISingInRequest): Promise<void>;
  signOut(): void;
  token: string;
}
interface Ngo {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  uf: string;
}

interface IAuhtState {
  token: string;
  ngo: Ngo;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuhtState>(() => {
    const token = localStorage.getItem('hero:token');
    const ngo = localStorage.getItem('hero:ngo');

    if (token && ngo) {
      return { token, ngo: JSON.parse(ngo) };
    }
    return {} as IAuhtState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('login', {
      email,
      password,
    });
    const { token, ngo } = response.data;

    localStorage.setItem('hero:token', token);
    localStorage.setItem('hero:ngo', JSON.stringify(ngo));

    setData({ token, ngo });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('hero:token');
    localStorage.removeItem('hero:ngo');
    setData({} as IAuhtState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ ngo: data.ngo, signIn, signOut, token: data.token }}
    >
      {children}
    </AuthContext.Provider>
  );
};
