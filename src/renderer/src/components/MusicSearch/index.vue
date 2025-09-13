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

        <div class="music-list">
        </div>
    </div>
</template>

<script lang="ts" setup name="MusicSearch">
import { ref } from 'vue'

// 音乐搜索界面
interface MenuItem {
    name: string
    value: string
}

const menuItems = ref<MenuItem[]>([
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


// 列表数据 ================================================================
</script>

<style lang="scss" scoped>
.music-search {
    width: 100%;
    height: 100%;
    background-color: #fafafa;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 4fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.title {
    width: 100%;
    height: 100%;
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
    height: 100%;
    background-color: red;
}
</style>
