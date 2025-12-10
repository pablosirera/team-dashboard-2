import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@users': path.resolve(__dirname, './src/domains/users'),
      '@auth': path.resolve(__dirname, './src/domains/auth'),
      '@dashboard': path.resolve(__dirname, './src/domains/dashboard'),
      '@settings': path.resolve(__dirname, './src/domains/settings'),
      '@comments': path.resolve(__dirname, './src/domains/comments'),
      '@core': path.resolve(__dirname, './src/core'),
    },
  },
})
