<template>
  <div class="Content">
    <div class="left" :style="{ width: RetrievingReleasing ? '40%' : '10%' }">
      <Player />
    </div>
    <div class="right" :style="{ width: RetrievingReleasing ? '60%' : '90%' }">
      <ContentBar />
    </div>
    <audio controls>
      <source src="https://m701.music.126.net/20250425013206/0c7b27e2e2db61d101a0b8f01105f801/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/45265663668/670c/1f97/8b21/e4cfea741bdb9c0075349fa189b03439.mp3?vuutv=QlYk2TQ6zMEhdj4MWesi+CCIAkkX+6/viadJ8GM7xt+SPOtW+Zn8kHm0f34cLQB7gc5UQZ0Umd8NaW+Vv3blXBPF/ShlgzVtD7JQLGMOPQkuqVr9rduKL0INlHgGRO/kVQ0IXIMZ6hnFCoOZNtrVzwz8w3oiXhb6F1GToZ3ig5EVIenOiUshZrYeeB687YvKlhxlUf9T87VpD6Y1d92gNe85c4MOLGBzONsMaI7D1eeGVC6vgb95yCIpjoXPpODeyHJ+AO+wvyuH2J0LkdWp0TlzFFSwQL3PszGUko1PfsT9RCD4fLVPql/q1rfIATAhiMWwUhmTVxAbaDu6GP4vGJTwH/xNTrkEPPWguaW3pLscckO55CJOnUbbOSuVeCy/" type="audio/mpeg">
      你的浏览器不支持音频播放。
    </audio>
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
