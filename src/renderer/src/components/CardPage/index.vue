<template>
    <div class="Content">
        <div class="left" :style="{ width: RetrievingReleasing ? '40%' : '10%' }">
            <Player />
        </div>
        <div class="right" :style="{ width: RetrievingReleasing ? '60%' : '90%' }">
            <ContentBar />
        </div>
    </div>
</template>

<script lang="ts" setup name="CardPage">
import { onMounted, onUnmounted } from 'vue';
import ContentBar from './ContentBar/index.vue';
import Player from './Player/index.vue';
import { usePageStatus } from '@renderer/store/modules/PageStatus'
import { storeToRefs } from 'pinia';

const PageStatus = usePageStatus();
const { RetrievingReleasing } = storeToRefs(PageStatus)

const handleEscKey = (event) => {
  if (event.key === 'Escape') {
    PageStatus.setRR()
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleEscKey);
});
onUnmounted(() => {
  window.removeEventListener('keydown', handleEscKey);
});

</script>

<style lang="less" scoped>
.Content{
    width: 100vw;
    height: 80vh;
}

.left{
    float: left;
    height: 100%;
    transition: width 0.5s ease;

    display: flex;
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
}

.right{
    float: right;
    height: 100%;
    transition: width 0.5s ease;
    display: flex;
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
}
</style>
