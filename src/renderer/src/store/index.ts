// Pinia状态管理主入口文件
import { createPinia } from 'pinia'
import type { App } from 'vue'

// 创建pinia实例
const pinia = createPinia()

// 安装pinia插件的函数
export function setupStore(app: App) {
  app.use(pinia)
}

// 导出pinia实例
export { pinia }

// 导出所有store模块
export { useMusicSearchStore } from '@renderer/store/modules/musicSearch'
// export type { MusicSearchStore, SearchStatus, SearchCache, MusicItem } from '@renderer/store/modules/musicSearch'

// 默认导出pinia实例
export default pinia