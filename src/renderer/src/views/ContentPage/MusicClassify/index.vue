<template>
    <div class="song-list-classification">
        <button class="carousel-btn carousel-btn-left" @click="slideLeft" :disabled="currentIndex === 0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M10 2L4 8l6 6V2z" />
            </svg>
        </button>

        <div class="carousel-container" ref="carouselContainer">
            <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * slideWidth}px)` }">
                <div class="song" v-for="(item, index) in songList" :key="index">
                    <div class="song-image">
                        <img :src="item.image" :alt="item.title">
                    </div>
                    <a-space class="song-text" direction="vertical">
                        <span class="text-one">{{ item.title }}</span>
                        <span class="text-two">{{ item.description }}</span>
                    </a-space>
                </div>
            </div>
        </div>

        <button class="carousel-btn carousel-btn-right" @click="slideRight" :disabled="currentIndex >= maxIndex">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M6 2l6 6-6 6V2z" />
            </svg>
        </button>
    </div>
</template>

<script lang="ts" setup name="MusicClassify">
// 歌单分类组件

import { ref, computed, onMounted, onUnmounted } from 'vue'
// 图片导入
import { ImagePath } from '@renderer/utils/ImagePath'

// 轮播相关数据
const currentIndex = ref(0)
const carouselContainer = ref<HTMLElement>()
const slideWidth = ref(260) // 每个歌单项的宽度
const visibleItems = ref(4) // 可见的歌单数量

// 歌单数据
const songList = ref([
    {
        title: '流行歌曲精选',
        description: '热单集结，好听到循环',
        image: ImagePath.musicType[1]
    },
    {
        title: '经典老歌',
        description: '怀旧金曲，回味无穷',
        image: ImagePath.musicType[2]
    },
    {
        title: '摇滚精选',
        description: '激情四射，燃爆全场',
        image: ImagePath.musicType[3]
    },
    {
        title: '民谣清新',
        description: '温暖治愈，静心聆听',
        image: ImagePath.musicType[4]
    },
    {
        title: '电子音乐',
        description: '节拍强劲，律动感十足',
        image: ImagePath.musicType[5]
    },
    {
        title: '古典音乐',
        description: '优雅高贵，艺术享受',
        image: ImagePath.musicType[6]
    },
    {
        title: '爵士乐',
        description: '慵懒惬意，品味生活',
        image: ImagePath.musicType[7]
    },
    {
        title: '说唱嘻哈',
        description: '节奏感强，个性十足',
        image: ImagePath.musicType[8]
    }
])

// 计算最大索引
const maxIndex = computed(() => {
    return Math.max(0, songList.value.length - visibleItems.value)
})

// 轮播方法
const slideLeft = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--
    }
}

const slideRight = () => {
    if (currentIndex.value < maxIndex.value) {
        currentIndex.value++
    }
}

// 响应式计算
const updateLayout = () => {
    if (carouselContainer.value) {
        const containerWidth = carouselContainer.value.offsetWidth
        const itemWidth = 260 // 固定每个歌单项宽度
        const gap = 16 // 间距
        const itemsPerRow = Math.floor((containerWidth + gap) / (itemWidth + gap))

        visibleItems.value = Math.max(1, itemsPerRow)
        slideWidth.value = itemWidth + gap

        // 调整当前索引，防止越界
        if (currentIndex.value > maxIndex.value) {
            currentIndex.value = maxIndex.value
        }
    }
}

// 监听窗口大小变化
let resizeObserver: ResizeObserver | null = null

onMounted(() => {
    updateLayout()

    // 使用ResizeObserver监听容器大小变化
    if (carouselContainer.value) {
        resizeObserver = new ResizeObserver(() => {
            updateLayout()
        })
        resizeObserver.observe(carouselContainer.value)
    }

    // 兼容性处理：监听窗口大小变化
    window.addEventListener('resize', updateLayout)
})

onUnmounted(() => {
    if (resizeObserver) {
        resizeObserver.disconnect()
    }
    window.removeEventListener('resize', updateLayout)
})
</script>

<style lang="scss" scoped>
.song-list-classification {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    // padding: 4px 0;
    // background-color: red;

    .carousel-btn {
        flex-shrink: 0;
        width: 14px;
        height: 40px;
        border: none;
        margin: 0 3px;
        border-radius: 7px;
        background: rgba(255, 255, 255, 0.9);
        color: #333;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        padding: 0;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        z-index: 2;

        &:hover:not(:disabled) {
            background: rgb(192, 189, 189);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            transform: scale(1.05);
        }

        &:disabled {
            opacity: 0.3;
            cursor: not-allowed;
            background: rgba(255, 255, 255, 0.6);
        }

        svg {
            transition: transform 0.2s ease;
        }

        &:hover:not(:disabled) svg {
            transform: scale(1.1);
        }
    }

    .carousel-container {
        flex: 1;
        overflow: hidden;
        position: relative;
    }

    .carousel-track {
        display: flex;
        gap: 16px;
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform;
    }

    .song {
        flex-shrink: 0;
        width: 260px;
        padding: 8px;
        display: flex;
        align-items: center;
        text-align: start;
        gap: 12px;
        border-radius: var(--gz-element-round-radian1);
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
        cursor: pointer;
        margin-top: 3px;

        &:hover {
            background: rgba(233, 233, 233, 0.95);
            transform: translateY(-3px);
        }

        .song-image {
            flex-shrink: 0;
            width: 60px;
            height: 60px;
            overflow: hidden;
            border-radius: var(--gz-element-round-radian1);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
                transition: transform 0.3s ease;
            }
        }

        &:hover .song-image img {
            transform: scale(1.05);
        }

        .song-text {
            flex: 1;
            min-width: 0;
            user-select: none;

            .text-one {
                font-size: 16px;
                font-weight: 600;
                color: #333;
                margin-bottom: 4px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .text-two {
                font-size: 14px;
                font-weight: 400;
                color: #666;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }

    // 响应式设计
    @media (max-width: 1200px) {
        .song {
            width: 260px;
        }
    }

    @media (max-width: 768px) {
        .song {
            width: 240px;
            padding: 10px;

            .song-image {
                width: 50px;
                height: 50px;
            }

            .song-text {
                .text-one {
                    font-size: 14px;
                }

                .text-two {
                    font-size: 12px;
                }
            }
        }

        .carousel-btn {
            width: 36px;
            height: 36px;
        }
    }

    @media (max-width: 480px) {
        gap: 8px;
        padding: 4px;

        .song {
            width: 220px;
            padding: 8px;
        }

        .carousel-btn {
            width: 32px;
            height: 32px;
        }
    }
}
</style>