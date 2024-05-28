import { visualizer } from 'rollup-plugin-visualizer'
import type { PluginOption } from 'vite'

export function configVisualizerPlugin() {
  return visualizer() as PluginOption
}
