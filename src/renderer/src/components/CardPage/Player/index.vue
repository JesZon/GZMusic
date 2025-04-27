<template>
    <div class="card">
        <div class="test-button" :class="{ 'active': RetrievingReleasing }" @click="setRR">
            <span class="test-icon"></span>
            <span class="test-text">
                {{ RetrievingReleasing ? '收起' : '展开' }}
            </span>
        </div>
        <img src="./astronaut.png" alt="" class="image" />
        <div class="heading">
            <div v-if="RetrievingReleasing">
                知我 - 未知歌手
            </div>
            <div v-else class="scroll-text">
                知我 - 未知歌手
            </div>
        </div>
        <div v-if="RetrievingReleasing" class="icons">
            <div class="progress-container">
                <span class="time-display" style="margin-right: 0.1rem;">0: 00</span>
                <a-slider :default-value="50" :style="{ width: '150px' }" :show-tooltip="false" />
                <span class="time-display" style="margin-left: 0.1rem;">1: 40</span>
            </div>
        </div>
        <div v-else>
            <a-space size="medium" class="mini-progress">
                <icon-backward class="prev-type" />
                <icon-forward class="prev-type" />
            </a-space>
        </div>

        <div v-if="RetrievingReleasing" class="controls">
            <div @click="changePlayType()" style="padding-top: 4px;">
                <svg v-if="getPlayType === 'cycle'" t="1745137800320" class="prev-type" viewBox="0 0 1024 1024"
                    version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M694.4 854.4H195.2l48 44.8c9.6 6.4 16 16 16 28.8-3.2 19.2-19.2 32-38.4 32-9.6 0-22.4-6.4-28.8-12.8l-108.8-96c-12.8-12.8-16-35.2 0-48L192 704c6.4-6.4 19.2-9.6 28.8-9.6 19.2 0 35.2 16 35.2 35.2 0 9.6-6.4 19.2-12.8 25.6l-41.6 38.4h496c112 0 198.4-89.6 198.4-198.4v-86.4c0-19.2 12.8-32 32-32s32 12.8 32 32v86.4c0 140.8-118.4 259.2-265.6 259.2zM329.6 169.6h496l-48-44.8c-9.6-6.4-16-16-16-28.8 3.2-19.2 19.2-32 38.4-32 9.6 0 22.4 6.4 28.8 12.8l108.8 96c12.8 12.8 16 35.2 0 48L832 320c-6.4 6.4-19.2 9.6-28.8 9.6-19.2 0-35.2-16-35.2-35.2 0-9.6 6.4-19.2 12.8-25.6l41.6-38.4H326.4C217.6 233.6 128 323.2 128 435.2v89.6c0 19.2-12.8 32-32 32s-32-12.8-32-32v-86.4C64 288 182.4 169.6 329.6 169.6z"
                        p-id="1875" fill="#f9f9fb"></path>
                </svg>
                <svg v-if="getPlayType === 'single'" t="1745137903841" class="prev-type" viewBox="0 0 1024 1024"
                    version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2036">
                    <path
                        d="M928 476.8c-19.2 0-32 12.8-32 32v86.4c0 108.8-86.4 198.4-198.4 198.4H201.6l41.6-38.4c6.4-6.4 12.8-16 12.8-25.6 0-19.2-16-35.2-35.2-35.2-9.6 0-22.4 3.2-28.8 9.6l-108.8 99.2c-16 12.8-12.8 35.2 0 48l108.8 96c6.4 6.4 19.2 12.8 28.8 12.8 19.2 0 35.2-12.8 38.4-32 0-12.8-6.4-22.4-16-28.8l-48-44.8h499.2c147.2 0 265.6-118.4 265.6-259.2v-86.4c0-19.2-12.8-32-32-32zM96 556.8c19.2 0 32-12.8 32-32v-89.6c0-112 89.6-201.6 198.4-204.8h496l-41.6 38.4c-6.4 6.4-12.8 16-12.8 25.6 0 19.2 16 35.2 35.2 35.2 9.6 0 22.4-3.2 28.8-9.6l105.6-99.2c16-12.8 12.8-35.2 0-48l-108.8-96c-6.4-6.4-19.2-12.8-28.8-12.8-19.2 0-35.2 12.8-38.4 32 0 12.8 6.4 22.4 16 28.8l48 44.8H329.6C182.4 169.6 64 288 64 438.4v86.4c0 19.2 12.8 32 32 32z"
                        p-id="2037" fill="#f9f9fb"></path>
                    <path d="M544 672V352h-48L416 409.6l16 41.6 60.8-41.6V672z" p-id="2038" fill="#f9f9fb"></path>
                </svg>
                <svg v-if="getPlayType === 'random'" t="1745137982545" class="prev-type" viewBox="0 0 1024 1024"
                    version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2199">
                    <path
                        d="M844.8 665.6c-6.4-6.4-16-12.8-25.6-9.6-19.2 0-35.2 16-35.2 35.2 0 9.6 6.4 19.2 12.8 25.6l41.6 41.6c-44.8-6.4-86.4-22.4-121.6-51.2-3.2 0-3.2-3.2-6.4-6.4L332.8 304C268.8 233.6 192 195.2 99.2 195.2c-19.2 0-35.2 16-35.2 35.2s16 32 35.2 32c73.6 0 134.4 32 182.4 86.4l384 400 6.4 6.4c48 38.4 108.8 64 172.8 70.4l-48 44.8c-9.6 6.4-16 19.2-16 28.8 0 19.2 19.2 35.2 38.4 32 9.6 0 19.2-6.4 25.6-12.8l99.2-92.8c16-16 16-41.6 0-57.6l-99.2-102.4z m-3.2-556.8c-12.8-16-32-19.2-48-6.4-9.6 6.4-12.8 16-12.8 25.6 0 12.8 3.2 22.4 16 28.8l41.6 41.6c-73.6 9.6-140.8 38.4-192 89.6l-115.2 118.4c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 16 9.6 25.6 9.6s19.2-3.2 25.6-9.6l112-118.4c41.6-38.4 92.8-64 147.2-70.4l-44.8 44.8c-6.4 6.4-12.8 16-12.8 25.6 0 19.2 16 35.2 32 35.2 9.6 0 19.2-3.2 28.8-9.6L950.4 256c12.8-12.8 12.8-35.2 0-48l-108.8-99.2m-438.4 448c-9.6 0-19.2 3.2-25.6 9.6l-118.4 121.6c-48 44.8-96 67.2-160 67.2H96c-19.2 0-35.2 16-35.2 35.2s16 32 35.2 32h3.2c83.2 0 147.2-32 211.2-86.4l121.6-124.8c6.4-6.4 9.6-12.8 9.6-22.4 0-9.6-3.2-16-9.6-22.4-9.6-6.4-19.2-9.6-28.8-9.6z"
                        p-id="2200" fill="#f9f9fb"></path>
                </svg>
            </div>

            <svg class="prev-btn" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" @click="prevTrack">
                <path d="M19 20L9 12L19 4V20Z" fill="#f9f9fb" />
                <path d="M7 4H5V20H7V4Z" fill="#f9f9fb" />
            </svg>
            <svg v-if="!isPlaying" class="play-btn" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                @click="togglePlay">
                <path d="M8 5V19L19 12L8 5Z" fill="#f9f9fb" />
            </svg>
            <svg v-else class="pause-btn" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                @click="togglePlay">
                <path d="M6 4H10V20H6V4Z" fill="#f9f9fb" />
                <path d="M14 4H18V20H14V4Z" fill="#f9f9fb" />
            </svg>
            <svg class="next-btn" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" @click="nextTrack">
                <path d="M5 4L15 12L5 20V4Z" fill="#f9f9fb" />
                <path d="M19 4H17V20H19V4Z" fill="#f9f9fb" />
            </svg>
            <div class="volume-control">
                <icon-sound-fill class="volume-icon" :size="24" />
            </div>
        </div>
        <template v-else>
            <a-space size="mini" class="controls" direction="vertical">
                <a-space size="large" class="controls">
                    <icon-skip-previous-fill class="prev-type" />
                    <icon-skip-next-fill class="prev-type" />
                </a-space>
                <div @click="togglePlay">
                    <icon-pause v-if="isPlaying" class="prev-type" />
                    <icon-play-arrow v-else class="prev-type" />
                </div>
                <a-space size="large" class="controls">
                    <div @click="changePlayType()" style="padding-top: 4px;">
                        <svg v-if="getPlayType === 'cycle'" t="1745137800320" class="prev-type-mini"
                            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M694.4 854.4H195.2l48 44.8c9.6 6.4 16 16 16 28.8-3.2 19.2-19.2 32-38.4 32-9.6 0-22.4-6.4-28.8-12.8l-108.8-96c-12.8-12.8-16-35.2 0-48L192 704c6.4-6.4 19.2-9.6 28.8-9.6 19.2 0 35.2 16 35.2 35.2 0 9.6-6.4 19.2-12.8 25.6l-41.6 38.4h496c112 0 198.4-89.6 198.4-198.4v-86.4c0-19.2 12.8-32 32-32s32 12.8 32 32v86.4c0 140.8-118.4 259.2-265.6 259.2zM329.6 169.6h496l-48-44.8c-9.6-6.4-16-16-16-28.8 3.2-19.2 19.2-32 38.4-32 9.6 0 22.4 6.4 28.8 12.8l108.8 96c12.8 12.8 16 35.2 0 48L832 320c-6.4 6.4-19.2 9.6-28.8 9.6-19.2 0-35.2-16-35.2-35.2 0-9.6 6.4-19.2 12.8-25.6l41.6-38.4H326.4C217.6 233.6 128 323.2 128 435.2v89.6c0 19.2-12.8 32-32 32s-32-12.8-32-32v-86.4C64 288 182.4 169.6 329.6 169.6z"
                                p-id="1875" fill="#f9f9fb"></path>
                        </svg>
                        <svg v-if="getPlayType === 'single'" t="1745137903841" class="prev-type-mini"
                            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2036">
                            <path
                                d="M928 476.8c-19.2 0-32 12.8-32 32v86.4c0 108.8-86.4 198.4-198.4 198.4H201.6l41.6-38.4c6.4-6.4 12.8-16 12.8-25.6 0-19.2-16-35.2-35.2-35.2-9.6 0-22.4 3.2-28.8 9.6l-108.8 99.2c-16 12.8-12.8 35.2 0 48l108.8 96c6.4 6.4 19.2 12.8 28.8 12.8 19.2 0 35.2-12.8 38.4-32 0-12.8-6.4-22.4-16-28.8l-48-44.8h499.2c147.2 0 265.6-118.4 265.6-259.2v-86.4c0-19.2-12.8-32-32-32zM96 556.8c19.2 0 32-12.8 32-32v-89.6c0-112 89.6-201.6 198.4-204.8h496l-41.6 38.4c-6.4 6.4-12.8 16-12.8 25.6 0 19.2 16 35.2 35.2 35.2 9.6 0 22.4-3.2 28.8-9.6l105.6-99.2c16-12.8 12.8-35.2 0-48l-108.8-96c-6.4-6.4-19.2-12.8-28.8-12.8-19.2 0-35.2 12.8-38.4 32 0 12.8 6.4 22.4 16 28.8l48 44.8H329.6C182.4 169.6 64 288 64 438.4v86.4c0 19.2 12.8 32 32 32z"
                                p-id="2037" fill="#f9f9fb"></path>
                            <path d="M544 672V352h-48L416 409.6l16 41.6 60.8-41.6V672z" p-id="2038" fill="#f9f9fb">
                            </path>
                        </svg>
                        <svg v-if="getPlayType === 'random'" t="1745137982545" class="prev-type-mini"
                            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2199">
                            <path
                                d="M844.8 665.6c-6.4-6.4-16-12.8-25.6-9.6-19.2 0-35.2 16-35.2 35.2 0 9.6 6.4 19.2 12.8 25.6l41.6 41.6c-44.8-6.4-86.4-22.4-121.6-51.2-3.2 0-3.2-3.2-6.4-6.4L332.8 304C268.8 233.6 192 195.2 99.2 195.2c-19.2 0-35.2 16-35.2 35.2s16 32 35.2 32c73.6 0 134.4 32 182.4 86.4l384 400 6.4 6.4c48 38.4 108.8 64 172.8 70.4l-48 44.8c-9.6 6.4-16 19.2-16 28.8 0 19.2 19.2 35.2 38.4 32 9.6 0 19.2-6.4 25.6-12.8l99.2-92.8c16-16 16-41.6 0-57.6l-99.2-102.4z m-3.2-556.8c-12.8-16-32-19.2-48-6.4-9.6 6.4-12.8 16-12.8 25.6 0 12.8 3.2 22.4 16 28.8l41.6 41.6c-73.6 9.6-140.8 38.4-192 89.6l-115.2 118.4c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 16 9.6 25.6 9.6s19.2-3.2 25.6-9.6l112-118.4c41.6-38.4 92.8-64 147.2-70.4l-44.8 44.8c-6.4 6.4-12.8 16-12.8 25.6 0 19.2 16 35.2 32 35.2 9.6 0 19.2-3.2 28.8-9.6L950.4 256c12.8-12.8 12.8-35.2 0-48l-108.8-99.2m-438.4 448c-9.6 0-19.2 3.2-25.6 9.6l-118.4 121.6c-48 44.8-96 67.2-160 67.2H96c-19.2 0-35.2 16-35.2 35.2s16 32 35.2 32h3.2c83.2 0 147.2-32 211.2-86.4l121.6-124.8c6.4-6.4 9.6-12.8 9.6-22.4 0-9.6-3.2-16-9.6-22.4-9.6-6.4-19.2-9.6-28.8-9.6z"
                                p-id="2200" fill="#f9f9fb"></path>
                        </svg>
                    </div>
                    <div class="volume-control">
                        <icon-sound-fill class="prev-type-mini" />
                    </div>
                </a-space>
            </a-space>

        </template>
    </div>
