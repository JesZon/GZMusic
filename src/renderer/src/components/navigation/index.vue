<template>
    <div style="width: 100%;margin-top: 1.5vh;">
        <!-- <Search /> -->
        <a-row class="grid-demo">
            <a-col :flex="7">
                <Search />
            </a-col>
            <a-col :flex="5">
                <SettingBut />
            </a-col>
        </a-row>
    </div>
</template>

<script lang="ts" setup name="Navigation">
import Search from './search.vue';
import SettingBut from './settingbut.vue';
</script>

<style lang="less" scoped>
.grid-demo .arco-col{
    height: 45px;
}
.grid-demo .arco-col:nth-child(2n + 1) {
    background-color: var(--color-primary-light-4);
}

.grid-demo .arco-col:nth-child(2n) {
    background-color: rgba(var(--arcoblue-6), 0.9);
}
</style>