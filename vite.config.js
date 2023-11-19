import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'

export default defineConfig({
  base: './',
  plugins: [vue2()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {},
  server: {
    https: false,
    port: 8888,
    host: '0.0.0.0',
    open: true,
    cors: true,
    proxy: {}
  },
  build: {
    outDir: 'dist',
    assetsDir: 'static',
    chunkSizeWarningLimit: 2000,
    reportCompressedSize: false
  }
})
