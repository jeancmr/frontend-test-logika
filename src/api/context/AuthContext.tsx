import { createContext, useEffect, useState } from 'react';
import type { LoginFormValues } from '../../types/types';
import { authLogin } from '../utils/auth.api';

interface AuthContextType {
  error: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (formData: LoginFormValues) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const login = async (formData: LoginFormValues) => {
    setIsLoading(true);

    try {
      const res = await authLogin(formData);
      localStorage.setItem('token', res);
      setIsAuthenticated(true);
      return true;
    } catch (errorReq) {
      if (errorReq instanceof Error) {
        setError(errorReq.message);
      } else {
        setError('Un error desconocido ha ocurrido.');
      }
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <AuthContext.Provider
      value={{
        error,
        isAuthenticated,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