</template>

<script lang="ts" setup name="Player">
import { computed, onMounted, onUnmounted } from 'vue';
import { ref } from 'vue';
import { usePageStatus } from '@renderer/store/modules/PageStatus'
import { storeToRefs } from 'pinia';

const PageStatus = usePageStatus();
const { setRR } = PageStatus
const { RetrievingReleasing } = storeToRefs(PageStatus)

// 播放状态
const isPlaying = ref(false);

// 播放类型
const playList = ref(['cycle', 'single', 'random']);
const playType = ref(0);

const handleEscKey = (event) => {
    if (event.key === ' ') {
        isPlaying.value = !isPlaying.value;
    }
};
onMounted(() => {
    window.addEventListener('keydown', handleEscKey);
});
onUnmounted(() => {
    window.removeEventListener('keydown', handleEscKey);
});


// 播放/暂停切换
const togglePlay = () => {
    isPlaying.value = !isPlaying.value;
};

// 播放类型切换
const changePlayType = () => {
    playType.value = playType.value + 1;
    if (playType.value === 3) {
        playType.value = 0;
    }
};
const getPlayType = computed(() => {
    return playList.value[playType.value];
});

// 上一首
const prevTrack = () => {
    console.log('播放上一首');
};

// 下一首
const nextTrack = () => {
    console.log('播放下一首');
};
</script>

