import { defineStore } from 'pinia'
import { computed, reactive, toRefs } from 'vue'
import { naiveUiDateLocales, naiveUiLocales } from '@naive-pro/i18n'
import type { LangType } from '@naive-pro/types'
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

    const naiveLocale = computed(() => naiveUiLocales[state.locale])
    const naiveDateLocale = computed(() => naiveUiDateLocales[state.locale])

    return { ...toRefs(state), naiveLocale, naiveDateLocale }
  },
  {
    persist: true,
  },
)

export function useLocaleStoreWithout() {
  return useLocaleStore(store)
}
