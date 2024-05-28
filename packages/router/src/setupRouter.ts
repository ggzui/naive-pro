import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupRouterGuard } from './guard'

export const router = createRouter({
  strict: true,
  history: createWebHistory(),
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export async function setupRouter(app: App) {
  app.use(router)

  setupRouterGuard(router)

  await router.isReady()
}