<style lang="less" scoped>
/* 测试按钮样式 */
.test-button {
    position: absolute;
    top: 1rem;
    z-index: 10;
    padding: 0.4rem 0.8rem;
    border-radius: 1.5rem;
    font-size: 0.8rem;
    font-weight: 500;
    color: rgba(249, 249, 251, 0.7);
    background-color: rgba(23, 23, 23, 0.4);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(155, 64, 252, 0.15);
    box-shadow: 0 0 10px rgba(155, 64, 252, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
    overflow: hidden;
    user-select: none;
    letter-spacing: 0.05em;
    text-shadow: 0 0 2px rgba(155, 64, 252, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
}

.test-icon {
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(155, 64, 252, 0.6), rgba(135, 42, 211, 0.4));
    box-shadow: 0 0 4px rgba(155, 64, 252, 0.5);
    transition: all 0.3s ease;
}

.test-text {
    transition: all 0.3s ease;
    opacity: 0.9;
}

.test-button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(155, 64, 252, 0.05), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.test-button:hover {
    color: rgba(249, 249, 251, 0.9);
    background-color: rgba(23, 23, 23, 0.6);
    border-color: rgba(155, 64, 252, 0.4);
    box-shadow: 0 0 15px rgba(155, 64, 252, 0.3);
    transform: translateY(-2px);
}

.test-button:hover .test-icon {
    transform: scale(1.2);
    background: linear-gradient(135deg, rgba(155, 64, 252, 0.8), rgba(135, 42, 211, 0.6));
}

.test-button[class*='active'] {
    color: rgba(249, 249, 251, 1);
    background-color: rgba(23, 23, 23, 0.7);
    border-color: rgba(155, 64, 252, 0.6);
    box-shadow: 0 0 20px rgba(155, 64, 252, 0.4);
}

.test-button[class*='active'] .test-icon {
    background: linear-gradient(135deg, rgba(155, 64, 252, 1), rgba(135, 42, 211, 0.8));
    box-shadow: 0 0 8px rgba(155, 64, 252, 0.7);
    animation: pulse 1.5s infinite alternate;
}

@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 0.8;
    }

    100% {
        transform: scale(1.2);
        opacity: 1;
    }
}

