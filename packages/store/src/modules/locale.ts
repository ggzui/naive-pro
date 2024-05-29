import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'
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

    return { ...toRefs(state) }
  },
  {
    persist: true,
  },
)

export function useLocaleStoreWithout() {
  return useLocaleStore(store)
}
