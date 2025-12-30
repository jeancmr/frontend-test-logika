import type { ReactNode } from 'react';
import { Header } from '../components/Header';

type DashboardLayoutProps = {
  children: ReactNode;
};

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="grid h-screen grid-cols-[260px_1fr] grid-rows-[66px_1fr] ">
      <Header />
      <aside className=" bg-white">aside</aside>

      <main className="overflow-y-auto bg-gray-500 p-6">{children}</main>
    </div>
  );
};
