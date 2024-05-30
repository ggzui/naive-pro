import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import { parse, stringify } from 'zipson'
import type { App } from 'vue'

export const store = createPinia()

export function setupStore(app: App) {
  const shortName = import.meta.env.VITE_SHORT_NAME || 'cn'
  store.use(createPersistedState({
    storage: localStorage,
    key: key => `${shortName}__${key}`.toUpperCase(),
    serializer: {
      deserialize: parse,
      serialize: stringify,
    },
  }))

  app.use(store)
}
