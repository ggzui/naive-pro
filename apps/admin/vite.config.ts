import { defineApplicationConfig } from '@naive-pro/vite-config'

export default defineApplicationConfig({
  server: {
    proxy: {
      '/api': {
        ws: true,
        changeOrigin: true,
        target: 'http://localhost:3000',
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
