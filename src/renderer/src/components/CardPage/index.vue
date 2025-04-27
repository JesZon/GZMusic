<template>
  <div class="Content">
    <div class="left" :style="{ width: RetrievingReleasing ? '40%' : '10%' }">
      <Player />
    </div>
    <div class="right" :style="{ width: RetrievingReleasing ? '60%' : '90%' }">
      <ContentBar />
    </div>
    <audio ref="audioRef" style="display: none;" controls>
      <source src="../../assets/music/text.mp3" type="audio/mpeg">
    </audio>
  </div>
</template>

<script lang="ts" setup name="CardPage">
import { onMounted, onUnmounted, ref } from 'vue';
import ContentBar from './ContentBar/index.vue';
import Player from './Player/index.vue';
import { usePageStatus } from '@renderer/store/modules/PageStatus'
import { storeToRefs } from 'pinia';
import emitter from '@renderer/utils/emitter';

const PageStatus = usePageStatus();
const { RetrievingReleasing } = storeToRefs(PageStatus)
const audioRef = ref(null);

const startPlay = (flag) => {
  if(audioRef.value){
    if(flag){
      audioRef.value.play();
    }else{
      audioRef.value.pause();
    }
  }
};

const handleEscKey = (event) => {
  if (event.key === 'Escape') {
    PageStatus.setRR()
  }
};
onMounted(() => {
  emitter.on('startPlay', startPlay);
  window.addEventListener('keydown', handleEscKey);
});
onUnmounted(() => {
  emitter.off('startPlay', startPlay);
  window.removeEventListener('keydown', handleEscKey);
});

</script>

<style lang="less" scoped>
.Content {
  width: 100vw;
  height: 80vh;
}

.left {
  float: left;
  height: 100%;
  transition: width 0.5s ease;

  display: flex;
  align-items: center;
  /* 垂直居中 */
  justify-content: center;
  /* 水平居中 */
}

.right {
  float: right;
  height: 100%;
  transition: width 0.5s ease;
  display: flex;
  align-items: center;
  /* 垂直居中 */
  justify-content: center;
  /* 水平居中 */
}
</style>
