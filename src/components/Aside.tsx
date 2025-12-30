export const Aside = () => {
  const styles =
    'cursor-pointer border-l-4 border-transparent p-4 text-gray-900 transition-colors hover:border-cyan-500 hover:bg-cyan-50';

  return (
    <aside className="flex flex-col">
      <img src="assets/background-logo.svg" alt="logo be kind network" className="w-full" />
      <ul>
        <li className={styles}>Home</li>
        <li className={styles}>Impacto Social</li>
        <li className={styles}>Comunidad</li>
        <li className={styles}>Sponsors</li>
        <li className={styles}>Marketplace</li>
        <li className={styles}>Bakanes</li>
        <li className={styles}>Contenidos</li>
        <li className={styles}>Categorías de acciones</li>
      </ul>
      <button className="text-indigo-950 font-medium text-center cursor-pointer mt-3">
        Cerrar sesión
      </button>
    </aside>
  );
};
