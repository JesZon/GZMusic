<template>
    <div style="width: 100%;margin-top: 1.5vh;">
        <div class="grid-demo">
            <Search />
        </div>
    </div>
</template>

<script lang="ts" setup name="Navigation">
import Search from './search.vue';
</script>

<style lang="less" scoped>
.grid-demo{
    display: grid;
    place-items: center;
    height: 45px;
}
</style>