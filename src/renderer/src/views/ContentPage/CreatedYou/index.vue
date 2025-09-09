<template>
    <a-space class="CreatedYou" direction="vertical">

        <!-- 为你打造 (推荐榜) -->
        <div class="title">
            <span>为您打造</span>
            <a-link>
                <template #icon>
                    <icon-refresh />
                </template>
                换一批
            </a-link>
        </div>

        <div class="recommend-list">
            <div class="recommend-item" v-for="value in 10" :key="value">
                <!-- 背景元素 -->
                <img :src="ImagePath.CreatedYouIcon[1]" alt="">

                <!-- 歌单这招层 -->
                <div class="palylist-mask"></div>

                <!-- 歌单元素 -->
                <div class="playlist">
                    <a-space :size="0" direction="vertical" class="playlist-title">
                        <div class="play-icon">
                            <svg t="1757336601799" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="10594" width="30" height="30">
                                <path
                                    d="M512 64c247.424 0 448 200.576 448 448s-200.576 448-448 448S64 759.424 64 512 264.576 64 512 64z m-72.64 256a26.912 26.912 0 0 0-26.752 23.776l-0.192 3.136V677.12a26.912 26.912 0 0 0 39.168 24l2.688-1.6 247.616-165.088a26.912 26.912 0 0 0 2.528-42.88l-2.528-1.92-247.616-165.088a26.912 26.912 0 0 0-14.912-4.48z"
                                    fill="#4acb13" p-id="10595"></path>
                            </svg>
                        </div>
                        <div class="playlist-view-count">
                            播放量：5.4亿
                        </div>
                        <div class="playlist-docs">
                            全网都在听！抖音最火音乐放送中
                        </div>
                    </a-space>
                </div>
            </div>
        </div>
    </a-space>
</template>

<script lang="ts" setup name="CreatedYou">
// 为您打造
import { IconRefresh } from '@arco-design/web-vue/es/icon';

// 图片导入
import { ImagePath } from '@renderer/utils/ImagePath'
</script>

<style lang="scss" scoped>
.CreatedYou {
    width: 100%;
    height: 100%;
    // background-color: red;

    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        margin: 10px 0 5px 0;
        user-select: none;

        span {
            text-align: left;
        }
    }
}

.recommend-list {
    padding: 0 7px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;

    .recommend-item {
        width: 100%;
        height: 140px;
        border-radius: var(--gz-element-round-radian1);
        overflow: hidden;
        cursor: pointer;
        user-select: none;
        transition: all 0.3s ease;
        position: relative;

        &:hover {
            transform: translateY(-2px) scale(1.02);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);

            .palylist-mask {
                display: block;
            }

            .playlist>.playlist-title {
                .play-icon {
                    display: block;
                }
            }
        }

        img {
            width: inherit;
            height: inherit;
            object-fit: cover;
        }

        .playlist {
            width: 100%;
            height: 100%;
            background: linear-gradient(0deg, #413e3e 0%, rgba(102, 102, 102, 0.30) 25.75%);
            position: absolute;
            top: 0;
            left: 0;

            .playlist-title {
                width: 100%;
                font-size: 12px;
                color: #fff;
                text-align: left;
                padding: 6px;
                position: absolute;
                bottom: 0;
                left: 0;

                .play-icon {
                    margin-bottom: 3px;
                    display: none;
                }

                .playlist-view-count {
                    font-weight: bold;
                }

                .playlist-docs {
                    max-width: 100%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }

        .palylist-mask {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba(36, 35, 35, 0.3);
            display: none;
        }
    }


}

@media (min-width: 1500px) {
    .recommend-list {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;

        .recommend-item{
            height: 180px;
        }
    }
}
</style>