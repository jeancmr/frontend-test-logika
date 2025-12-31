import { Route, Routes } from 'react-router';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { ProtectedRoutes } from './ProtectedRoutes';
import { Toaster } from 'react-hot-toast';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/*" element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>

      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};
export default AppRouter;
