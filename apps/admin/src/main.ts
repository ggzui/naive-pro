import { createApp } from 'vue'
import { setupStore } from '@naive-pro/store'
import App from './App.vue'

async function bootstrap() {
  const app = createApp(App)

  setupStore(app)

  app.mount('#app')
}

bootstrap()
