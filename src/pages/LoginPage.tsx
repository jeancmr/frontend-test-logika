import { useForm, type SubmitHandler } from 'react-hook-form';
import type { LoginFormValues } from '../types/types';
import { useAuth } from '../api/hooks/useAuth';
import { Navigate } from 'react-router';

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const { login, isLoading, error, isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    login(data);
  };

  return (
    <section
      className="min-h-screen bg-cover flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/background.webp')" }}
    >
      <article className="max-w-xl bg-white rounded-xl shadow-md py-12 px-6">
        <div className="w-36 mx-auto">
          <img src="assets/logo.svg" alt="logo be kind" className="w-full" />
        </div>

        <p className="text-3xl text-center my-6">
          ¡Empieza a conectar tu comunidad ante buenas acciones!
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-1.5">
          <div className="mb-2.5">
            {' '}
            <label className="block text-sm mb-1">Correo Electrónico*</label>
            <input
              type="email"
              id="email"
              placeholder="Ingresar correo"
              className="mb-1 w-full py-2.5 px-3 rounded-sm border border-gray-500"
              {...register('username', { required: 'Correo electrónico es requerido' })}
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-sm mb-1">Contraseña*</label>
            <input
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
              className="mb-1 w-full py-2.5 px-3 rounded-sm border border-gray-500"
              {...register('password', { required: 'Contraseña es requerida' })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>

          <a
            href="#"
            className="text-center mb-12 font-medium text-indigo-950 border-b-2 self-center"
          >
            Recuperar contraseña
          </a>

          <button
            className={`rounded-sm py-2.5 px-24 cursor-pointer font-medium self-center ${
              isLoading ? 'bg-gray-200 text-gray-500' : 'bg-indigo-950 text-white hover:bg-blue-900'
            }`}
          >
            Ingresar
          </button>
        </form>
      </article>
    </section>
  );
};
