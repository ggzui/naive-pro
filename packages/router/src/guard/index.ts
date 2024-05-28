import type { Router } from 'vue-router/auto'

export function setupRouterGuard(router: Router) {
  createMessageGuard(router)
  createProgressGuard(router)
}

function createMessageGuard(router: Router) {
  router.beforeEach(() => {
    window.$dialog?.destroyAll()
    window.$message?.destroyAll()
    window.$notification?.destroyAll()
  })
}

function createProgressGuard(router: Router) {
  router.beforeEach(() => {
    window.$loadingBar?.start()
  })

  router.beforeEach(() => {
    window.$loadingBar?.finish()
  })
}