.test-button:hover::before {
    opacity: 1;
}

.card:hover .test-button {
    background-color: rgba(23, 23, 23, 0.5);
    border-color: rgba(155, 64, 252, 0.25);
    box-shadow: 0 0 12px rgba(155, 64, 252, 0.2);
}

.test-button:active {
    transform: translateY(1px);
    box-shadow: 0 0 5px rgba(155, 64, 252, 0.2);
}

/* 滚动文字样式 */
.scroll-text {
    white-space: nowrap;
    animation: scroll 5s linear infinite;
    display: inline-block;
    padding-right: 20%;
}

/* 滚动动画关键帧 */
@keyframes scroll {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
}

// ========================================================


.controls {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1em;
    width: 100%;
}

.prev-btn,
.prev-type,
.play-btn,
.pause-btn,
.next-btn,
.volume-icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.prev-type-mini {
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.prev-type-mini:hover {
    transform: scale(1.2);
    filter: drop-shadow(0 0 5px rgba(155, 64, 252, 0.8));
}

.prev-btn:hover,
.prev-type:hover,
.play-btn:hover,
.pause-btn:hover,
.next-btn:hover,
.volume-icon:hover {
    transform: scale(1.2);
    filter: drop-shadow(0 0 5px rgba(155, 64, 252, 0.8));
}

.volume-control {
    display: flex;
    align-items: center;
    column-gap: 0.5em;
}

.progress-container {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 8px;
    margin-bottom: 0.5em;
}

.time-display {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.8);
    font-family: 'Montserrat', sans-serif;
}

