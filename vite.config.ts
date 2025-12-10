import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@users': fileURLToPath(new URL('./src/domains/users', import.meta.url)),
      '@auth': fileURLToPath(new URL('./src/domains/auth', import.meta.url)),
      '@dashboard': fileURLToPath(new URL('./src/domains/dashboard', import.meta.url)),
      '@settings': fileURLToPath(new URL('./src/domains/settings', import.meta.url)),
      '@comments': fileURLToPath(new URL('./src/domains/comments', import.meta.url)),
      '@core': fileURLToPath(new URL('./src/core', import.meta.url)),
    },
  },
})
