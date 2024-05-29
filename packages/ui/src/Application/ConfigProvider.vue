<script setup lang="ts">
import { NConfigProvider, NDialogProvider, NLoadingBarProvider, NMessageProvider, NNotificationProvider, useDialog, useLoadingBar, useMessage, useNotification } from 'naive-ui'
import { createTextVNode, defineComponent } from 'vue'
import { useLocaleStore } from '@naive-pro/store'

defineOptions({ name: 'NpConfigProvider' })

const localeStore = useLocaleStore()

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
  <NConfigProvider :locale="localeStore.getNaiveUiLocale" :date-locale="localeStore.getNaiveUiDateLocale" class="h-full">
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