.card {
    position: relative;
    width: 19em;
    height: 30em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #171717;
    color: white;
    font-family: Montserrat;
    font-weight: bold;
    padding: 1em;
    border-radius: 20px;
    overflow: hidden;
    z-index: 1;
    row-gap: 1em;
}

.card img {
    width: 12em;
    margin-right: 1em;
    animation: move 10s ease-in-out infinite;
    z-index: 5;
}

.image:hover {
    cursor: -webkit-grab;
    cursor: grab;
}

.image {
    user-select: none;
}

.icons svg {
    width: 20px;
    height: 20px;
}

.card::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    inset: -3px;
    border-radius: 10px;
    background: radial-gradient(#858585, transparent, transparent);
    transform: translate(-5px, 250px);
    transition: 0.4s ease-in-out;
    z-index: -1;
}

.card:hover::before {
    width: 150%;
    height: 100%;
    margin-left: -4.25em;
}

.card::after {
    content: "";
    position: absolute;
    inset: 2px;
    border-radius: 20px;
    background: rgb(23, 23, 23, 0.7);
    transition: all 0.4s ease-in-out;
    z-index: -1;
}

.heading {
    z-index: 2;
    width: 100%;
    overflow: hidden;
    text-align: center;
    transition: 0.4s ease-in-out;
}

