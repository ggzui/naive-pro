import { createApp } from 'vue'
import { setupRouter } from '@naive-pro/router'
import { setupStore } from '@naive-pro/store'
import { setupDayjsLocale, setupI18n } from '@naive-pro/i18n'
import { setupAssets } from '@naive-pro/assets'
import App from './App.vue'

async function bootstrap() {
  setupAssets()

  const app = createApp(App)

  setupStore(app)

  setupI18n(app)

  setupDayjsLocale()

  await setupRouter(app)

  app.mount('#app')
}

bootstrap()
