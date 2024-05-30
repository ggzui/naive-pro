import type { LangType } from '@naive-pro/types'

export function setHtmlPageLang(lang: LangType) {
  document.querySelector('html')?.setAttribute('lang', lang)
}
