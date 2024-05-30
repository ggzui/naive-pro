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
  <n-config-provider :locale="localeStore.naiveLocale" :date-locale="localeStore.naiveDateLocale" :theme="themeStore.naiveTheme" class="h-full">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <context-holder />
            <slot />
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
