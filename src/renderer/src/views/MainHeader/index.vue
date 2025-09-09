<template>
    <div class="MainHeader">

        <!-- 返回、前进页面键 -->
        <a-space size="medium" class="nav-btns">
            <svg t="1756737388735" class="nav-btn-icon left-icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="2602" width="22" height="22">
                <path
                    d="M382 512l345.85-346.37a38.17 38.17 0 0 0 0-53.93l-2.52-2.52a38.05 38.05 0 0 0-53.89 0L300.32 480.93q-0.84 0.75-1.65 1.56l-2.52 2.51a38.18 38.18 0 0 0-2.58 51.07 36 36 0 0 0 2.63 2.93l2.51 2.52 0.19 0.18 372.5 373.12a38.05 38.05 0 0 0 53.89 0l2.51-2.52a38.17 38.17 0 0 0 0-53.93z"
                    fill="#9CA3AF" p-id="2603"></path>
            </svg>

            <svg t="1756737388735" class="nav-btn-icon right-icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="2602" width="22" height="22">
                <path
                    d="M382 512l345.85-346.37a38.17 38.17 0 0 0 0-53.93l-2.52-2.52a38.05 38.05 0 0 0-53.89 0L300.32 480.93q-0.84 0.75-1.65 1.56l-2.52 2.51a38.18 38.18 0 0 0-2.58 51.07 36 36 0 0 0 2.63 2.93l2.51 2.52 0.19 0.18 372.5 373.12a38.05 38.05 0 0 0 53.89 0l2.51-2.52a38.17 38.17 0 0 0 0-53.93z"
                    fill="#9CA3AF" p-id="2603"></path>
            </svg>
        </a-space>

        <!-- 搜索框 -->
        <InputSearch />

        <!-- 用户信息 -->
        <UserInfo />

        <!-- 窗口控制按钮 -->
        <WindowControl one-type="main-page"/>
    </div>
</template>

<script lang="ts" setup name="MainHeader">
// 头部组件

import InputSearch from '@renderer/views/MainHeader/InputSearch.vue' // 搜索框组件
import WindowControl from '@renderer/views/WindowControl/index.vue' // 窗口控制组件
import UserInfo from '@renderer/views/MainHeader/UserInfo.vue' // 用户信息组件
</script>

<style lang="scss" scoped>
.MainHeader {
    width: 100%;
    height: 100%;
    // background-color: yellow;
    display: flex;
    align-items: center;
    // justify-content: center;
}

.nav-btns {
    margin-left: 20px;
    // background-color: yellow;

    .nav-btn-icon {
        -webkit-app-region: no-drag;
        cursor: pointer;
    }

    .right-icon {
        transform: rotate(180deg);
    }
}
</style>