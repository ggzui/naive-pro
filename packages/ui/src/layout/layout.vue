<script setup lang="ts">
import { NLayout, NLayoutContent, NLayoutFooter, NLayoutHeader, NLayoutSider } from 'naive-ui'
import { useAppStore } from '@naive-pro/store'

defineOptions({ name: 'NpLayout' })

const appStore = useAppStore()
</script>

<template>
  <n-layout has-sider position="absolute">
    <n-layout-sider bordered :width="appStore.siderWidth" :collapsed-width="appStore.siderCollapsedWidth" show-trigger="arrow-circle" collapse-mode="width">
      sider
    </n-layout-sider>

    <n-layout>
      <n-layout-header bordered :style="{ height: `${appStore.headerHight}px` }">
        header
      </n-layout-header>

      <n-layout-content content-style="padding: 24px;" :style="{ minHeight: `calc(100vh - ${appStore.headerHight}px - ${appStore.footerHight}px)` }">
        <slot />
      </n-layout-content>

      <n-layout-footer bordered :style="{ height: `${appStore.footerHight}px` }">
        footer
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>
