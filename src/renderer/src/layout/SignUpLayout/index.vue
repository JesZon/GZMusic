<template>
    <div class="signup-layout">
        <SignUpBackground />
        <LoginRegister />
    </div>
</template>

<script lang="ts" setup name="SignUpLayout">
import SignUpBackground from '@renderer/components/Background/SignUpBackground.vue'
import LoginRegister from "@renderer/views/LoginRegister/index.vue"
</script>

<style lang="scss" scoped>
.signup-layout{
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>






