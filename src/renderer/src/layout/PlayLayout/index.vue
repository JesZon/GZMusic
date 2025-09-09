<template>
    <a-layout class="playLayout">
        <a-layout-header>
            <PlayHeader />
        </a-layout-header>
        <a-layout-content>Content</a-layout-content>
        <a-layout-footer>
            <PlayFooter />
        </a-layout-footer>
    </a-layout>
</template>

<script lang="ts" setup name="PlayLayout">
import PlayHeader from '@renderer/views/PlayHeader/index.vue'
import PlayFooter from '@renderer/views/PlayFooter/index.vue'
</script>

<style lang="scss" scoped>
.playLayout {
    height: 100vh;
    // background: var(--color-fill-2);
    border: 1px solid var(--color-border);
}

.playLayout :deep(.arco-layout-header) {
    height: 70px;
    line-height: 70px;
    -webkit-app-region: drag;
}

.playLayout :deep(.arco-layout-footer) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: var(--gz-element-footer-height);
    color: var(--color-text-2);
    // background-color: red;
    font-weight: 400;
    font-size: 14px;
    line-height: 48px;
}

.playLayout :deep(.arco-layout-content) {
    color: var(--color-text-2);
    font-weight: 400;
    font-size: 14px;
    background: var(--color-bg-3);
    height: calc(100vh - 50px - var(--gz-element-footer-height));
}

.playLayout :deep(.arco-layout-footer),
.playLayout :deep(.arco-layout-content) {
    color: var(--color-white);
    font-size: 16px;
    font-stretch: condensed;
    text-align: center;
}
</style>