<template>
    <div class="MusicPlayList">

        <!-- 导航栏 -->
        <a-space class="nav" :size="0">
            <template #split>
                <a-divider direction="vertical" />
            </template>
            <a-link href="#" class="nav-title" :hoverable="false">自建歌单</a-link>
            <a-link href="#" class="nav-title" :hoverable="false">收藏歌单</a-link>
        </a-space>

        <!-- 空状态 -->
        <div class="null-state">
            <img :src="ImagePath.addIcon" alt="add" class="add-icon" />
        </div>

        <div>
            <!-- 歌单列表 -->
        </div>
    </div>
</template>

<script lang="ts" setup name="MusicPlayList">
// 图片导入
import { ImagePath } from '@renderer/utils/ImagePath'
</script>

<style lang="scss" scoped>
.MusicPlayList {
    position: relative;
    margin: 12px 8px 8px 8px;
    justify-content: center;
}

.nav {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    .nav-title {
        color: #9CA3AF;

        &:hover {
            color: #4e4e4e;
        }
    }
}


.null-state {
    width: 100%;
    height: 35px;
    border: 1px dashed #9CA3AF;
    border-radius: var(--gz-element-round-radian1);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;

    &:hover {
        border: 1px dashed #4e4e4e;
    }

    .add-icon {
        width: 16px;
        height: 16px;
        margin: 8px;
    }
}
</style>