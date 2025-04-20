<template>
    <div class="glass-container">
        <div class="lyrics-container">
            <div class="lyrics-wrapper" ref="lyricsRef">
                <div v-for="(line, index) in lyrics" :key="index"
                    :class="['lyric-line', currentLineIndex === index ? 'active' : '']" :data-index="index">
                    {{ line.text }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="ContentBar">
import { ref, onMounted } from 'vue';

// 模拟歌词数据
const lyrics = ref([
    { time: 0, text: '歌曲名称 - 歌手名称' },
    { time: 3000, text: '作家' },
    { time: 5000, text: '作词：某某某' },
    { time: 8000, text: '作曲：某某某' },
    { time: 11000, text: '你是我的' },
    { time: 15000, text: '我曾经跨过山和大海' },
    { time: 19000, text: '也穿过人山人海' },
    { time: 23000, text: '我曾经拥有着的一切' },
    { time: 27000, text: '转眼都飘散如烟' },
    { time: 31000, text: '我曾经失落失望失掉所有方向' },
    { time: 35000, text: '直到看见平凡才是唯一的答案' },
    { time: 39000, text: '当你仍然在幻想' },
    { time: 43000, text: '你的明天' },
    { time: 47000, text: '她会好吗 还是更烂' },
]);

// 当前播放的歌词行索引
const currentLineIndex = ref(0);
const lyricsRef = ref<HTMLElement | null>(null);

// 模拟歌词滚动
onMounted(() => {
    // 模拟播放进度，每3秒切换一行歌词
    const timer = setInterval(() => {
        if (currentLineIndex.value < lyrics.value.length - 1) {
            currentLineIndex.value++;
            scrollToActiveLine();
        } else {
            clearInterval(timer);
        }
    }, 3000);
});

// 滚动到当前激活的歌词行
const scrollToActiveLine = () => {
    if (!lyricsRef.value) return;

    const activeElement = lyricsRef.value.querySelector('.active');
    if (activeElement) {
        const containerHeight = lyricsRef.value.clientHeight;
        const elementTop = (activeElement as HTMLElement).offsetTop;
        const elementHeight = (activeElement as HTMLElement).clientHeight;

        lyricsRef.value.scrollTo({
            top: elementTop - containerHeight / 2 + elementHeight / 2,
            behavior: 'smooth'
        });
    }
};
</script>

<style lang="less" scoped>
.glass-container {
    width: 60%;
    height: 350px;
    // background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    user-select: none;
    border-radius: 15px;
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
    border: 2px solid rgba(255, 255, 255, 0.3);
    transform: perspective(1000px) rotateY(-30deg);
    transform-origin: left center;
    position: relative;
    overflow: hidden;
    animation: breathe 3s ease-in-out infinite;
    animation-play-state: running;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

    &:hover {
        animation-play-state: paused;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to right bottom,
                rgba(255, 255, 255, 0.1),
                rgba(255, 255, 255, 0.05));
        z-index: -1;
    }
}

.lyrics-container {
    width: 90%;
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
}

.lyrics-wrapper {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;
    padding: 20px 10px;
    mask-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, transparent 100%);
}

.lyrics-wrapper::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
}

.lyrics-wrapper::-webkit-scrollbar-track {
    background-color: transparent;
}

.lyrics-wrapper::-webkit-scrollbar {
    width: 0;
    height: 0;
}

.lyric-line {
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
    line-height: 2.2;
    margin: 8px 0;
    transition: all 0.3s ease;
    padding: 2px 0;
    font-family: 'Microsoft YaHei', sans-serif;
    letter-spacing: 1px;
    transform: scale(0.95);
    opacity: 0.7;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

    &.active {
        color: rgba(255, 255, 255, 1);
        font-size: 16px;
        font-weight: 600;
        transform: scale(1.05);
        opacity: 1;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }
}

@keyframes breathe {

    0%,
    100% {
        transform: perspective(1000px) rotateY(-30deg) translateY(0);
    }

    50% {
        transform: perspective(1000px) rotateY(-30deg) translateY(-10px);
    }
}
</style>