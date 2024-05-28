import vue from 'unplugin-vue/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueRouter from 'unplugin-vue-router/vite'
import type { UserConfig } from 'vite'

export const commonConfig: UserConfig = {
  server: {
    host: true,
  },
  build: {
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1024,
  },
  plugins: [VueRouter(), vue(), vueJsx()],
}
