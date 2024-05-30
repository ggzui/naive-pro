import Vue from 'unplugin-vue/vite'
import VueJsx from '@vitejs/plugin-vue-jsx'
import VueRouter from 'unplugin-vue-router/vite'
import Layouts from 'vite-plugin-vue-layouts'
import UnoCSS from 'unocss/vite'
import type { UserConfig } from 'vite'

export const appCommon: UserConfig = {
  server: {
    host: true,
  },
  build: {
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1024,
  },
  plugins: [VueRouter({ routeBlockLang: 'yaml' }), Vue(), VueJsx(), Layouts(), UnoCSS()],
}
