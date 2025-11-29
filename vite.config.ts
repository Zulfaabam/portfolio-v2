// vite.config.ts
import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  server: { port: 3000 },
  plugins: [
    tailwindcss(),
    // Enables Vite to resolve imports using path aliases.
    tsConfigPaths(),
    tanstackStart({
      tsr: {
        // Specifies the directory TanStack Router uses for your routes.
        routesDirectory: 'src/app', // Defaults to "routes", relative to srcDirectory
      },
    }),
    // viteReact(),
  ],
});
