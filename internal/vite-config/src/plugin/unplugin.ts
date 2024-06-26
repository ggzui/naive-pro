import { resolve } from 'node:path'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Imagemin from 'unplugin-imagemin/vite'
import Macros from 'unplugin-macros/vite'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { NaiveProResolver } from '@naive-pro/shared'

export function configUnpluginPlugin() {
  const projectRoot = resolve(__dirname, '../../../../')

  return [
    Macros(),
    AutoImport({
      imports: [
        'vue',
        'pinia',
        'vue-i18n',
        '@vueuse/core',
        VueRouterAutoImports,
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
          ],
          'vue-router/auto': ['createRouter', 'createWebHistory', 'createWebHashHistory'],
        },
      ],
    }),
    Components({
      dirs: [],
      resolvers: [
        IconsResolver({
          prefix: 'icon',
        }),
        NaiveUiResolver(),
        NaiveProResolver(),
      ],
    }),
    Icons({
      compiler: 'vue3',
    }),
    Imagemin({
      mode: 'squoosh',
      beforeBundle: true,
      compress: {
        jpg: {
          quality: 10,
        },
        jpeg: {
          quality: 10,
        },
        png: {
          quality: 10,
        },
        webp: {
          quality: 10,
        },
      },
      conversion: [
        { from: 'jpeg', to: 'webp' },
        { from: 'png', to: 'webp' },
        { from: 'JPG', to: 'jpeg' },
      ],
    }),
    VueI18nPlugin({
      defaultSFCLang: 'yaml',
      include: [resolve(projectRoot, './packages/**/locales/**')],
    }),
  ]
}
