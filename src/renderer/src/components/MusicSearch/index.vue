<template>
    <div class="music-search">
        <div class="title">
            <div class="info">
                <span class="title-info">
                    <span class="search-text">知我</span>
                    &nbsp;的相关搜索结果如下
                </span>

                <a-space class="cotrol-btn">
                    <a-button class="btn btn-play">
                        <svg t="1757780299902" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="3781">
                            <path
                                d="M780.8 475.733333L285.866667 168.533333c-27.733333-17.066667-64 4.266667-64 36.266667v614.4c0 32 36.266667 53.333333 64 36.266667l492.8-307.2c29.866667-14.933333 29.866667-57.6 2.133333-72.533334z"
                                p-id="3782"></path>
                        </svg>
                        &nbsp;
                        <span>全部播放</span>
                    </a-button>
                    <a-button class="btn btn-batch">
                        <svg t="1757780529237" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="5024">
                            <path
                                d="M984.6 551.4H39.4C17.6 551.4 0 533.8 0 512s17.6-39.4 39.4-39.4h945.2c21.8 0 39.4 17.6 39.4 39.4s-17.6 39.4-39.4 39.4zM984.6 157.5H39.4C17.6 157.5 0 139.9 0 118.2s17.6-39.4 39.4-39.4h945.2c21.8 0 39.4 17.6 39.4 39.4s-17.6 39.3-39.4 39.3zM984.6 945.2H39.4C17.6 945.2 0 927.6 0 905.8s17.6-39.4 39.4-39.4h945.2c21.8 0 39.4 17.6 39.4 39.4s-17.6 39.4-39.4 39.4z"
                                p-id="5025"></path>
                            <path d="M196.9 118.2m-118.2 0a118.2 118.2 0 1 0 236.4 0 118.2 118.2 0 1 0-236.4 0Z"
                                p-id="5026"></path>
                            <path d="M827.1 512m-118.2 0a118.2 118.2 0 1 0 236.4 0 118.2 118.2 0 1 0-236.4 0Z"
                                p-id="5027"></path>
                            <path d="M512 905.8m-118.2 0a118.2 118.2 0 1 0 236.4 0 118.2 118.2 0 1 0-236.4 0Z"
                                p-id="5028"></path>
                        </svg>
                        &nbsp;
                        <span> 批量操作</span>
                    </a-button>
                </a-space>
            </div>

            <div class="nav-list">
                <div v-for="(item, index) in menuItems" :key="index"
                    :class="['nav-item', { active: activeIndex === index }]" @click="handleMenuClick(index)">
                    <div class="text">
                        <span>{{ item.name }}</span>
                    </div>
                    <div class="indicator" v-if="activeIndex === index"></div>
                </div>
            </div>
        </div>

        <!-- <div class="music-list-two">
            <MusicTable />
        </div> -->

        <div class="music-list">
            <a-table :columns="columns" :loading="musicSearchStore.isLoading" :data="musicSearchStore.formatSearchData"
                :pagination="false" :scroll="{ y: '100%' }" row-key="id" :bordered="false" size="medium">
                <!-- 歌手/歌名列自定义渲染 -->
                <template #songInfo="{ record }">
                    <div class="song-info" @dblclick="handlePlayMusic(record)">
                        <div class="song-cover-container">
                            <img :src="record.cover" alt="专辑封面" class="song-cover" />
                            <div class="play-overlay" @click.stop="handlePlayMusic(record)">
                                <svg class="play-icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M780.8 475.733333L285.866667 168.533333c-27.733333-17.066667-64 4.266667-64 36.266667v614.4c0 32 36.266667 53.333333 64 36.266667l492.8-307.2c29.866667-14.933333 29.866667-57.6 2.133333-72.533334z"
                                        fill="#fff" />
                                </svg>
                            </div>
                        </div>
                        <div class="song-details">
                            <div class="song-name">{{ record.name }}</div>
                            <div class="artist-name">{{ record.artist }}</div>
                        </div>
                    </div>
                </template>

                <!-- <template #empty>
                    空状态
                </template> -->

                <template #actions="{ record }" style="height: 100%;">
                    <div class="action-buttons">
                        <a-button type="text" size="small" class="action-btn">
                            <icon-heart class="icon" />
                        </a-button>
                        <a-button type="text" size="small" class="action-btn">
                            <icon-check-circle class="icon" />
                        </a-button>
                        <a-button type="text" size="small" class="action-btn">
                            <icon-more class="icon" />
                        </a-button>
                    </div>
                </template>
            </a-table>
        </div>
    </div>
