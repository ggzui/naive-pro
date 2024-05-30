import { locale } from 'dayjs'
import { useLocaleStoreWithout } from '@naive-pro/store'
import type { LangType } from '@naive-pro/types'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/zh-tw'
import 'dayjs/locale/en'

const dayjsLocalMap: Record<LangType, string> = {
  'en': 'en',
  'zh-CN': 'zh-cn',
  'zh-TW': 'zh-tw',
}

export function setupDayjsLocale() {
  const localStore = useLocaleStoreWithout()

  locale(dayjsLocalMap[localStore.locale])
}
