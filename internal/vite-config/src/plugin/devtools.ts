import eslintPlugin from '@nabla/vite-plugin-eslint'
import vueDevTools from 'vite-plugin-vue-devtools'

export function configDevtoolsPlugin() {
  return [
    eslintPlugin({
      eslintOptions: { cache: true, fix: true },
    }),
    vueDevTools(),
  ]
}
