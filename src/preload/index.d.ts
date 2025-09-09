import { ElectronAPI } from '@electron-toolkit/preload'

// 窗口控制API类型定义
interface WindowControlAPI {
  minimize: () => Promise<boolean>
  maximize: () => Promise<boolean>
  isMaximized: () => Promise<boolean>
  close: () => Promise<boolean>
  fullscreen: () => Promise<boolean>
}

// 自定义API类型定义
interface CustomAPI {
  windowControl: WindowControlAPI
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: CustomAPI
  }
}
