<template>
    <a-space :size="0" direction="vertical" class="music-play">
        <!-- 播放控件 -->
        <a-space size="medium" class="play-control">
            <svg t="1756825995341" class="icon up" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="4234" width="20" height="20">
                <path
                    d="M341.333333 937.244444c0 11.377778-11.377778 22.755556-22.755555 22.755556-5.688889 0-11.377778 0-11.377778-5.688889l-176.355556-147.911111c-5.688889-5.688889-5.688889-11.377778-5.688888-17.066667 0-11.377778 11.377778-22.755556 22.755555-22.755555h625.777778c45.511111 0 85.333333-39.822222 85.333333-85.333334v-341.333333h79.644445v341.333333c0 96.711111-73.955556 170.666667-170.666667 170.666667H341.333333v85.333333zM170.666667 339.911111v341.333333H85.333333v-341.333333c0-96.711111 73.955556-170.666667 170.666667-170.666667H682.666667v-79.644444c0-11.377778 11.377778-22.755556 22.755555-22.755556 5.688889 0 11.377778 0 11.377778 5.688889l176.355556 147.911111c5.688889 5.688889 5.688889 11.377778 5.688888 17.066667 0 11.377778-11.377778 22.755556-22.755555 22.755556H256c-45.511111-5.688889-85.333333 34.133333-85.333333 79.644444z"
                    fill="#9CA3AF" p-id="4235"></path>
            </svg>

            <svg t="1756826114074" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="4486" width="20" height="20">
                <path
                    d="M364.302083 465.602819L687.954365 218.588294c38.416414-29.327534 93.791393-1.929039 93.791392 46.396277v494.029051c0 48.325316-55.374979 75.725617-93.791392 46.398084L364.302083 558.397181c-30.600916-23.357989-30.600916-69.436372 0-92.794362zM238.945254 780.798397V451.684117v-164.562559c0-19.628152-5.904521-60.475733 17.057907-75.841215 25.523642-17.068744 59.747828 1.210165 59.747828 31.919454v493.676839c0 19.628152 5.915358 60.473927-17.047069 75.841215-25.53448 17.068744-59.758666-1.211971-59.758666-31.919454z"
                    fill="#9CA3AF" p-id="4487"></path>
            </svg>

            <div v-if="isPlaying" class="stop-open" @click="stopMusic">
                <svg t="1756826815742" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="2721" width="20" height="20">
                    <path
                        d="M432 176v672c0 26.5-21.5 48-48 48H224c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48zM848 176v672c0 26.5-21.5 48-48 48H640c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48z"
                        p-id="2722" fill="#000000"></path>
                </svg>
            </div>
            <div v-if="!isPlaying" class="stop-open" @click="playMusic(ImagePath.musicFile.zhiwo)">
                <svg t="1757426452119" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="3139" width="22" height="22">
                    <path
                        d="M732.502883 465.602819c-107.883492-82.3454-215.772403-164.681769-323.652282-247.014525-38.414608-29.327534-93.780555-1.929039-93.780555 46.396277v494.029051c0 48.325316 55.365948 75.725617 93.780555 46.398084 107.87988-82.332757 215.76879-164.669126 323.652282-247.014525 30.61356-23.357989 30.61356-69.436372 0-92.794362z"
                        fill="#231815" p-id="3140"></path>
                </svg>
            </div>


            <svg t="1756826230749" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="2304" width="20" height="20">
                <path
                    d="M659.697917 558.397181L336.045635 805.411706c-38.416414 29.327534-93.791393 1.929039-93.791392-46.39627701l0-494.02905099c0-48.325316 55.374979-75.725617 93.791392-46.398084L659.697917 465.602819c30.600916 23.357989 30.600916 69.436372 0 92.794362zM785.054746 243.201603L785.054746 572.315883l0 164.562559c0 19.628152 5.904521 60.475733-17.057907 75.841215-25.523642 17.068744-59.747828-1.210165-59.74782801-31.919454l1e-8-493.67683901c0-19.628152-5.915358-60.473927 17.047069-75.84121499 25.53448-17.068744 59.758666 1.211971 59.758666 31.919454z"
                    fill="#9CA3AF" p-id="2305"></path>
            </svg>

            <svg t="1756826255378" class="icon next" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="2464" width="20" height="20">
                <path
                    d="M636.7 896.742c-20.6 0-37.3-16.7-37.3-37.3v-612.6c0-24.9-20.2-45.1-45.1-45.1-6.4 0-12.6 1.3-18.4 3.9l-229 102.5c-31.1 13.9-64.1 21-98.3 21h-39c-52.3 0-94.9 42.6-94.9 94.9v160.8c0 51.7 42.1 93.8 93.8 93.8h39.9c34.2 0 67.4 7.1 98.7 21.2l167.2 75.3c18.8 8.4 27.1 30.5 18.7 49.3-8.4 18.8-30.6 27.1-49.3 18.7l-167.2-75.3c-21.5-9.7-44.5-14.6-68.1-14.6h-40c-92.9 0-168.4-75.5-168.4-168.4v-160.8c0-93.5 76-169.5 169.5-169.5h39c23.5 0 46.3-4.9 67.8-14.5l229-102.5c15.4-6.9 31.9-10.4 48.8-10.4 66 0 119.7 53.7 119.7 119.7v612.6c0.2 20.6-16.5 37.3-37.1 37.3zM773.2 681.942c-9.5 0-19.1-3.6-26.4-10.9-14.6-14.6-14.6-38.2 0-52.7 61.7-61.7 61.7-162.2 0-223.9-14.6-14.6-14.6-38.2 0-52.7 14.6-14.6 38.2-14.6 52.7 0 90.8 90.8 90.8 238.5 0 329.3a37.1 37.1 0 0 1-26.3 10.9z"
                    fill="#9CA3AF" p-id="2465"></path>
                <path
                    d="M883.9 792.642c-9.5 0-19.1-3.6-26.4-10.9-14.6-14.6-14.6-38.2 0-52.7l0.6-0.6c59.1-59.4 91.7-138.3 91.7-222.1 0-84.1-32.8-163.2-92.3-222.6-14.6-14.5-14.6-38.2 0-52.7 14.5-14.6 38.2-14.6 52.7 0 151.9 151.8 151.9 398.9 0.1 550.8-0.8 0.9-1.7 1.7-2.7 2.4-6.8 5.6-15.3 8.4-23.7 8.4z m0-37.3h0.1-0.1z"
                    fill="#9CA3AF" p-id="2466"></path>
            </svg>
        </a-space>

        <!-- 播放进度条 -->
        <div class="play-progress">
            <!-- 进度时间 -->
            <div class="time time-current">
                <span>{{ timeCurrentRef }}</span>
            </div>

            <!-- 进度条 -->
            <div class="slider" :style="{ width: props.playLine }">
                <!-- 已播放部分 -->
                <div class="slider-played"></div>

                <!-- 进度位置 -->
                <div class="slider-played-position"></div>
            </div>

            <!-- 总时间 -->
            <div class="time time-total">
                <span>{{ timeTotalRef }}</span>
            </div>
        </div>
    </a-space>
