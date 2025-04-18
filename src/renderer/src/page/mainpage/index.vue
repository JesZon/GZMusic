<template>
  <div class="mx-auto h-screen w-[calc(100%-4rem)] overflow-hidden rounded-md" style="position: absolute;">
    <!-- <Vortex background-color="black" :range-y="800" :particle-count="500" :base-hue="120"
      class="flex size-full flex-col items-center justify-center px-2 py-4 md:px-10">
    </Vortex> -->
    <Vortex />
  </div>
  <div style="position: absolute;width: 100vw;height: 100vh;">
    <Navigation/>
  </div>
</template>

<script setup lang="ts" name="MainPage">
import Navigation from "@renderer/components/navigation.vue"
import Vortex from '@renderer/components/Vortex.vue';
</script>

<style lang="less" scoped>
.text{
  position: absolute;
}
</style>