</template>

<script lang="ts" setup name="MusicSearch">
import { onBeforeUpdate, onMounted, ref } from 'vue'
import { IconHeart, IconCheckCircle, IconMore } from '@arco-design/web-vue/es/icon';

// 引入状态管理库
import { useMusicSearchStore } from '@renderer/store/modules/musicSearch'

// 引入音乐搜索类型
import { MusicItem } from '@renderer/store/musicType'
import { SearchStatus } from "@renderer/store/musicEnum"

// 路由导航
import { useRoute, useRouter } from 'vue-router'

// 全局通讯
import emitter from "@renderer/utils/emitter";

const router = useRouter()  // 执行路由操作
const route = useRoute()  // 访问当前路由信息

// 搜索状态库
const musicSearchStore = useMusicSearchStore()

const menuItems = ref<{
    name: string
    value: string
}[]>([
    { name: '综合', value: 'all' },
    { name: '单曲', value: 'song' },
    { name: '歌手', value: 'artist' },
    { name: '专辑', value: 'album' },
    { name: '歌单', value: 'playlist' },
    { name: '歌词', value: 'lyric' }
])

const activeIndex = ref(0)

const handleMenuClick = (index: number) => {
    activeIndex.value = index
    console.log('切换到:', menuItems.value[index].name)
}

import { getMusicUrl } from '@renderer/api/MusicSearch'

// 播放音乐处理函数
const handlePlayMusic = async (record: MusicItem) => {
    console.log('播放音乐:', record.name, '- 歌手:', record.artist)
    // 发送全局事件，通知播放音乐
    const musicUrl = await getMusicUrl(record.id);
    emitter.emit('playMusic', musicUrl.data.replace(/http:\/\/m\d+0\d+\.music.126\.net/g, '/music-resource'))
}

// 表格列配置
const columns = [
    {
        title: '序号',
        dataIndex: 'index',
        width: 60,
        render: ({ rowIndex }: { rowIndex: number }) => rowIndex + 1
    },
    {
        title: '歌手/歌名',
        dataIndex: 'songInfo',
        slotName: 'songInfo',
        width: 300
    },
    {
        title: '',
        dataIndex: 'actions',
        slotName: 'actions',
        width: 120,
        align: 'center'
    },
    {
        title: '专辑',
        dataIndex: 'album',
        width: 200,
        ellipsis: true
    },
    {
        title: '时长',
        dataIndex: 'duration',
        width: 80,
        align: 'center'
    }
]

// 列表数据 ================================================================

onMounted(() => {
    // 获取路由参数数据
    console.log("搜索歌曲：", route.query.search)

    // 发送搜索请求
    musicSearchStore.searchStatus = SearchStatus.LOADING
    musicSearchStore.search(route.query.search as string);
})

// onBeforeUpdate(() => {
//     console.log("路由变化：", route.query.search)
//     if (route.query.search !== musicSearchStore.lastSearch) {
//         musicSearchStore.searchStatus = SearchStatus.LOADING
//         musicSearchStore.search(route.query.search as string);
//     }
// })
</script>

<style lang="scss" scoped>
.music-search {
    width: 100%;
    height: 100%;
}

