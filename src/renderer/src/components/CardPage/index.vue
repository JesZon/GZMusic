<template>
    <div class="Content">
        <div class="left" :style="{ width: expanded ? '40%' : '10%' }">
            <Player />
        </div>
        <div class="right" :style="{ width: expanded ? '60%' : '90%' }">
            <ContentBar />
        </div>
    </div>
    <button @click="toggleExpand">按钮</button>
</template>

<script lang="ts" setup name="CardPage">
import { ref } from 'vue';
import ContentBar from './ContentBar/index.vue';
import Player from './Player/index.vue';

const expanded = ref(false);

const toggleExpand = () => {
    expanded.value = !expanded.value;
};
</script>

<style lang="less" scoped>
.Content{
    width: 100vw;
    height: 500px;
}

.left{
    float: left;
    height: 500px;
    // background-color: rgb(124, 123, 123);
    transition: width 0.5s ease;

    display: flex;
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
}

.right{
    float: right;
    height: 500px;
    // background-color: rgb(221, 221, 221);
    transition: width 0.5s ease;

    display: flex;
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
}
</style>
