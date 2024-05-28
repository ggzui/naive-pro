import { viteMockServe } from 'vite-plugin-mock'

export function configMockPlugin(enable: boolean) {
  return viteMockServe({
    ignore: /^_/,
    mockPath: 'mock',
    enable,
  })
}