.title {
    width: 100%;
    height: 120px;
    padding: 20px 10px 10px 10px;
    border-bottom: 1px solid #e0e0e0;

    .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 15px;
    }

    .cotrol-btn {
        margin-right: 10px;

        .btn {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fafafa;
            border-radius: var(--gz-element-round-radian2);

            svg {
                fill: #fafafa;
            }
        }

        .btn-play {
            background-color: #2AB653;

            svg {
                width: 20px;
                height: 20px;
            }
        }

        .btn-batch {
            background-color: #9b9e9d;

            svg {
                width: 15px;
                height: 15px;
            }
        }
    }

    .title-info {
        display: flex;
        justify-content: start;
        align-items: end;
        font-size: 18px;
        user-select: none;

        .search-text {
            font-size: 28px;
            font-weight: bold;
            color: #333;
        }
    }

    .nav-list {
        display: flex;
        align-items: center;
        gap: 0;
        background: transparent;
        padding: 4px;
        width: fit-content;

        .nav-item {
            position: relative;
            padding: 4px 8px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            color: #666;
            user-select: none;
            width: 130px;
            text-align: center;

            &.active {
                color: #1976d2;
                background-color: #fff;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                font-weight: bolder;

                .indicator {
                    position: absolute;
                    bottom: 2px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 30px;
                    height: 2px;
                    background-color: #1976d2;
                    border-radius: 1px;
                }
            }

            .text {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 4px 0;
                height: 100%;
            }
        }

    }
}

@media (max-width: 1250px) {
    .title {
        .nav-list {
            .nav-item {
                width: 110px;
            }
        }
    }
}

.music-list {
    width: 100%;
    height: calc(100vh - 280px);
    overflow: hidden;

    :deep(.arco-table) {
        height: 100%;

        .arco-table-container {
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        .arco-table-header {
            flex-shrink: 0;
        }

        .arco-table-body {
            flex: 1;
            overflow-y: auto;
            min-height: 0;
        }

        // 当数据为空时，隐藏滚动条并让空状态完全展示
        .arco-table-body:has(.arco-empty) {
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        // 空状态样式优化
        .arco-empty {
            padding: 60px 20px;
            height: auto;
            user-select: none;
        }

        .arco-table-th {
            background-color: #fafafa;
            border-bottom: 1px solid #e5e6eb;
            font-weight: 500;
            color: #1d2129;
        }

        .arco-table-td {
            border-bottom: 1px solid #f2f3f5;
            padding: 12px 16px;
        }

        .arco-table-tr:hover {
            background-color: #f7f8fa;
        }
    }

    .song-info {
        display: flex;
        align-items: center;
        gap: 12px;
        cursor: pointer;

        .song-cover-container {
            position: relative;
            width: 40px;
            height: 40px;

            .song-cover {
                width: 100%;
                height: 100%;
                border-radius: 4px;
                object-fit: cover;
                transition: filter 0.2s ease;
            }

            .play-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.6);
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: opacity 0.2s ease;
                cursor: pointer;

                .play-icon {
                    width: 20px;
                    height: 20px;
                    fill: #fff;
                }
            }

            &:hover {
                .play-overlay {
                    opacity: 1;
                }

                .song-cover {
                    filter: brightness(0.8);
                }
            }
        }

        .song-details {
            display: flex;
            flex-direction: column;
            gap: 2px;

            .song-name {
                font-size: 14px;
                font-weight: 500;
                color: #1d2129;
                line-height: 1.2;
                max-width: 200px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .artist-name {
                font-size: 12px;
                color: #86909c;
                line-height: 1.2;
                max-width: 200px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }

    .action-buttons {
        display: flex;
        align-items: center;
        gap: 16px;

        .action-btn {
            padding: 3px;
            border: none;
            background: transparent;

            .icon {
                width: 21px;
                height: 21px;
            }

            &:hover {
                background-color: #f2f3f5;
                border-radius: 4px;

                .icon path {
                    fill: #1976d2;
                }
            }
        }
    }
}
</style>
