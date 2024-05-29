import { defineConfig } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  shortcuts: [
    {
      'wh-full': 'w-full h-full',
      'wh-screen': 'w-screen h-screen',
      'flex-col': 'flex flex-col',
      'flex-x-center': 'flex justify-center',
      'flex-y-center': 'flex items-center',
      'flex-center': 'flex justify-center items-center',
    },
  ],
  rules: [[/^wh-(\d+)$/, ([, d]) => ({ width: `${d}px`, height: `${d}px` })]],
})
