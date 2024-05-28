import type { App } from 'vue'
import type { I18nOptions } from 'vue-i18n'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'
import { useLocaleStoreWithout } from '@naive-pro/store'
import { setHtmlPageLang } from './helper'

// eslint-disable-next-line import/no-mutable-exports
export let i18n: ReturnType<typeof createI18n>

function createI18nOptions(): I18nOptions {
  const localStore = useLocaleStoreWithout()

  setHtmlPageLang(localStore.locale)

  return {
    messages,
    legacy: false,
    globalInjection: true,
    locale: localStore.locale,
    fallbackLocale: localStore.fallbackLocale,
  }
}

export function setupI18n(app: App) {
  const options = createI18nOptions()
  i18n = createI18n(options)
  app.use(i18n)
}
