import type { App } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import { parse, stringify } from 'zipson'

export const pinia = createPinia()

export function setupStore(app: App) {
  const shortName = import.meta.env.VITE_SHORT_NAME || 'cn'
  pinia.use(createPersistedState({
    storage: localStorage,
    key: key => `${shortName}__${key}`.toUpperCase(),
    serializer: {
      deserialize: parse,
      serialize: stringify,
    },
  }))

  app.use(pinia)
}
