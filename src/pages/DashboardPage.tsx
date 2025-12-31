import { useState } from 'react';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { DashboardTable } from '../components/DashboardTable';

export const DashboardPage = () => {
  const [tab, setTab] = useState(0);

  const tabStyle = (num: number) => {
    return `pb-2 cursor-pointer ${tab === num ? 'border-b-4 border-indigo-950 font-bold' : ''}`;
  };

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-12">
        {tab === 0 && 'Categorías'} {tab === 1 && 'Tipos'} {tab === 2 && 'Evidencias'}
      </h1>
      <nav className="flex gap-8">
        <button className={tabStyle(0)} onClick={() => setTab(0)}>
          Categorias
        </button>
        <button className={tabStyle(1)} onClick={() => setTab(1)}>
          Tipos
        </button>
        <button className={tabStyle(2)} onClick={() => setTab(2)}>
          Evidencias
        </button>
      </nav>

      <DashboardTable />
    </DashboardLayout>
  );
};
