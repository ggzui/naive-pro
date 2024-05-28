import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'
import { store } from '../setupStore'

export const useLocaleStore = defineStore(
  'locale',
  () => {
    const state = reactive({
      locale: 'zh_CN',
      fallbackLocale: 'zh_CN',
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
