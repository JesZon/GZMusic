<template>
  <div class="WindowControl">
    <!-- 窗口控制按钮 -->

    <a-space size="small" class="window-control-btns">
      <div class="win-box" @click="SuspensionORFullScreen">
        <img v-if="props.oneType === 'main-page'" :src="ImagePath.suspensionIcon" alt="悬浮窗口" class="icon-but" />
        <img v-if="props.oneType === 'play-page'" :src="ImagePath.screenIcon" alt="全屏窗口" class="icon-but"
          style="width: 30px;height: 30px;" />
      </div>
      <div class="win-box" @click="handleMinimize">
        <img :src="ImagePath.minIcon" alt="最小化" class="icon-but" />
      </div>
      <div class="win-box" @click="handleMaximize">
        <img :src="ImagePath.maxIcon" alt="最大化" class="icon-but" />
      </div>
      <div class="win-box" @click="handleClose">
        <img :src="ImagePath.closeIcon" alt="关闭" class="icon-but" />
      </div>
    </a-space>

  </div>
</template>

<script lang="ts" setup name="WindowControl">
import { ref, onMounted } from 'vue'
// 窗口控制按钮
import { ImagePath } from '@renderer/utils/ImagePath'

const isMaximized = ref(false)

const props = defineProps({
  // 可以根据需要添加属性
  oneType: {
    type: String,
    default: 'main-page',
    validator: (value: string) => ['main-page', 'play-page'].includes(value)
  }
})

// 组件挂载时获取窗口状态
onMounted(() => {
  updateMaximizedState()
})

// 检查是否在Electron环境中
const isElectron = () => {
  return window.api && window.api.windowControl
}

// 获取当前窗口状态
const updateMaximizedState = async () => {
  if (!isElectron()) {
    console.warn('不在Electron环境中，窗口控制功能不可用')
    return
  }
  try {
    isMaximized.value = await window.api.windowControl.isMaximized()
  } catch (error) {
    console.error('获取窗口状态失败:', error)
  }
}

// 最小化窗口
const handleMinimize = async () => {
  if (!isElectron()) {
    console.warn('不在Electron环境中，无法最小化窗口')
    return
  }
  try {
    await window.api.windowControl.minimize()
  } catch (error) {
    console.error('最小化窗口失败:', error)
  }
}

// 最大化/还原窗口
const handleMaximize = async () => {
  if (!isElectron()) {
    console.warn('不在Electron环境中，无法切换窗口状态')
    return
  }
  try {
    const maximized = await window.api.windowControl.maximize()
    isMaximized.value = maximized
  } catch (error) {
    console.error('切换窗口状态失败:', error)
  }
}

// 关闭窗口
const handleClose = async () => {
  if (!isElectron()) {
    console.warn('不在Electron环境中，无法关闭窗口')
    return
  }
  try {
    await window.api.windowControl.close()
  } catch (error) {
    console.error('关闭窗口失败:', error)
  }
}

// 页面全屏
const SuspensionORFullScreen = async () => {
  if (!isElectron()) {
    console.warn('不在Electron环境中，无法最小化窗口')
    return
  }

  try {
    if (props.oneType === 'play-page') {
      await window.api.windowControl.fullscreen()
    }
  } catch (error) {
    console.error('窗口状态变化失败:', error)
  }

}
</script>

<style lang="scss" scoped>
.WindowControl {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
}

.window-control-btns {

  display: flex;
  justify-content: center;
  align-items: center;

  .win-box {
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-app-region: no-drag;
    width: 40px;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    user-select: none;

    .icon-but {
      width: 18px;
      height: 18px;
    }
  }
}
</style>