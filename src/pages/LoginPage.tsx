export const LoginPage = () => {
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

        <form action="" className="flex flex-col px-1.5">
          <label className="block text-sm mb-1">Correo Electrónico*</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Ingresar correo"
            className="mb-2.5 w-full py-2.5 px-3 rounded-sm border border-gray-500"
          />

          <label className="block text-sm mb-1">Contraseña*</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Ingresa tu contraseña"
            className="mb-6 w-full py-2.5 px-3 rounded-sm border border-gray-500"
          />

          <a
            href="#"
            className="text-center mb-12 font-medium text-indigo-950 border-b-2 self-center"
          >
            Recuperar contraseña
          </a>

          <button className="bg-indigo-950 rounded-sm text-white py-2.5 px-24 cursor-pointer hover:bg-blue-900 font-medium self-center">
            Ingresar
          </button>
        </form>
      </article>
    </section>
  );
};
