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

[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

La API devuelve información de usuarios como nombre, correo, teléfono, ciudad y empresa.

## Estructura del proyecto

```text
users-explorer/
├── screenshots/
│   ├── 01-app-usuarios.png
│   ├── 02-busqueda.png
│   ├── 03-sin-resultados.png
│   ├── 04-eslint-correcto.png
│   └── 05-husky-bloqueo.png
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

## Configuración de ESLint

ESLint está configurado en el archivo `eslint.config.js`.

Su función es detectar errores como:

- Variables no utilizadas.
- Variables no definidas.
- Falta de punto y coma.
- Uso incorrecto de comillas.
- Espacios innecesarios.
- Errores generales de JavaScript.

El proyecto se valida con el siguiente comando:

```bash
npm run lint
```

Una ejecución correcta de ESLint finaliza con código de salida `0`.

## Configuración de Husky

Husky ejecuta validaciones automáticamente antes de cada commit.

El archivo utilizado es:

```text
.husky/pre-commit
```

Su contenido es:

```bash
npx lint-staged
```

La configuración de `lint-staged` está definida en `package.json`:

```json
"lint-staged": {
  "*.js": [
    "eslint --fix"
  ]
}
```

Si ESLint encuentra errores, Husky bloquea el commit.

## Prueba del hook pre-commit

Para verificar el funcionamiento de Husky se agregó temporalmente una variable no utilizada en `script.js`:

```javascript
const errorDePrueba = true;
```

Después se ejecutaron los siguientes comandos:

```bash
git add script.js
git commit -m "test: comprobar husky"
```

ESLint detectó el error
