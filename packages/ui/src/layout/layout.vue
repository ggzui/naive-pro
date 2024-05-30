<script setup lang="ts">
import { NLayout, NLayoutContent, NLayoutFooter, NLayoutHeader, NLayoutSider } from 'naive-ui'

defineOptions({ name: 'NpLayout' })
</script>

<template>
  <n-layout has-sider>
    <n-layout-sider>sider</n-layout-sider>

    <n-layout>
      <n-layout-header>header</n-layout-header>

      <n-layout-content><slot /></n-layout-content>

      <n-layout-footer>footer</n-layout-footer>
    </n-layout>
  </n-layout>
</template>
