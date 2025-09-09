<template>
    <div class="MainFooter">
        <a-row class="grid-demo">
            <a-col flex="260px" class="grid-1">
                <a-space size="small" class="music-info">
                    <!-- 音乐图片 -->
                    <div class="music-img">
                        <img :src="ImagePath.zhiwoIcon" alt="知我">
                    </div>

                    <!-- 音乐名称及操作控件 -->
                    <a-space size="small" direction="vertical" class="music-control-name">

                        <div class="music-name">
                            知我 - 国风堂/哦漏
                        </div>

                        <a-space size="medium" class="music-control">
                            <svg t="1756824957754" class="icon" viewBox="0 0 1166 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="2500" width="20" height="20">
                                <path
                                    d="M882.058985 2.769416C863.503898 0.969296 845.641165 0 829.024669 0c-115.623117 0-184.166162 42.510535-246.201079 107.868752C512.341954 33.094521 431.751949-11.631547 283.588195 2.769416 158.964476 14.954846 17.170379 124.623718 0 336.345569v69.235399C13.84708 589.470188 142.486451 739.434063 507.495476 999.897634a129.331726 129.331726 0 0 0 150.379287 0c365.285966-261.017455 493.371454-410.981329 507.633946-594.870549v-69.235399C1148.476801 124.623718 1006.682703 14.954846 882.058985 2.769416z"
                                    fill="#9CA3AF" p-id="2501"></path>
                            </svg>

                            <svg t="1756825049142" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="2756" width="20" height="20">
                                <path
                                    d="M512 1024C229.180952 1024 0 794.819048 0 512S229.180952 0 512 0 1024 229.180952 1024 512 794.819048 1024 512 1024z m0-950.857143c-243.809524 0-438.857143 195.047619-438.857143 438.857143s195.047619 438.857143 438.857143 438.857143 438.857143-195.047619 438.857143-438.857143-195.047619-438.857143-438.857143-438.857143z"
                                    p-id="2757" fill="#9CA3AF"></path>
                                <path
                                    d="M277.942857 512m-58.514286 0a58.514286 58.514286 0 1 0 117.028572 0 58.514286 58.514286 0 1 0-117.028572 0Z"
                                    p-id="2758" fill="#9CA3AF"></path>
                                <path
                                    d="M512 512m-58.514286 0a58.514286 58.514286 0 1 0 117.028572 0 58.514286 58.514286 0 1 0-117.028572 0Z"
                                    p-id="2759" fill="#9CA3AF"></path>
                                <path
                                    d="M746.057143 512m-58.514286 0a58.514286 58.514286 0 1 0 117.028572 0 58.514286 58.514286 0 1 0-117.028572 0Z"
                                    p-id="2760" fill="#9CA3AF"></path>
                            </svg>

                            <svg t="1756825108950" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="3011" width="20" height="20">
                                <path
                                    d="M832 80a112 112 0 0 1 111.616 102.784L944 192v640a112 112 0 0 1-102.784 111.616L832 944H608a48 48 0 0 1-6.528-95.552l6.528-0.448H832a16 16 0 0 0 15.552-12.352L848 832V192a16 16 0 0 0-12.352-15.552L832 176H192a16 16 0 0 0-15.552 12.352L176 192v224a48 48 0 0 1-95.552 6.528L80 416V192a112 112 0 0 1 102.784-111.616L192 80h640z m-448 448c61.824 0 112 50.176 112 112v192A112 112 0 0 1 384 944H192A112 112 0 0 1 80 832v-192c0-61.824 50.176-112 112-112z m0 96H192a16 16 0 0 0-16 16v192c0 8.832 7.168 16 16 16h192a16 16 0 0 0 16-16v-192A16 16 0 0 0 384 624z"
                                    fill="#9CA3AF" p-id="3012"></path>
                            </svg>
                        </a-space>

                    </a-space>
                </a-space>
            </a-col>
            <a-col flex="auto" class="grid-2">
                <a-space :size="0" direction="vertical" class="music-play">
                    <!-- 播放控件 -->
                    <a-space size="medium" class="play-control">
                        <svg t="1756825995341" class="icon up" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="4234" width="20" height="20">
                            <path
                                d="M341.333333 937.244444c0 11.377778-11.377778 22.755556-22.755555 22.755556-5.688889 0-11.377778 0-11.377778-5.688889l-176.355556-147.911111c-5.688889-5.688889-5.688889-11.377778-5.688888-17.066667 0-11.377778 11.377778-22.755556 22.755555-22.755555h625.777778c45.511111 0 85.333333-39.822222 85.333333-85.333334v-341.333333h79.644445v341.333333c0 96.711111-73.955556 170.666667-170.666667 170.666667H341.333333v85.333333zM170.666667 339.911111v341.333333H85.333333v-341.333333c0-96.711111 73.955556-170.666667 170.666667-170.666667H682.666667v-79.644444c0-11.377778 11.377778-22.755556 22.755555-22.755556 5.688889 0 11.377778 0 11.377778 5.688889l176.355556 147.911111c5.688889 5.688889 5.688889 11.377778 5.688888 17.066667 0 11.377778-11.377778 22.755556-22.755555 22.755556H256c-45.511111-5.688889-85.333333 34.133333-85.333333 79.644444z"
                                fill="#9CA3AF" p-id="4235"></path>
                        </svg>

                        <svg t="1756826114074" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="4486" width="20" height="20">
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
                        <div v-if="!isPlaying" class="stop-open" @click="playMusic">
                            <svg t="1757426452119" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="3139" width="22" height="22">
                                <path
                                    d="M732.502883 465.602819c-107.883492-82.3454-215.772403-164.681769-323.652282-247.014525-38.414608-29.327534-93.780555-1.929039-93.780555 46.396277v494.029051c0 48.325316 55.365948 75.725617 93.780555 46.398084 107.87988-82.332757 215.76879-164.669126 323.652282-247.014525 30.61356-23.357989 30.61356-69.436372 0-92.794362z"
                                    fill="#231815" p-id="3140"></path>
                            </svg>
                        </div>


                        <svg t="1756826230749" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2304" width="20" height="20">
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
                        <div class="slider">
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
            </a-col>
            <a-col flex="150px" class="grid-3">
                <a-space size="medium" class="music-operation">
                    <svg t="1756825569918" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="3263" width="22" height="22">
                        <path
                            d="M800 1024h-576C100.48 1024 0 923.52 0 800v-576C0 100.48 100.48 0 224 0h576C923.52 0 1024 100.48 1024 224v576c0 123.52-100.48 224-224 224z m-576-960A160 160 0 0 0 64 224v576A160 160 0 0 0 224 960h576a160 160 0 0 0 160-160v-576A160 160 0 0 0 800 64h-576z"
                            fill="#9CA3AF" p-id="3264"></path>
                        <path
                            d="M425.6 635.52c4.48 17.92 13.44 44.8 19.84 56.96C320 784.64 300.16 800.64 288 815.36c-6.4-12.8-26.24-35.2-37.12-45.44 15.36-12.16 40.32-40.32 40.32-77.44V457.6H192v-64h163.84v291.2l69.76-49.28zM343.04 344.32c-22.4-30.72-71.68-78.08-110.72-111.36L275.2 192c38.4 31.36 90.24 75.52 113.92 105.6l-46.08 46.72zM832 750.72c0 39.04-8.96 58.24-33.28 69.12-24.96 11.52-65.28 12.16-125.44 12.16-3.2-17.28-12.16-48.64-23.04-65.92 42.88 1.92 86.4 1.28 99.2 0.64 12.16 0 16.64-4.48 16.64-16.64V268.8h-339.2v-61.44H832v543.36z m-110.72-364.16H443.52v-56.96h277.12v56.96z m-191.36 293.76v46.08h-60.8V450.56h221.44v229.76H529.92z m0-172.8v116.48h100.48V507.52H529.92z"
                            fill="#9CA3AF" p-id="3265"></path>
                    </svg>

                    <svg t="1756825628238" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="3516" width="22" height="22">
                        <path
                            d="M977.55 140.13c25.71 0 46.55 20.82 46.55 46.5s-20.84 46.5-46.55 46.5h-512c-25.71 0-46.55-20.82-46.55-46.5s20.84-46.5 46.55-46.5h512z m0 325.5c25.71 0 46.55 20.82 46.55 46.5s-20.84 46.5-46.55 46.5H651.74c-25.71 0-46.55-20.82-46.55-46.5s20.84-46.5 46.55-46.5h325.81zM87.69 241.68c12.26 7.26 242.97 144.96 257.53 153.69 16.97 10.11 27.14 27.58 27.24 46.72 0.1 19.24-9.96 36.9-26.93 47.21-5.5 3.36-58.86 35.31-115.82 69.34l-22.87 13.66c-57.13 34.12-111.95 66.78-120.2 71.47-9.22 5.2-19.49 7.85-29.76 7.85-9.43 0-18.86-2.26-27.35-6.67C11.1 635.24 0.1 617.18 0.1 596.57V288.69c0-20.71 11.63-39.55 30.28-49.17 17.91-9.22 39.39-8.44 57.31 2.16z m889.86 549.45c25.71 0 46.55 20.82 46.55 46.5s-20.84 46.5-46.55 46.5H46.64c-25.71 0-46.55-20.82-46.55-46.5s20.84-46.5 46.55-46.5h930.91z"
                            fill="#9CA3AF" p-id="3517"></path>
                    </svg>
                </a-space>
            </a-col>
        </a-row>
    </div>
