import type { CreateActionForm, GetActionsResponse, Pagination } from '../../types/types';

const actionAPI = import.meta.env.VITE_ACTION_API;

export const getActionsApi = async ({ pageNumber, pageSize, token }: Pagination) => {
  const res = await fetch(`${actionAPI}/admin-list?pageNumber=${pageNumber}&pageSize=${pageSize}`, {
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

export const createAction = async (dataForm: CreateActionForm, token: string | null) => {
  const formData = new FormData();

  formData.append('name', dataForm.name);
  formData.append('description', dataForm.description);
  formData.append('color', dataForm.color);
  formData.append('status', dataForm.status ? '1' : '0');

  if (dataForm.icon?.[0]) {
    formData.append('icon', dataForm.icon[0]);
  }

  const res = await fetch(`${actionAPI}/admin-add`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const data = await res.json();

  return data;
};
