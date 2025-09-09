import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  // 窗口控制API
  windowControl: {
    // 最小化窗口
    minimize: () => ipcRenderer.invoke('window-minimize'),
    // 最大化/还原窗口
    maximize: () => ipcRenderer.invoke('window-maximize'),
    // 获取窗口最大化状态
    isMaximized: () => ipcRenderer.invoke('window-is-maximized'),
    // 关闭窗口
    close: () => ipcRenderer.invoke('window-close'),
    // 页面全屏
    fullscreen: () => ipcRenderer.invoke('window-fullscreen')
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
