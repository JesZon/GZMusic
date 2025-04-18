<template>
  <Background />
  <div style="position: absolute;width: 100vw;height: 100vh;">
    <Navigation/>
    <CardPage />
    <MackList />
  </div>
</template>

<script setup lang="ts" name="MainPage">
import Navigation from "@renderer/components/navigation/index.vue"
import Background from '@renderer/components/background/index.vue';
import MackList from "@renderer/components/macklist/index.vue"
import CardPage from "@renderer/components/CardPage/index.vue"
</script>

<style lang="less" scoped>
</style>