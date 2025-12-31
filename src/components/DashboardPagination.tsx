import type { Table } from '@tanstack/react-table';
import type { Action } from '../types/types';

interface DashboardPaginationProps {
  table: Table<Action>;
  totalItems: number;
}
export const DashboardPagination = ({ table, totalItems }: DashboardPaginationProps) => {
  const { pageIndex, pageSize } = table.getState().pagination;

  const start = pageIndex * pageSize + 1;
  const end = Math.min((pageIndex + 1) * pageSize, totalItems);

  return (
    <div className="flex items-center gap-12 justify-center px-4 py-3 text-sm text-gray-900">
      <div className="flex items-center gap-2">
        <span>Resultados por página</span>
        <select
          value={pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
          className="rounded border px-2 py-1"
        >
          {[10, 20, 30, 40].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-4">
        <span>
          {start}
          {' - '}
          {end} de {totalItems}
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
            className={`px-2 disabled:opacity-40 ${
              table.getCanPreviousPage() ? 'cursor-pointer' : ''
            }`}
          >
            «
          </button>

          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className={`px-2 disabled:opacity-40 ${
              table.getCanPreviousPage() ? 'cursor-pointer' : ''
            }`}
          >
            ‹
          </button>

          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className={`px-2 disabled:opacity-40 ${table.getCanNextPage() ? 'cursor-pointer' : ''}`}
          >
            ›
          </button>

          <button
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
            className={`px-2 disabled:opacity-40 ${table.getCanNextPage() ? 'cursor-pointer' : ''}`}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
};
