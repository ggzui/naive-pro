import precess from 'node:process'
import { resolve } from 'node:path'
import { type UserConfig, defineConfig, loadEnv, mergeConfig } from 'vite'
import { createPlugins } from '../plugin'
import { appCommon } from './common'

export function defineApplicationConfig(defineOptions: UserConfig = {}) {
  return defineConfig(async ({ command, mode }) => {
    const root = precess.cwd()
    const isBuild = command === 'build'

    const pathResolve = (pathname: string) => resolve(root, '.', pathname)

    const { VITE_USE_MOCK, VITE_USE_VISUALIZER } = loadEnv(mode, root)
    const plugins = createPlugins({
      root,
      isBuild,
      enableMock: VITE_USE_MOCK === 'true',
      enableVisualizer: VITE_USE_VISUALIZER === 'true',
    })

    const applicationConfig: UserConfig = {
      esbuild: {
        drop: isBuild ? ['console', 'debugger'] : [],
      },
      resolve: {
        alias: [
          {
            find: 'vue',
            replacement: 'vue/dist/vue.runtime.esm-bundler.js',
          },
          {
            find: 'vue-i18n',
            replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
          },
          // @/xxxx => src/xxxx
          {
            find: /@\//,
            replacement: `${pathResolve('src')}/`,
          },
        ],
      },
      build: {
        rollupOptions: {
          output: {
            chunkFileNames: 'js/[name]-[hash].js',
            entryFileNames: 'js/_entry-[name]-[hash].js',
            assetFileNames: '[ext]/[name]-[hash].[ext]',
            manualChunks: {
              vue: ['vue', 'pinia', 'vue-router'],
            },
          },
        },
      },
      plugins,
    }

    const mergedConfig = mergeConfig(appCommon, applicationConfig)

    return mergeConfig(mergedConfig, defineOptions)
  })
}
