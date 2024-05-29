import { defineStore } from 'pinia'
import { computed, effectScope, onScopeDispose, ref, toRefs } from 'vue'
import { darkTheme, useOsTheme } from 'naive-ui'
import type { Ref } from 'vue'
import { store } from '../setupStore'
// eslint-disable-next-line ts/ban-ts-comment, ts/prefer-ts-expect-error
// @ts-ignore
// TODO: fix this type error
import themeSetting from '@/config/theme'

export interface ThemeState {
  darkMode: boolean
  followOsTheme: boolean
}

export const useThemeStore = defineStore(
  'theme',
  () => {
    const scope = effectScope()
    const osTheme = useOsTheme()

    const settings: Ref<ThemeSetting> = ref(themeSetting)

    const darkMode = computed(() => {
      if (settings.value.themeScheme === 'auto')
        return osTheme.value === 'dark'
      return settings.value.themeScheme === 'dark'
    })

    const naiveTheme = computed(() => {
      return darkMode.value ? darkTheme : null
    })

    scope.run(() => {})

    onScopeDispose(() => {
      scope.stop()
    })

    return { ...toRefs(settings.value), darkMode, naiveTheme }
  },
  {
    persist: true,
  },
)

export function useThemeStoreWithout() {
  return useThemeStore(store)
}
