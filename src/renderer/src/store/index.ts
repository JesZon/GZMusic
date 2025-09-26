// Pinia状态管理主入口文件
import { createPinia } from 'pinia'
import type { App } from 'vue'

//引入持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 创建pinia实例
const pinia = createPinia()

// 使用持久化插件
pinia.use(piniaPluginPersistedstate)

// 安装pinia插件的函数
export function setupStore(app: App) {
  app.use(pinia)
}