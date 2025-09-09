<template>
    <div class="nav-footer">
        <a-space size="medium" class="footer-icon-group">
            <img :src="ImagePath.LeftHarvest" alt="left-harvest" class="footer-icon" @click="setStatusBar()"/>
            <img :src="ImagePath.settingIcon" alt="settingIcon" class="footer-icon" style="width: 25px;height: 25px;"/>
            <img :src="ImagePath.skinIcon" alt="skinIcon" class="footer-icon" />
        </a-space>
    </div>
</template>

<script lang="ts" setup name="NavFooter">
// 图片导入
import { ImagePath } from '@renderer/utils/ImagePath'

// 全局通讯
import emitter from "@renderer/utils/emitter";

const setStatusBar = () => {
    console.log("点击了setStatusBar");
    emitter.emit("setStatusBar");
}
</script>

<style lang="scss" scoped>
.nav-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 48px;
    line-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-bg-3);
    z-index: 3;
}

.footer-icon-group {
    width: 100%;
    margin-left: 20px;
    cursor: pointer;
    user-select: none;

    .footer-icon{
        width: 23px;
        height: 23px;
    }
}
</style>