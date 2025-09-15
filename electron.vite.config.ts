import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    server: {
      host: 'localhost',
      port: 5173,
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '') // 非必要配置项, /api 在真正发送网络请求时, 会被替换掉
        },
        '/music-img': {
          target: 'http://p1.music.126.net',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/music-img/, '')
        },
        '/music-resource': {
          target: 'http://m804.music.126.net',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/music-resource/, '')
        }
      }
    },
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [vue(), VueSetupExtend()]
  }
})
