import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // Keep the browser's Host header (localhost:5173) so the API builds its Google redirect URI on this origin.
      '/api': { target: 'http://localhost:4000', changeOrigin: false },
    },
  },
})
