# Users Explorer

Mini aplicación web desarrollada con HTML, CSS y JavaScript que consume una API pública para mostrar información de usuarios dinámicamente.

## Descripción

Users Explorer obtiene datos desde la API pública JSONPlaceholder y los presenta en tarjetas visuales.

La aplicación permite buscar usuarios por:

- Nombre.
- Nombre de usuario.
- Correo electrónico.
- Ciudad.
- Empresa.

También incluye una configuración de ESLint y Husky para validar el código antes de realizar un commit.

## Funcionalidades

- Consumo de usuarios mediante `fetch()`.
- Renderizado dinámico utilizando el DOM.
- Búsqueda en tiempo real.
- Mensaje de carga de información.
- Mensaje cuando no existen resultados.
- Manejo de errores de conexión.
- Diseño adaptable para computadoras, tablets y teléfonos.
- Validación del código con ESLint.
- Hook `pre-commit` configurado con Husky.
- Bloqueo de commits cuando existen errores de estilo.

## Tecnologías utilizadas

- HTML5.
- CSS3.
- JavaScript.
- Fetch API.
- JSONPlaceholder.
- Node.js y npm.
- Git y GitHub.
- ESLint.
- Husky.
- lint-staged.

## API utilizada

La aplicación consume el siguiente endpoint:

```text
[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
```

La API devuelve información de usuarios como nombre, correo, teléfono, ciudad y empresa.

## Estructura del proyecto

```text
users-explorer/
├── index.html
├── script.js
├── style.css
├── eslint.config.js
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── .husky/
    └── pre-commit
```

## Instalación

Clona el repositorio:

```bash
git clone [https://github.com/lvaldizon-2022029/Actividad-4---B4.git](https://github.com/lvaldizon-2022029/Actividad-4---B4.git)
```

Entra a la carpeta del proyecto:

```bash
cd Actividad-4---B4
```

Instala las dependencias:

```bash
npm install
```

## Ejecutar la aplicación

Inicia el servidor local:

```bash
npm run start
```

Después abre en el navegador la dirección que indique la terminal, normalmente:

```text
http://localhost:3000
```

## Comandos disponibles

Ejecutar la aplicación:

```bash
npm run start
```

Revisar el código con ESLint:

```bash
npm run lint
```

Corregir automáticamente errores compatibles:

```bash
npm run lint:fix
```

Ejecutar la validación de archivos preparados para commit:

```bash
npx lint-staged
```


## Autor

- Nombre: Luis Ronaldo Valdizón Contreras
- Actividad #4 - B4

![alt text](image.png)