.card:hover .heading {
    letter-spacing: 0.025em;
}

.heading::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    opacity: 1;
    box-shadow: 220px 118px #fff, 280px 176px #fff, 40px 50px #fff,
        60px 180px #fff, 120px 130px #fff, 180px 176px #fff, 220px 290px #fff,
        520px 250px #fff, 400px 220px #fff, 50px 350px #fff, 10px 230px #fff;
    z-index: -1;
    transition: 1s ease;
    animation: 1s glowing-stars linear alternate infinite;
    animation-delay: 0s;
}

.icons::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    opacity: 1;
    box-shadow: 140px 20px #fff, 425px 20px #fff, 70px 120px #fff, 20px 130px #fff,
        110px 80px #fff, 280px 80px #fff, 250px 350px #fff, 280px 230px #fff,
        220px 190px #fff, 450px 100px #fff, 380px 80px #fff, 520px 50px #fff;
    z-index: -1;
    transition: 1.5s ease;
    animation: 1s glowing-stars linear alternate infinite;
    animation-delay: 0.4s;
}

.icons::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    opacity: 1;
    box-shadow: 490px 330px #fff, 420px 300px #fff, 320px 280px #fff,
        380px 350px #fff, 546px 170px #fff, 420px 180px #fff, 370px 150px #fff,
        200px 250px #fff, 80px 20px #fff, 190px 50px #fff, 270px 20px #fff,
        120px 230px #fff, 350px -1px #fff, 150px 369px #fff;
    z-index: -1;
    transition: 2s ease;
    animation: 1s glowing-stars linear alternate infinite;
    animation-delay: 0.8s;
}

.card:hover .heading::before,
.card:hover .icons::before,
.card:hover .icons::after {
    filter: blur(3px);
}

.image:active {
    cursor: -webkit-grabbing;
    cursor: grabbing;
}

.image:active+.heading::before {
    box-shadow: 240px 20px #9b40fc, 240px 25px #9b40fc, 240px 30px #9b40fc,
        235px 25px #9b40fc, 235px 30px #9b40fc, 240px 35px #9b40fc, 245px 35px #9b40fc,
        245px 30px #9b40fc, 245px 25px #9b40fc, 245px 20px #9b40fc, 245px 15px #9b40fc,
        245px 40px #9b40fc, 250px 35px #9b40fc, 250px 30px #9b40fc, 250px 25px #9b40fc,
        250px 20px #9b40fc, 250px 15px #9b40fc, 250px 40px #9b40fc, 250px 45px #9b40fc,
        255px 20px #9b40fc, 255px 25px #9b40fc, 255px 30px #9b40fc, 255px 35px #9b40fc,
        255px 40px #9b40fc, 255px 45px #9b40fc, 255px 50px #9b40fc, 260px 25px #9b40fc,
        260px 30px #9b40fc, 260px 35px #9b40fc, 260px 40px #9b40fc, 260px 45px #9b40fc,
        260px 50px #9b40fc, 260px 55px #9b40fc, 265px 20px #9b40fc, 265px 25px #9b40fc,
        265px 30px #9b40fc, 265px 35px #9b40fc, 265px 40px #9b40fc, 265px 45px #9b40fc,
        265px 50px #9b40fc, 270px 15px #9b40fc, 270px 20px #9b40fc, 270px 25px #9b40fc,
        270px 30px #9b40fc, 270px 35px #9b40fc, 270px 40px #9b40fc, 270px 45px #9b40fc,
        275px 15px #9b40fc, 275px 20px #9b40fc, 275px 25px #9b40fc, 275px 30px #9b40fc,
        275px 35px #9b40fc, 275px 40px #9b40fc, 280px 20px #9b40fc, 280px 25px #9b40fc,
        280px 30px #9b40fc, 280px 35px #9b40fc, 285px 25px #9b40fc, 285px 30px #9b40fc;
    animation: none;
    filter: blur(0);
    border-radius: 2px;
    width: 0.45em;
    height: 0.45em;
    scale: 0.65;
    transform: translateX(7em) translateY(1em);
}

