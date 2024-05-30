/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />
/// <reference types="vite-plugin-vue-layouts/client" />
/// <reference types="@intlify/unplugin-vue-i18n/messages" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_SHORT_NAME: string
  readonly VITE_USE_MOCK: boolean
  readonly VITE_USE_VISUALIZER: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare interface Window {
  /** Loading bar instance */
  $loadingBar?: import('naive-ui').LoadingBarProviderInst
  /** Dialog instance */
  $dialog?: import('naive-ui').DialogProviderInst
  /** Message instance */
  $message?: import('naive-ui').MessageProviderInst
  /** Notification instance */
  $notification?: import('naive-ui').NotificationProviderInst
}

interface ThemeSetting {
  themeScheme: import('./union').ThemeScheme
  primaryColor: string
  otherColor: {
    success: string
    warning: string
    error: string
    info: string
  }
}
