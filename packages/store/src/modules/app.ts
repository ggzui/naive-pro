import { ref, toRefs } from 'vue'
import { defineStore } from 'pinia'
import { store } from '../setupStore'
import type { Ref } from 'vue'
// eslint-disable-next-line ts/ban-ts-comment, ts/prefer-ts-expect-error
// @ts-ignore
// TODO: fix this type error
import appSetting from '@/config/app'

export const useAppStore = defineStore('app', () => {
  const settings: Ref<AppSetting> = ref(appSetting)

  return { ...toRefs(settings.value) }
})

export function useAppStoreWithout() {
  return useAppStore(store)
}
