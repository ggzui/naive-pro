import { defineStore } from 'pinia'
import { computed, ref, toRefs } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import type { Ref } from 'vue'
import { darkTheme } from 'naive-ui'
import { store } from '../setupStore'
// eslint-disable-next-line ts/ban-ts-comment, ts/prefer-ts-expect-error
// @ts-ignore
// TODO: fix this type error
import themeSetting from '@/config/theme'

export const useThemeStore = defineStore('theme', () => {
  const settings: Ref<ThemeSetting> = ref(themeSetting)

  const darkMode = useDark({
    storageKey: null,
    initialValue: settings.value.themeScheme,
  })
  const toggleDarkMode = useToggle(darkMode)

  const naiveTheme = computed(() => darkMode.value ? darkTheme : null)

  return { ...toRefs(settings.value), darkMode, toggleDarkMode, naiveTheme }
})

export function useThemeStoreWithout() {
  return useThemeStore(store)
}
