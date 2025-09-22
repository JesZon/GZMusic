import { defineStore } from 'pinia'
import { ref, computed } from 'vue'


export const useMusicPlayStore = defineStore('musicPlay', () => {
    // ======================== satate ========================
    // 播放状态 - 用于控制播放/暂停按钮的显示
    const playStatus = ref<boolean>(false)

    // 当前播放的音乐 - 用于显示当前播放的音乐的相关信息
    const currentMusic = ref<string | null>(null)

    // 当前播放的音乐的时长 - 用于显示当前播放的音乐的时长
    const musicDuration = ref<string>('00:00')

    // 当前播放的音乐的进度 - 用于显示当前播放的音乐的进度
    const musicProgress = ref<number>(0)

})