import { createApp } from 'vue'
import { setupRouter } from '@naive-pro/router'
import { setupStore } from '@naive-pro/store'
import App from './App.vue'

async function bootstrap() {
  const app = createApp(App)

  setupStore(app)

  await setupRouter(app)

  app.mount('#app')
}

bootstrap()
