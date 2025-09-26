import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

import * as musicType from "@renderer/store/musicType"


export const useMusicPlayStore = defineStore('musicPlay', () => {
    // ======================== satate ========================
    // 播放状态 - 用于控制播放/暂停按钮的显示
    const playStatus = ref<boolean>(false)

    // 当前播放的音乐 - 用于显示当前播放的音乐的相关信息
    const currentMusic = ref<musicType.MusicItem | null>(null)

    // 当前播放的音乐的时长 - 用于显示当前播放的音乐的时长
    const musicDuration = ref<number>(0)

    // 当前音乐总时长
    const totalDuration = ref<number>(0)

    // 当前播放的音乐的进度 - 用于显示当前播放的音乐的进度
    const musicProgress = ref<number>(0)

    // 是否正在被拖拽
    const isDragging = ref<boolean>(false)

    return {
        // state
        playStatus,
        currentMusic,
        musicDuration,
        totalDuration,
        musicProgress,
        isDragging
    }
}, {
    persist: {
        key: 'musicPlay', // 存储的 key
        storage: localStorage // 存储方式
    }
})