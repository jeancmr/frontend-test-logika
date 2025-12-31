import { useEffect, useState } from 'react';
import type { Action } from '../types/types';
import { getActionsApi } from '../api/utils/action.api';

export const useActions = () => {
  const [actions, setActions] = useState<Action[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const [pageCount, setPageCount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const getActions = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem('token');
      const res = await getActionsApi({
        pageNumber: pagination.pageIndex + 1,
        pageSize: pagination.pageSize,
        token,
      });
      const { data } = res;

      setActions(data.data);
      setPageCount(data.totalPages);
      setTotalItems(data.totalElements);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Un error desconocido ha ocurrido');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getActions();
  }, [pagination.pageIndex, pagination.pageSize]);

  return {
    actions,
    error,
    getActions,
    isLoading,
    pageCount,
    pagination,
    setPagination,
    totalItems,
  };
};
