import { createApp } from 'vue'
import { setupRouter } from '@naive-pro/router'
import { setupStore } from '@naive-pro/store'
import { setupI18n } from '@naive-pro/i18n'
import App from './App.vue'

import 'virtual:uno.css'

async function bootstrap() {
  const app = createApp(App)

  setupStore(app)

  setupI18n(app)

  await setupRouter(app)

  app.mount('#app')
}

bootstrap()
