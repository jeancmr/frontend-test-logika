import type { LoginFormValues } from '../../types/types';

const authAPI = import.meta.env.VITE_AUTH_API;

export const authLogin = async (dataForm: LoginFormValues) => {
  const res = await fetch(authAPI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataForm),
  });

  if (!res.ok) {
    const [error] = await res.json();
    throw new Error(error.Message);
  }
  const token = await res.text();
  return token;
};
