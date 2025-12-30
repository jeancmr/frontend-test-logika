import type { Table } from '@tanstack/react-table';
import type { Action } from '../types/types';

interface DashboardPaginationProps {
  table: Table<Action>;
}
export const DashboardPagination = ({ table }: DashboardPaginationProps) => {
  return (
    <div className="flex items-center gap-12 justify-center px-4 py-3 text-sm text-gray-900">
      <div className="flex items-center gap-2">
        <span>Resultados por página</span>
        <select
          value={table.getState().pagination.pageSize}
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
          {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1}
          {' - '}
          {Math.min(
            (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
            table.getRowCount()
          )}{' '}
          de {table.getRowCount()}
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-2 disabled:opacity-40"
          >
            «
          </button>

          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-2 disabled:opacity-40"
          >
            ‹
          </button>

          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-2 disabled:opacity-40"
          >
            ›
          </button>

          <button
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
            className="px-2 disabled:opacity-40"
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
};