.heading::after {
    content: "";
    top: -8.5%;
    left: -8.5%;
    position: absolute;
    width: 7.5em;
    height: 7.5em;
    border: none;
    outline: none;
    border-radius: 50%;
    background: #f9f9fb;
    box-shadow: 0px 0px 100px rgba(193, 119, 241, 0.8),
        0px 0px 100px rgba(135, 42, 211, 0.8), inset #9b40fc 0px 0px 40px -12px;
    transition: 0.4s ease-in-out;
    z-index: -1;
}

.card:hover .heading::after {
    box-shadow: 0px 0px 200px rgba(193, 119, 241, 1),
        0px 0px 200px rgba(135, 42, 211, 1), inset #9b40fc 0px 0px 40px -12px;
}

.icons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5em;
}

.mini-progress {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5em;
    width: 100%;
}

.mini-progress-icon:hover {
    transform: scale(1.2);
    filter: drop-shadow(0 0 8px rgba(155, 64, 252, 0.8));
}

.volume-control {
    display: flex;
    align-items: center;
    column-gap: 0.5em;
}

.progress-container {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 8px;
    margin-bottom: 0.5em;
}

.time-display {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.8);
    font-family: 'Montserrat', sans-serif;
}

.card {
    position: relative;
    width: 19em;
    height: 30em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #171717;
    color: white;
    font-family: Montserrat;
    font-weight: bold;
    padding: 1em;
    border-radius: 20px;
    overflow: hidden;
    z-index: 1;
    row-gap: 1em;
}

.card img {
    width: 12em;
    margin-right: 1em;
    animation: move 10s ease-in-out infinite;
    z-index: 5;
}

.image:hover {
    cursor: -webkit-grab;
    cursor: grab;
}

.image {
    user-select: none;
}

.icons svg {
    width: 20px;
    height: 20px;
}

.card::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    inset: -3px;
    border-radius: 10px;
    background: radial-gradient(#858585, transparent, transparent);
    transform: translate(-5px, 250px);
    transition: 0.4s ease-in-out;
    z-index: -1;
}

.card:hover::before {
    width: 150%;
    height: 100%;
    margin-left: -4.25em;
}

.card::after {
    content: "";
    position: absolute;
    inset: 2px;
    border-radius: 20px;
    background: rgb(23, 23, 23, 0.7);
    transition: all 0.4s ease-in-out;
    z-index: -1;
}

.heading {
    z-index: 2;
    width: 100%;
    overflow: hidden;
    text-align: center;
    transition: 0.4s ease-in-out;
}

.card:hover .heading {
    letter-spacing: 0.025em;
}

.heading::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    opacity: 1;
    box-shadow: 220px 118px #fff, 280px 176px #fff, 40px 50px #fff,
        60px 180px #fff, 120px 130px #fff, 180px 176px #fff, 220px 290px #fff,
        520px 250px #fff, 400px 220px #fff, 50px 350px #fff, 10px 230px #fff;
    z-index: -1;
    transition: 1s ease;
    animation: 1s glowing-stars linear alternate infinite;
    animation-delay: 0s;
}

.icons::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    opacity: 1;
    box-shadow: 140px 20px #fff, 425px 20px #fff, 70px 120px #fff, 20px 130px #fff,
        110px 80px #fff, 280px 80px #fff, 250px 350px #fff, 280px 230px #fff,
        220px 190px #fff, 450px 100px #fff, 380px 80px #fff, 520px 50px #fff;
    z-index: -1;
    transition: 1.5s ease;
    animation: 1s glowing-stars linear alternate infinite;
    animation-delay: 0.4s;
}