</template>

<script lang="ts" setup name="PlayMusic">
// 后台控件，音乐播放控件
import { ref, onMounted, onUnmounted } from 'vue'
import { Howl } from 'howler';

// 音频导入
import { ImagePath } from '@renderer/utils/ImagePath'

// 全局通讯
import emitter from "@renderer/utils/emitter";

const props = defineProps({
    playLine: {
        type: String,
        default: '40vh'
    }
})

/* ====================================================================================================================== */
// 进度条相关状态
const currentTime = ref(0) // 当前播放时间（秒）
const totalTime = ref(0) // 总时长（秒）
const isDragging = ref(false) // 是否正在拖拽
const animationId = ref<number | null>(null)
const progressUpdateTimer = ref<ReturnType<typeof setInterval> | null>(null)

// DOM引用
const sliderRef = ref<HTMLElement | null>(null)
const sliderPlayedRef = ref<HTMLElement | null>(null)
const sliderPositionRef = ref<HTMLElement | null>(null)
const timeCurrentRef = ref<HTMLElement | null>(null)
const timeTotalRef = ref<HTMLElement | null>(null)

// 播放控件
const sound = ref<Howl | null>(null);
const isPlaying = ref(false);

onMounted(() => {
    // sound.value = new Howl({
    //     src: [ImagePath.musicFile.zhiwo],
    //     onload: function () {
    //         // 获取音频时长并更新总时长
    //         const duration = sound.value?.duration() || 0
    //         totalTime.value = duration
    //         console.log('音频时长：' + duration + ' 秒')
    //         updateProgressDisplay()
    //     },
    //     onplay: function () {
    //         startProgressUpdate()
    //     },
    //     onpause: function () {
    //         stopProgressUpdate()
    //     },
    //     onstop: function () {
    //         stopProgressUpdate()
    //         currentTime.value = 0
    //         updateProgressDisplay()
    //     },
    //     onend: function () {
    //         stopProgressUpdate()
    //         isPlaying.value = false
    //         currentTime.value = 0
    //         updateProgressDisplay()
    //     }
    // });
    // 获取DOM引用

    const playProgressEl = document.querySelector('.play-progress')
    if (playProgressEl) {
        sliderRef.value = playProgressEl.querySelector('.slider') as HTMLElement
        sliderPlayedRef.value = playProgressEl.querySelector('.slider-played') as HTMLElement
        sliderPositionRef.value = playProgressEl.querySelector('.slider-played-position') as HTMLElement
        timeCurrentRef.value = playProgressEl.querySelector('.time-current span') as HTMLElement
        timeTotalRef.value = playProgressEl.querySelector('.time-total span') as HTMLElement
    }

    // 绑定事件
    if (sliderRef.value) {
        sliderRef.value.addEventListener('mousedown', handleMouseDown)
        sliderRef.value.addEventListener('click', handleSliderClick)
    }

    // 初始化显示
    updateProgressDisplay()

    // 注册全局事件 =========================
    emitter.on("playMusic", playMusic)
    emitter.on("stopMusic", stopMusic)
})

