<template>
    <a-layout class="layout-demo">
        <a-layout-sider breakpoint="xl" :collapsed="statusBar">
            <!-- 页面 logo -->
            <div class="logo">
                <img :src="ImagePath.logoUrl" alt="logo" />
                <h2 class="logo-title">光臻音乐</h2>
            </div>

            <!-- 系统功能数据 -->
            <FeatureList :items="systemFeatures" type="system" @item-click="handleSystemClick" />

            <!-- 分割线 -->
            <div class="divider-line"></div>

            <!-- 音乐功能数据 -->
            <FeatureList :items="musicFeatures" type="music" @item-click="handleMusicClick" />

            <!-- 歌单控件 -->
            <MusicPlayList />

            <!-- 底部控件 -->
            <NavFooter />

        </a-layout-sider>

        <a-layout>
            <a-layout-header @contextmenu.prevent>
                <MainHeader />
            </a-layout-header>
            <a-layout-content style="color: black;padding: 5px 0 10px 10px;">
                <MusicSearch />
                <!-- <MainPage /> -->
                <!-- <InformationPage /> -->
            </a-layout-content>
            <a-layout-footer style="color: black;">
                <MainFooter />
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<script lang="ts" setup name="MainPageLayout">
// 用户首页页面布局
import { onMounted, onUnmounted, reactive, ref } from 'vue'

// 图片导入
import { ImagePath } from '@renderer/utils/ImagePath'

import FeatureList from '@renderer/views/FeatureList/index.vue' // 功能列表组件
import MusicPlayList from '@renderer/views/MusicPlayList/index.vue' // 歌单组件
import NavFooter from '@renderer/views/NavFooter/index.vue' // 底部导航组件
import MainHeader from '@renderer/views/MainHeader/index.vue' // 主页头部组件
import MainFooter from "@renderer/views/MainFooter/index.vue" // 主页面底部控件

// import MainPage from '@renderer/views/ContentPage/main-page.vue' // 首页
// import InformationPage from '@renderer/components/InformationPage/index.vue' // 信息页面
import MusicSearch from '@renderer/components/MusicSearch/index.vue' // 搜索页面

// 全局通讯
import emitter from "@renderer/utils/emitter";

const statusBar = ref<boolean>(false)

onMounted(() => {
    emitter.on('setStatusBar', setStatusBar)
})

onUnmounted(() => {
    emitter.all.clear()
})
// 系统功能数据
const systemFeatures = reactive([
    {
        text: '首页',
        iconPath: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
        active: true
    },
    {
        text: '搜索',
        iconPath: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'
    },
    {
        text: '音乐上传',
        iconPath: 'M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z',
        iconPath2: 'M12,11L16,15H13V19H11V15H8L12,11Z'
    }
])

// 音乐功能数据
const musicFeatures = reactive([
    {
        text: '喜欢',
        iconPath: 'M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
    },
    {
        text: '本地下载',
        iconPath: 'M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z'
    },
    {
        text: '最近播放',
        iconPath: 'M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z'
    }
])

// 处理系统功能点击
const handleSystemClick = (item: any, index: number) => {
    console.log('系统功能点击:', item.text, index)
}

// 处理音乐功能点击
const handleMusicClick = (item: any, index: number) => {
    console.log('音乐功能点击:', item.text, index)
}

// 处理左侧状态栏的收起状态
const setStatusBar = () => {
    console.log("收到了setStatusBar");
    statusBar.value = !statusBar.value
}

</script>

<style lang="scss" scoped>
.layout-demo {
    height: 100vh;
    background: var(--color-fill-2);
    border: 1px solid var(--color-border);
}

.layout-demo :deep(.arco-layout-header) {
    height: 50px;
    line-height: 50px;
    background: var(--color-bg-3);
    -webkit-app-region: drag;
}

.layout-demo :deep(.arco-layout-footer) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: var(--gz-element-footer-height);
    color: var(--color-text-2);
    font-weight: 400;
    font-size: 14px;
    line-height: 48px;
}

.layout-demo :deep(.arco-layout-content) {
    color: var(--color-text-2);
    font-weight: 400;
    font-size: 14px;
    background: var(--color-bg-3);
    height: calc(100vh - 50px - var(--gz-element-footer-height));
}

.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-content) {
    color: var(--color-white);
    font-size: 16px;
    font-stretch: condensed;
    text-align: center;
}

.layout-demo :deep(.arco-layout-sider) {
    position: relative;
}

.logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 15px 8px;
    margin-top: 10px;
    max-width: 200px;
    width: 100%;

    img {
        width: 32px;
        height: 32px;
        object-fit: contain;
    }

    .logo-title {
        font-size: 18px;
        font-weight: 600;
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

}

.divider-line {
    height: 1px;
    background-color: #3a3a3a;
    margin: 12px 16px;
    opacity: 0.6;
}
</style>