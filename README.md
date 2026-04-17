# Movies App

Aplicación móvil de películas construida con **Expo** y **React Native**. Consume la API de [The Movie Database (TMDB)](https://www.themoviedb.org/) para mostrar estrenos, populares, mejor valoradas y próximos estrenos.

## Tecnologías principales

| Tecnología | Uso en el proyecto |
|------------|-------------------|
| **[Expo](https://expo.dev)** (~54) | Toolchain, build y desarrollo |
| **[Expo Router](https://docs.expo.dev/router/introduction/)** | Navegación basada en archivos (`app/`) |
| **[TanStack Query](https://tanstack.com/query/latest)** (`@tanstack/react-query`) | Caché, estados de carga y refetch de datos desde TMDB |
| **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)** | Animaciones y trabajo en el hilo nativo (requerido por el ecosistema de animaciones moderno en RN) |
| **[react-native-reanimated-carousel](https://github.com/dohooo/react-native-reanimated-carousel)** | Carruseles con base en Reanimated |
| **[NativeWind](https://www.nativewind.dev/)** + **Tailwind CSS** | Estilos con utilidades tipo Tailwind en componentes RN |
| **[Axios](https://axios-http.com/)** | Cliente HTTP hacia TMDB (`core/api/movie-api.ts`) |
| **TypeScript** | Tipado en todo el código |

También se usan **React Navigation** (stack/tabs vía Expo Router), **react-native-safe-area-context**, **react-native-screens**, **expo-image** y **@expo/vector-icons**, entre otras dependencias listadas en `package.json`.

## Estructura del código (resumen)

- **`app/`** — Pantallas y rutas (Expo Router).
- **`core/`** — Acciones y cliente API (capa de datos).
- **`presentation/`** — Componentes UI y hooks (por ejemplo `useMovies`).
- **`infrastructure/`** — Tipos y mapeo de respuestas TMDB.

## Requisitos

- Node.js (LTS recomendado)
- Cuenta y **API Key** de TMDB

## Configuración

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

   Luego abre en emulador, dispositivo o **Expo Go** según las opciones del CLI.

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm start` | Servidor de desarrollo Expo |
| `npm run android` | Abrir en Android |
| `npm run ios` | Abrir en iOS (macOS) |
| `npm run web` | Versión web |
| `npm run lint` | ESLint (config Expo) |

## Licencia

Código del proyecto: uso personal y educativo. Los datos e imágenes de películas provienen de TMDB y están sujetos a sus [términos de uso](https://www.themoviedb.org/documentation/api/terms-of-use).
