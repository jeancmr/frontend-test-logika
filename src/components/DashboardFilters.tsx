export const DashboardFilters = () => {
  return (
    <div className="mb-8 mt-8 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <input
          className="h-9 w-64 rounded-md border border-gray-500 px-3 text-sm"
          placeholder="Buscar"
        />
        <button className="flex items-center gap-1 text-sm font-bold text-indigo-950 cursor-pointer">
          Filtros
        </button>
      </div>

      <button className="bg-indigo-950 rounded-sm text-white px-4 py-2 cursor-pointer hover:bg-blue-900 font-medium ">
        Crear tipo de categoría
      </button>
    </div>
  );
};
