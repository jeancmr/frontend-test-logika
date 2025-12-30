import { Route, Routes } from 'react-router';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<h2>Login Page</h2>} />
      </Routes>
    </>
  );
};
export default AppRouter;
