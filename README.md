# Frontend React Test

En la prueba se hizo uso de la librería react usando typescript. Cuenta con una página de login y otra la cual funciona como dashboard. El usuario no podrá acceder al dashboard a menos que inicie sesión. La autenticación se hace gracias a los endpoints entregados. El token se almacena en localstorage. Una vez el usuario cierre sesión el token deja de existir en el navegador. Para las peticiones de obtener las acciones y de publicar una acción se tiene en cuenta el token creado al momento que el usuario se loguee.

## Instalación 🔧

El proyecto fue hecho usando el gestor de paquetes yarn. Por tanto, para poder ejecutar el proyecto deberá seguir los siguientes pasos

1. Clone el repositorio

```bash
git clone https://github.com/jeancmr/frontend-test-logika.git
```

2. Diríjase a la carpeta, abra el editor de código de su preferencia y ejecute el siguiente comando

```bash
yarn install
```

3. Una vez instaladas las depedencias es momento de correr el proyecto con el siguiente comando

```bash
yarn dev
```

## Librerías y dependencias utilizadas 📚

- **React**: librería para creación de interfaces de usuarios
- **TypeScript**: tipado estático
- **Tailwind CSS**: estilos
- **React Hook Form**: manejo de formularios
- **React Router**: manejo de rutas
- **React hot toast**: notificaciones tipo toast
- **Tanstack Table**: manejo de información en tabla

## Lista de tareas ☑️

- [x] Autenticación de usuario en login
- [x] Rutas protegidas
- [x] Consumo de APIs
- [x] Visualizar acciones en tabla
- [x] Paginación
- [x] Agregar acción
- [ ] Pruebas unitarias
- [ ] Despliegue

## Decisiones tomadas ☝️

- Para el tema de las rutas se pudo haber hecho sin usar react-router al contar solamente con dos páginas. Sin embargo, para efectos de escalabilidad y por ser lo más recomendado, se usó finalmente la librería debido a la facilidad y practicidad.

- En cuanto la autenticación, se usó el hook de react useContext, de esta manera en cualquier parte de la aplicación tendrá acceso a consultar si el usuario se encuentra o no autenticado (esto se usa tanto en el componente ProtectedRoutes, para ver si el usuario puede entrar a la ruta principal de la app, y en el componente Login, en donde si verifica en caso tal se encuentre autenticado lo lleve a la ruta dashboard)

- Para el manejo de los endpoints se crearon dos archivos. En ellos se encuentran las funciones base para el consumo de las APIs compartidas.

- Para el diseño del dashboard se optó por usar grid ya que el diseño favorece más para ese estilo, en donde el header y el aside se mantienen fijos, mientras que el elemento restante queda habilitado el movimiento por scroll.

- Para más legibilidad del código y optimizaciones a futuro se optó por un custom hooks para lo que tiene que ver con las acciones (listado, creación, paginación).