// 保存定时器引用以便清理
onUnmounted(() => {
    stopProgressUpdate()
    if (animationId.value) {
        cancelAnimationFrame(animationId.value)
    }
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)

    // 清理音频资源
    if (sound.value) {
        sound.value.unload()
    }

    // 清理全局事件 =========================
    emitter.off("playMusic", playMusic)
    emitter.off("stopMusic", stopMusic)
})

// 点击进度条事件
const handleSliderClick = (event: MouseEvent) => {
    if (isDragging.value) return

    const progress = calculateProgress(event)
    updateProgress(progress)
}

// 鼠标按下事件
const handleMouseDown = (event: MouseEvent) => {
    event.preventDefault()
    isDragging.value = true

    // 添加拖拽状态CSS类
    if (sliderRef.value) {
        sliderRef.value.classList.add('dragging')
    }

    const progress = calculateProgress(event)
    updateProgress(progress)

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
}

// 鼠标移动事件
const handleMouseMove = (event: MouseEvent) => {
    if (!isDragging.value) return

    event.preventDefault()
    const progress = calculateProgress(event)
    updateProgress(progress)
}

// 鼠标释放事件
const handleMouseUp = () => {
    isDragging.value = false

    // 移除拖拽状态CSS类
    if (sliderRef.value) {
        sliderRef.value.classList.remove('dragging')
    }

    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
}

// 更新播放进度
const updateProgress = (progress: number) => {
    const newTime = progress * totalTime.value
    currentTime.value = newTime

    // 如果音频已加载，跳转到指定位置
    if (sound.value && sound.value.state() === 'loaded') {
        sound.value.seek(newTime)
    }

    updateProgressDisplay()
}

// 根据鼠标位置计算进度
const calculateProgress = (event: MouseEvent): number => {
    if (!sliderRef.value) return 0

    const rect = sliderRef.value.getBoundingClientRect()
    const x = event.clientX - rect.left
    const progress = Math.max(0, Math.min(1, x / rect.width))
    return progress
}

// 格式化时间显示
const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

// 播放音乐，结束时清理
const playMusic = (music_src: string) => {
    console.log('播放音乐：' + music_src)

    sound.value = new Howl({
        src: [music_src],
        onload: function () {
            // 获取音频时长并更新总时长
            const duration = sound.value?.duration() || 0
            totalTime.value = duration
            console.log('音频时长：' + duration + ' 秒')
            updateProgressDisplay()
        },
        onplay: function () {
            startProgressUpdate()
        },
        onpause: function () {
            stopProgressUpdate()
        },
        onstop: function () {
            stopProgressUpdate()
            currentTime.value = 0
            updateProgressDisplay()
        },
        onend: function () {
            stopProgressUpdate()
            isPlaying.value = false
            currentTime.value = 0
            updateProgressDisplay()
        }
    });

    if (sound.value) {
        sound.value.play()
        isPlaying.value = true
        startProgressUpdate()
    }
}

