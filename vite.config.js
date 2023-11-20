import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig({
  base: './',
  plugins: [
    vue2(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/icons')],
      symbolId: 'icon-[dir]-[name]',
      inject: 'body-last' | 'body-first',
      customDomId: '__svg__icons__dom__'
    })
  ],
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
    open: false,
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
