import type { ComponentResolver } from 'unplugin-vue-components'

export function NaiveProResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^(Np[A-Z]|np-[a-z])/))
        return { name, from: '@naive-pro/ui' }
    },
  }
}
