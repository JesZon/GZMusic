<template>
    <n-grid :x-gap="5" :y-gap="5" :cols="6" layout-shift-disabled>
        <n-gi :span="4">
            <div class="let1">
                <Search />
            </div>
        </n-gi>
        <n-gi :span="2">
            <div class="let2"></div>
        </n-gi>
    </n-grid>
</template>

<script lang="ts" setup name="Navigation">
import Search from './search.vue';
</script>

<style lang="less" scoped>
.let1 {
    margin-top: 2vh;
}

.let2 {
    margin-top: 2vh;
}
</style>