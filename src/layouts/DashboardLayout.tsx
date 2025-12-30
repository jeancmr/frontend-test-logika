import type { ReactNode } from 'react';
import { Header } from '../components/Header';
import { Aside } from '../components/Aside';

type DashboardLayoutProps = {
  children: ReactNode;
};

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="grid h-screen grid-cols-[240px_1fr] grid-rows-[66px_1fr] ">
      <Header />
      <Aside />
      <main className="overflow-y-auto bg-gray-500 p-6">{children}</main>
    </div>
  );
};
