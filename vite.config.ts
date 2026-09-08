import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  preview: {
    port: 4173,
    strictPort: true,
    proxy: {
      '/api': {
        target: process.env.PRERENDER_API_ORIGIN || 'https://baqar.dev',
        changeOrigin: true,
        secure: true,
      }
    }
  }
})
