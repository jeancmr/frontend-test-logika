import type { GetActionsResponse, Pagination } from '../../types/types';

const actionAPI = import.meta.env.VITE_ACTION_API;

export const getActionsApi = async ({ pageNumber, pageSize, token }: Pagination) => {
  const res = await fetch(`${actionAPI}?pageNumber=${pageNumber}&pageSize=${pageSize}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    if (res.status === 400) {
      const { message } = await res.json();
      throw new Error(message);
    }
    if (res.status === 403) throw new Error('Token no válido');

    throw new Error('Error al obtener las acciones');
  }

  const data: GetActionsResponse = await res.json();

  return data;
};
