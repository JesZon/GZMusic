<template>
    <a-space class="ArtistList" direction="vertical">
        <!-- 艺术家推荐标题 -->
        <div class="title">
            <span>艺术家推荐</span>
            <a-link>
                <template #icon>
                    <icon-refresh />
                </template>
                换一批
            </a-link>
        </div>

        <!-- 艺术家列表 -->
        <div class="artist-list">
            <div class="artist-item" v-for="(artist, index) in artistList" :key="index">
                <!-- 艺术家头像 -->
                <div class="artist-avatar">
                    <img :src="artist.avatar" :alt="artist.name" />
                    <!-- 播放按钮遮罩 -->
                    <div class="play-overlay">
                        <div class="play-btn">
                            <svg t="1757336601799" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="10594" width="40" height="40">
                                <path
                                    d="M512 64c247.424 0 448 200.576 448 448s-200.576 448-448 448S64 759.424 64 512 264.576 64 512 64z m-72.64 256a26.912 26.912 0 0 0-26.752 23.776l-0.192 3.136V677.12a26.912 26.912 0 0 0 39.168 24l2.688-1.6 247.616-165.088a26.912 26.912 0 0 0 2.528-42.88l-2.528-1.92-247.616-165.088a26.912 26.912 0 0 0-14.912-4.48z"
                                    fill="#4acb13" p-id="10595"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- 艺术家信息 -->
                <div class="artist-info">
                    <div class="artist-name">{{ artist.name }}</div>
                    <div class="artist-desc">{{ artist.description }}</div>
                    <div class="artist-stats">
                        <span class="fans-count">粉丝: {{ artist.fansCount }}</span>
                        <span class="songs-count">歌曲: {{ artist.songsCount }}</span>
                    </div>
                </div>

                <!-- 关注按钮 -->
                <div class="follow-btn">
                    <a-button :type="artist.isFollowed ? 'outline' : 'primary'" size="small"
                        @click="toggleFollow(index)">
                        {{ artist.isFollowed ? '已关注' : '关注' }}
                    </a-button>
                </div>
            </div>
        </div>
    </a-space>
</template>

<script lang="ts" setup name="ArtistList">
// 艺术家推荐组件
import { ref } from 'vue'
import { IconRefresh } from '@arco-design/web-vue/es/icon'
// 图片导入
import { ImagePath } from '@renderer/utils/ImagePath'

// 艺术家数据接口
interface Artist {
    name: string
    avatar: string
    description: string
    fansCount: string
    songsCount: string
    isFollowed: boolean
}

// 艺术家列表数据
const artistList = ref<Artist[]>([
    {
        name: '陈奕迅',
        avatar: ImagePath.ArtistIcon[1],
        description: '华语流行音乐天王，情歌王子',
        fansCount: '2847万',
        songsCount: '456',
        isFollowed: false
    },
    {
        name: '邓紫棋',
        avatar: ImagePath.ArtistIcon[2],
        description: '华语流行女歌手，创作才女',
        fansCount: '1923万',
        songsCount: '298',
        isFollowed: true
    },
    {
        name: '林俊杰',
        avatar: ImagePath.ArtistIcon[3],
        description: '新加坡华语流行歌手，音乐制作人',
        fansCount: '2156万',
        songsCount: '387',
        isFollowed: false
    },
    {
        name: '汪苏泷',
        avatar: ImagePath.ArtistIcon[4],
        description: '内地流行男歌手，音乐制作人',
        fansCount: '1654万',
        songsCount: '234',
        isFollowed: false
    }
])

// 切换关注状态
const toggleFollow = (index: number) => {
    artistList.value[index].isFollowed = !artistList.value[index].isFollowed
}
</script>

<style lang="scss" scoped>
.ArtistList {
    width: 100%;
    height: 100%;

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

    .artist-list {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 0 7px;

        .artist-item {
            display: flex;
            align-items: center;
            padding: 15px;
            border-radius: var(--gz-element-round-radian1);
            background-color: var(--color-bg-2);
            transition: all 0.3s ease;
            cursor: pointer;
            user-select: none;

            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
                background-color: var(--color-bg-3);

                .artist-avatar .play-overlay {
                    opacity: 1;
                }
            }

            .artist-avatar {
                position: relative;
                width: 80px;
                height: 80px;
                border-radius: 50%;
                overflow: hidden;
                margin-right: 20px;
                flex-shrink: 0;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .play-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;

                    .play-btn {
                        cursor: pointer;
                        transition: transform 0.2s ease;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        &:hover {
                            transform: scale(1.1);
                        }
                    }
                }
            }

            .artist-info {
                flex: 1;
                display: flex;
                flex-direction: column;
                gap: 8px;

                .artist-name {
                    font-size: 18px;
                    font-weight: bold;
                    text-align: left;
                    color: var(--color-text-1);
                }

                .artist-desc {
                    font-size: 14px;
                    text-align: left;
                    color: var(--color-text-3);
                    line-height: 1.4;
                }

                .artist-stats {
                    display: flex;
                    gap: 20px;
                    font-size: 12px;
                    color: var(--color-text-4);

                    .fans-count,
                    .songs-count {
                        display: flex;
                        align-items: center;
                    }
                }
            }

            .follow-btn {
                margin-left: 20px;
                flex-shrink: 0;
            }
        }
    }
}

// 响应式设计
@media (min-width: 1200px) {
    .ArtistList {
        .artist-list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;

            .artist-item {
                .artist-avatar {
                    width: 70px;
                    height: 70px;
                    margin-right: 15px;
                }

                .artist-info {
                    .artist-name {
                        font-size: 16px;
                    }

                    .artist-desc {
                        font-size: 13px;
                    }
                }
            }
        }
    }
}

@media (min-width: 1500px) {
    .ArtistList {
        .artist-list {
            grid-template-columns: repeat(3, 1fr);

            .artist-item {
                .artist-avatar {
                    width: 80px;
                    height: 80px;
                    margin-right: 20px;
                }

                .artist-info {
                    .artist-name {
                        font-size: 18px;
                    }

                    .artist-desc {
                        font-size: 14px;
                    }
                }
            }
        }
    }
}
</style>