<script setup lang="ts">
import { createTextVNode, defineComponent } from 'vue'
import { NConfigProvider, NDialogProvider, NLoadingBarProvider, NMessageProvider, NNotificationProvider, useDialog, useLoadingBar, useMessage, useNotification } from 'naive-ui'
import { useLocaleStore, useThemeStore } from '@naive-pro/store'

defineOptions({ name: 'NpConfigProvider' })

const localeStore = useLocaleStore()
const themeStore = useThemeStore()

const ContextHolder = defineComponent({
  name: 'ContextHolder',
  setup() {
    function register() {
      window.$loadingBar = useLoadingBar()
      window.$dialog = useDialog()
      window.$message = useMessage()
      window.$notification = useNotification()
    }

    register()

    return () => createTextVNode()
  },
})
</script>

<template>
  <NConfigProvider :locale="localeStore.naiveLocale" :date-locale="localeStore.naiveDateLocale" :theme="themeStore.naiveTheme" class="h-full">
    <NLoadingBarProvider>
      <NDialogProvider>
        <NNotificationProvider>
          <NMessageProvider>
            <ContextHolder />
            <slot />
          </NMessageProvider>
        </NNotificationProvider>
      </NDialogProvider>
    </NLoadingBarProvider>
  </NConfigProvider>
</template>
