import { dateEnUS, dateZhCN, dateZhTW, enUS, zhCN, zhTW } from 'naive-ui'
import type { LangType } from '@naive-pro/types'
import type { NDateLocale, NLocale } from 'naive-ui'

export const naiveUiLocales: Record<LangType, NLocale> = {
  'en': enUS,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
}

export const naiveUiDateLocales: Record<LangType, NDateLocale> = {
  'en': dateEnUS,
  'zh-CN': dateZhCN,
  'zh-TW': dateZhTW,
}
