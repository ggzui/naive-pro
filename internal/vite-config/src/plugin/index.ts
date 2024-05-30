import { configMockPlugin } from './mock'
import { configVisualizerPlugin } from './visualizer'
import { configDevtoolsPlugin } from './devtools'
import { configUnpluginPlugin } from './unplugin'
import type { PluginOption } from 'vite'

export interface VitePluginOptions {
  root: string
  isBuild: boolean
  enableMock: boolean
  enableVisualizer: boolean
}

export function createPlugins({ isBuild, enableMock, enableVisualizer }: VitePluginOptions): PluginOption[] {
  const vitePlugins: PluginOption[] = []

  // unplugin-xxx
  vitePlugins.push(...configUnpluginPlugin())

  // rollup-plugin-visualizer
  enableVisualizer && vitePlugins.push(configVisualizerPlugin())

  // vite-plugin-mock
  vitePlugins.push(configMockPlugin(enableMock))

  if (!isBuild)
    vitePlugins.push(...configDevtoolsPlugin())

  return vitePlugins
}
