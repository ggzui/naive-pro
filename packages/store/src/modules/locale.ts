import { defineStore } from 'pinia'
import { computed, reactive, toRefs } from 'vue'
import type { LangType } from '@naive-pro/types'
import type { NDateLocale, NLocale } from 'naive-ui'
import { naiveUiDateLocales, naiveUiLocales } from '../utils/naiveUiLocale'
import { store } from '../setupStore'

export interface LocaleState {
  locale: LangType
  fallbackLocale: LangType
}

export const useLocaleStore = defineStore(
  'locale',
  () => {
    const state = reactive<LocaleState>({
      locale: 'zh-CN',
      fallbackLocale: 'zh-CN',
    })

    const getNaiveUiLocale = computed<NLocale>(() => {
      return naiveUiLocales[state.locale]
    })

    const getNaiveUiDateLocale = computed<NDateLocale>(() => {
      return naiveUiDateLocales[state.locale]
    })

    return { ...toRefs(state), getNaiveUiLocale, getNaiveUiDateLocale }
  },
  {
    persist: true,
  },
)

export function useLocaleStoreWithout() {
  return useLocaleStore(store)
}
