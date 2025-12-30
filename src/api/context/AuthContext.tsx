import { createContext, useEffect, useState } from 'react';
import type { LoginFormValues } from '../../types/types';
import { authLogin } from '../utils/auth.api';

interface AuthContextType {
  error: string;
  isLoading: boolean;
  login: (formData: LoginFormValues) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [error, setError] = useState<string>('');

  const [isLoading, setIsLoading] = useState(false);

  const login = async (formData: LoginFormValues) => {
    setIsLoading(true);

    try {
      const res = await authLogin(formData);
      console.log({ res });
    } catch (errorReq) {
      if (errorReq instanceof Error) {
        setError(errorReq.message);
      } else {
        setError('Un error desconocido ha ocurrido.');
      }
    } finally {
      setIsLoading(false);
    }
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
        isLoading,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
