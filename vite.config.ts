// vite.config.ts
import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import viteReact from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: { port: 3000 },
  plugins: [
    // tailwindcss(),
    // // Enables Vite to resolve imports using path aliases.
    // tsConfigPaths(),
    // tanstackStart({
    //   // tsr: {
    //   //   // Specifies the directory TanStack Router uses for your routes.
    //   //   routesDirectory: 'src/app', // Defaults to "routes", relative to srcDirectory
    //   // },
    //   // srcDirectory: 'src/app',
    // }),
    // // viteReact(),
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
});