.icons::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    opacity: 1;
    box-shadow: 490px 330px #fff, 420px 300px #fff, 320px 280px #fff,
        380px 350px #fff, 546px 170px #fff, 420px 180px #fff, 370px 150px #fff,
        200px 250px #fff, 80px 20px #fff, 190px 50px #fff, 270px 20px #fff,
        120px 230px #fff, 350px -1px #fff, 150px 369px #fff;
    z-index: -1;
    transition: 2s ease;
    animation: 1s glowing-stars linear alternate infinite;
    animation-delay: 0.8s;
}

.card:hover .heading::before,
.card:hover .icons::before,
.card:hover .icons::after {
    filter: blur(3px);
}

.image:active {
    cursor: -webkit-grabbing;
    cursor: grabbing;
}

.image:active+.heading::before {
    box-shadow: 240px 20px #9b40fc, 240px 25px #9b40fc, 240px 30px #9b40fc,
        235px 25px #9b40fc, 235px 30px #9b40fc, 240px 35px #9b40fc, 245px 35px #9b40fc,
        245px 30px #9b40fc, 245px 25px #9b40fc, 245px 20px #9b40fc, 245px 15px #9b40fc,
        245px 40px #9b40fc, 250px 35px #9b40fc, 250px 30px #9b40fc, 250px 25px #9b40fc,
        250px 20px #9b40fc, 250px 15px #9b40fc, 250px 40px #9b40fc, 250px 45px #9b40fc,
        255px 20px #9b40fc, 255px 25px #9b40fc, 255px 30px #9b40fc, 255px 35px #9b40fc,
        255px 40px #9b40fc, 255px 45px #9b40fc, 255px 50px #9b40fc, 260px 25px #9b40fc,
        260px 30px #9b40fc, 260px 35px #9b40fc, 260px 40px #9b40fc, 260px 45px #9b40fc,
        260px 50px #9b40fc, 260px 55px #9b40fc, 265px 20px #9b40fc, 265px 25px #9b40fc,
        265px 30px #9b40fc, 265px 35px #9b40fc, 265px 40px #9b40fc, 265px 45px #9b40fc,
        265px 50px #9b40fc, 270px 15px #9b40fc, 270px 20px #9b40fc, 270px 25px #9b40fc,
        270px 30px #9b40fc, 270px 35px #9b40fc, 270px 40px #9b40fc, 270px 45px #9b40fc,
        275px 15px #9b40fc, 275px 20px #9b40fc, 275px 25px #9b40fc, 275px 30px #9b40fc,
        275px 35px #9b40fc, 275px 40px #9b40fc, 280px 20px #9b40fc, 280px 25px #9b40fc,
        280px 30px #9b40fc, 280px 35px #9b40fc, 285px 25px #9b40fc, 285px 30px #9b40fc;
    animation: none;
    filter: blur(0);
    border-radius: 2px;
    width: 0.45em;
    height: 0.45em;
    scale: 0.65;
    transform: translateX(7em) translateY(1em);
}

.heading::after {
    content: "";
    top: -8.5%;
    left: -8.5%;
    position: absolute;
    width: 7.5em;
    height: 7.5em;
    border: none;
    outline: none;
    border-radius: 50%;
    background: #f9f9fb;
    box-shadow: 0px 0px 100px rgba(193, 119, 241, 0.8),
        0px 0px 100px rgba(135, 42, 211, 0.8), inset #9b40fc 0px 0px 40px -12px;
    transition: 0.4s ease-in-out;
    z-index: -1;
}

.card:hover .heading::after {
    box-shadow: 0px 0px 200px rgba(193, 119, 241, 1),
        0px 0px 200px rgba(135, 42, 211, 1), inset #9b40fc 0px 0px 40px -12px;
}

.icons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    column-gap: 1em;
    z-index: 1;
}

@keyframes move {
    0% {
        transform: translateX(0em) translateY(0em);
    }

    25% {
        transform: translateY(-1em) translateX(-1em);
        rotate: -10deg;
    }

    50% {
        transform: translateY(1em) translateX(-1em);
    }

    75% {
        transform: translateY(-1.25em) translateX(1em);
        rotate: 10deg;
    }

    100% {
        transform: translateX(0em) translateY(0em);
    }
}

@keyframes glowing-stars {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
</style>