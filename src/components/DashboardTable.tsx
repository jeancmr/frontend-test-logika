import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import type { ColumnDef } from '@tanstack/react-table';
import type { Action } from '../types/types';
import { DashboardPagination } from './DashboardPagination';
import { DashboardFilters } from './DashboardFilters';
import { useActions } from '../hooks/useActions';

const columns: ColumnDef<Action>[] = [
  {
    accessorKey: 'name',
    header: 'Nombre de la categoría',
    cell: ({ getValue }) => <span className=" text-gray-900">{getValue<string>()}</span>,
  },
  {
    accessorKey: 'icon',
    header: 'Icono de la categoría',
    cell: ({ getValue, row }) => (
      <img
        src={getValue<string>()}
        alt={`icono ${row.original.name}`}
        className="h-8 w-8 rounded bg-gray-100 object-contain"
      />
    ),
  },
  {
    accessorKey: 'status',
    header: 'Estado',
    cell: ({ getValue }) => {
      const active = getValue<number>() === 1;

      return (
        <span
          className={`inline-flex items-center rounded-md border px-3 py-1 text-xs font-medium
            ${
              active
                ? 'border-green-500 bg-green-100 text-green-700'
                : 'border-gray-400 bg-gray-100 text-gray-600'
            }
          `}
        >
          {active ? 'Activo' : 'Inactivo'}
        </span>
      );
    },
  },
  {
    accessorKey: 'description',
    header: 'Descripción',
    cell: ({ getValue }) => <p className="max-w-md truncate text-gray-900">{getValue<string>()}</p>,
  },
  {
    accessorKey: 'createdAt',
    header: 'Fecha de creación',
    cell: ({ getValue }) =>
      new Date(getValue<string>()).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
  },
  {
    id: 'actions',
    header: 'Acciones',
    cell: () => (
      <div className="flex justify-start gap-3 text-gray-500">
        <button className="hover:text-gray-800 cursor-pointer">✏️</button>
        <button className="hover:text-red-600 cursor-pointer">🗑️</button>
        <button className="hover:text-gray-800 cursor-pointer">👁️</button>
      </div>
    ),
  },
];

export const DashboardTable = () => {
  const {
    actions: data,
    error,
    isLoading,
    pageCount,
    totalItems,
    pagination,
    setPagination,
  } = useActions();

  const table = useReactTable({
    data,
    columns,
    state: { pagination },
    onPaginationChange: setPagination,
    manualPagination: true,
    pageCount,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <>
      <DashboardFilters />
      <div className="rounded-lg border border-gray-300 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="cursor-pointer select-none px-4 py-3 text-left font-medium text-gray-600"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div className="flex items-center gap-1">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{
                        asc: '▲',
                        desc: '▼',
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className=" hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}

            {isLoading && table.getRowModel().rows.length === 0 && (
              <tr>
                <td
                  colSpan={table.getAllColumns().length}
                  className="px-4 py-6 text-center text-gray-600"
                >
                  Cargando datos...
                </td>
              </tr>
            )}

            {error && (
              <tr>
                <td
                  colSpan={table.getAllColumns().length}
                  className="px-4 py-6 text-center text-gray-600"
                >
                  {error}
                </td>
              </tr>
            )}

            {!error && !isLoading && table.getRowModel().rows.length === 0 && (
              <tr>
                <td
                  colSpan={table.getAllColumns().length}
                  className="px-4 py-6 text-center text-gray-600"
                >
                  No hay datos disponibles
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <DashboardPagination table={table} totalItems={totalItems} />
    </>
  );
};
