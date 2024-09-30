import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    historyApiFallback: true, // Habilitar rutas en modo SPA
    port: 3000, // Puedes ajustar el puerto si es necesario
  },
  build: {
    outDir: 'dist', // Asegúrate de que el directorio de salida sea el correcto
  },
});
