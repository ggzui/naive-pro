import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupRouterGuard } from './guard'
import type { App } from 'vue'

export const router = createRouter({
  strict: true,
  history: createWebHistory(),
  extendRoutes: routes => setupLayouts(routes),
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export async function setupRouter(app: App) {
  app.use(router)

  setupRouterGuard(router)

  await router.isReady()
}