// 停止音乐，结束时清理
const stopMusic = () => {
    if (sound.value) {
        sound.value.pause()
        isPlaying.value = false
        stopProgressUpdate()
    }
}

// 更新进度条显示
const updateProgressDisplay = () => {
    if (!sliderRef.value || !sliderPlayedRef.value || !sliderPositionRef.value) return

    const progress = totalTime.value > 0 ? (currentTime.value / totalTime.value) * 100 : 0

    // 使用requestAnimationFrame确保流畅更新
    if (animationId.value) {
        cancelAnimationFrame(animationId.value)
    }

    animationId.value = requestAnimationFrame(() => {
        if (sliderPlayedRef.value && sliderPositionRef.value) {
            // 精确控制进度条宽度和位置
            const clampedProgress = Math.max(0, Math.min(100, progress))
            sliderPlayedRef.value.style.width = `${clampedProgress}%`
            sliderPositionRef.value.style.left = `${clampedProgress}%`
        }

        // 更新时间显示，确保毫秒级精度
        if (timeCurrentRef.value) {
            timeCurrentRef.value.textContent = formatTime(Math.round(currentTime.value * 10) / 10)
        }
        if (timeTotalRef.value) {
            timeTotalRef.value.textContent = formatTime(totalTime.value)
        }
    })
}

// 实时更新播放进度
const startProgressUpdate = () => {
    if (progressUpdateTimer.value) {
        clearInterval(progressUpdateTimer.value)
    }

    progressUpdateTimer.value = setInterval(() => {
        if (sound.value && isPlaying.value && !isDragging.value) {
            const seek = sound.value.seek() || 0
            currentTime.value = typeof seek === 'number' ? seek : 0
            updateProgressDisplay()

            // 检查是否播放结束
            if (currentTime.value >= totalTime.value && totalTime.value > 0) {
                stopMusic()
            }
        }
    }, 100)
}

// 停止进度更新
const stopProgressUpdate = () => {
    if (progressUpdateTimer.value) {
        clearInterval(progressUpdateTimer.value)
        progressUpdateTimer.value = null
    }
}


</script>

<style lang="scss" scoped>
.music-play {
    width: 100%;
    display: flex;
    align-items: center;

    .play-control {

        .icon {
            user-select: none;
            cursor: pointer;
        }

        .up {
            margin-right: 13px;
        }

        .stop-open {
            user-select: none;
            cursor: pointer;
            width: 50px;
            height: 28px;
            line-height: 28px;
            border-radius: 14px;
            background-color: #2AB653;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .next {
            margin-left: 13px;
        }
    }

    .play-progress {
        width: 100%;
        height: 5px;
        display: flex;
        justify-content: center;
        align-items: center;

        .slider {
            position: relative;
            height: 3px;
            background-color: #D9D9D9;
            cursor: pointer;
            border-radius: 1.5px;
            transition: height 0.2s ease;

            .slider-played {
                position: absolute;
                top: 0;
                left: 0;
                width: 0%;
                height: 100%;
                background-color: #2AB653;
                border-radius: 1px;
                transition: width 0.1s ease;
            }

            .slider-played-position {
                position: absolute;
                top: 50%;
                left: 0%;
                width: 8px;
                height: 8px;
                background-color: #2AB653;
                border-radius: 50%;
                transform: translate(-50%, -50%);
                opacity: 0;
                transition: opacity 0.2s ease, transform 0.1s ease;
                cursor: grab;

                &:active {
                    cursor: grabbing;
                    transform: translate(-50%, -50%) scale(1.2);
                }
            }

            &:hover .slider-played-position {
                opacity: 1;
            }

            &.dragging {
                .slider-played-position {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1.1);
                }
            }
        }


        .time {
            font-size: 10px;
            color: #9CA3AF;
            line-height: 1;
        }

        .time-current {
            margin-right: 10px;
        }

        .time-total {
            margin-left: 10px;
        }
    }

}
</style>