</template>

<script lang="ts" setup name="MainFooter">
import { ref, onMounted, onUnmounted } from 'vue'
import { Howl } from 'howler';

// 图片导入
import { ImagePath } from '@renderer/utils/ImagePath'

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

// 格式化时间显示
const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
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

// 根据鼠标位置计算进度
const calculateProgress = (event: MouseEvent): number => {
    if (!sliderRef.value) return 0

    const rect = sliderRef.value.getBoundingClientRect()
    const x = event.clientX - rect.left
    const progress = Math.max(0, Math.min(1, x / rect.width))
    return progress
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

// 点击进度条事件
const handleSliderClick = (event: MouseEvent) => {
    if (isDragging.value) return

    const progress = calculateProgress(event)
    updateProgress(progress)
}

// 组件挂载
onMounted(() => {
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
    })
})
/* ====================================================================================================================== */

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

onMounted(() => {
    sound.value = new Howl({
        src: [ImagePath.musicFile.zhiwo],
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
    })
})

const playMusic = () => {
    if (sound.value) {
        sound.value.play()
        isPlaying.value = true
        startProgressUpdate()
    }
}

const stopMusic = () => {
    if (sound.value) {
        sound.value.pause()
        isPlaying.value = false
        stopProgressUpdate()
    }
}


</script>

<style lang="scss" scoped>
.MainFooter {
    height: 100%;
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
}

.grid-1 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: var(--gz-element-footer-height);
    padding-left: 10px;

    .music-info {
        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;
        height: 100%;

        .music-img {
            width: 66px;
            height: 66px;
            border-radius: var(--gz-element-round-radian1);
            overflow: hidden;
            flex-shrink: 0;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: inherit;
            }
        }

        .music-control-name {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 4px;
            flex: 1;
            min-width: 0;

            .music-name {
                font-size: 15px;
                font-weight: 500;
                line-height: 1;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100%;
                user-select: none;
            }

            .music-control {
                font-size: 12px;
                line-height: 1;

                .icon {
                    cursor: pointer;
                    user-select: none;
                }
            }
        }
    }
}

.grid-2 {

    display: flex;
    align-items: center;
    height: var(--gz-element-footer-height);

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
                height: 26px;
                line-height: 26px;
                border-radius: 13px;
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
                width: 40vw;
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
}

.grid-3 {

    display: flex;
    align-items: center;
    height: var(--gz-element-footer-height);

    .music-operation {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 10px;
        width: 100%;
        height: 100%;
        // background-color: yellow;
        margin-right: 20px;
    }

}
</style>
