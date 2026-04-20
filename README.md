# Movies App

Aplicación de películas con **Expo** y **React Native** · TMDB.  
**Movies app** built with **Expo** and **React Native** · TMDB.

Abre uno de los desplegables para ver el readme completo. · **Expand a section** below for the full readme.

<details>
<summary><strong>Readme — Español</strong></summary>

Aplicación móvil de películas construida con **Expo** y **React Native**. Consume la API de [The Movie Database (TMDB)](https://www.themoviedb.org/) para mostrar estrenos, populares, mejor valoradas y próximos estrenos.

### Tecnologías principales

| Tecnología | Uso en el proyecto |
|------------|-------------------|
| **[Expo](https://expo.dev)** (~54) | Toolchain, build y desarrollo |
| **[Expo Router](https://docs.expo.dev/router/introduction/)** | Navegación basada en archivos (`app/`) |
| **[TanStack Query](https://tanstack.com/query/latest)** (`@tanstack/react-query`) | Caché, estados de carga y refetch de datos desde TMDB |
| **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)** | Animaciones en el hilo nativo |
| **[react-native-reanimated-carousel](https://github.com/dohooo/react-native-reanimated-carousel)** | Carruseles con Reanimated |
| **[expo-linear-gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)** | Degradados en UI (p. ej. header de detalle) |
| **[NativeWind](https://www.nativewind.dev/)** + **Tailwind CSS** | Estilos tipo utility en componentes RN |
| **[Axios](https://axios-http.com/)** | Cliente HTTP hacia TMDB (`core/api/movie-api.ts`) |
| **TypeScript** | Tipado en todo el código |

También se usan **React Navigation** (vía Expo Router), **react-native-safe-area-context**, **react-native-screens**, **expo-image** y **@expo/vector-icons**, entre otras dependencias en `package.json`.

### Estructura del código (resumen)

- **`app/`** — Pantallas y rutas (Expo Router).
- **`core/`** — Acciones y cliente API (capa de datos).
- **`presentation/`** — Componentes UI y hooks (p. ej. `useMovies`).
- **`infrastructure/`** — Tipos y mapeo de respuestas TMDB.

### Requisitos

- Node.js (LTS recomendado)
- Cuenta y **API Key** de TMDB

### Configuración

1. Instalar dependencias:

   ```bash
   npm install
   ```

2. Variables de entorno: copia `.env.template` a `.env` y completa tu clave:

   ```env
   EXPO_PUBLIC_TMDB_KEY=tu_api_key
   EXPO_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3/movie
   ```

   Expo expone variables con prefijo `EXPO_PUBLIC_` al bundle.

3. Iniciar el proyecto:

   ```bash
   npm start
   ```

   Luego abre en emulador, dispositivo o **Expo Go** según el CLI.

### Scripts

| Comando | Descripción |
|---------|-------------|
| `npm start` | Servidor de desarrollo Expo |
| `npm run android` | Abrir en Android |
| `npm run ios` | Abrir en iOS (macOS) |
| `npm run web` | Versión web |
| `npm run lint` | ESLint (config Expo) |

### Licencia

Código del proyecto: uso personal y educativo. Los datos e imágenes de películas provienen de TMDB y están sujetos a sus [términos de uso](https://www.themoviedb.org/documentation/api/terms-of-use).

</details>

<details>
<summary><strong>README — English</strong></summary>

Mobile movies app built with **Expo** and **React Native**. It uses [The Movie Database (TMDB)](https://www.themoviedb.org/) for now playing, popular, top rated, and upcoming titles.

### Main stack

| Tech | Role in this project |
|------|----------------------|
| **[Expo](https://expo.dev)** (~54) | Tooling, builds, development |
| **[Expo Router](https://docs.expo.dev/router/introduction/)** | File-based routing (`app/`) |
| **[TanStack Query](https://tanstack.com/query/latest)** (`@tanstack/react-query`) | Caching, loading states, refetching TMDB data |
| **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)** | Native-thread animations |
| **[react-native-reanimated-carousel](https://github.com/dohooo/react-native-reanimated-carousel)** | Carousels on top of Reanimated |
| **[expo-linear-gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)** | UI gradients (e.g. movie detail header) |
| **[NativeWind](https://www.nativewind.dev/)** + **Tailwind CSS** | Utility-first styling in RN |
| **[Axios](https://axios-http.com/)** | HTTP client for TMDB (`core/api/movie-api.ts`) |
| **TypeScript** | Typing across the codebase |

Also **React Navigation** (via Expo Router), **react-native-safe-area-context**, **react-native-screens**, **expo-image**, **@expo/vector-icons**, and more — see `package.json`.

### Project layout (summary)

- **`app/`** — Screens and routes (Expo Router).
- **`core/`** — Actions and API client (data layer).
- **`presentation/`** — UI components and hooks (e.g. `useMovies`).
- **`infrastructure/`** — Types and TMDB response mapping.

### Requirements

- Node.js (LTS recommended)
- TMDB **API key**

### Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Environment: copy `.env.template` to `.env` and set your key:

   ```env
   EXPO_PUBLIC_TMDB_KEY=your_api_key
   EXPO_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3/movie
   ```

   Expo inlines `EXPO_PUBLIC_*` variables into the bundle.

3. Start the app:

   ```bash
   npm start
   ```

   Then open in an emulator, a device, or **Expo Go** from the CLI options.

### Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Expo dev server |
| `npm run android` | Run on Android |
| `npm run ios` | Run on iOS (macOS) |
| `npm run web` | Web build |
| `npm run lint` | ESLint (Expo config) |

### License

Project code: personal / educational use. Movie data and images come from TMDB and are subject to their [API terms of use](https://www.themoviedb.org/documentation/api/terms-of-use).

</details>
