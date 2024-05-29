import type { LangType } from '@naive-pro/types'

export function setHtmlPageLang(locale: LangType) {
  document.querySelector('html')?.setAttribute('lang', locale)
}
