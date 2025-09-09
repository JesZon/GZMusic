<template>
    <div class="login-register-wrapper">
        <transition
            :enter-active-class="'animate__animated animate__zoomIn'"
            :leave-active-class="'animate__animated animate__zoomOut'"
            mode="out-in"
        >
            <LoginFrom v-if="!isRegisterMode" key="login" @switch-to-register="switchToRegister" />
            <RegisterFrom v-else key="register" @switch-to-login="switchToLogin" />
        </transition>
    </div>
</template>

<script lang="ts" setup name="LoginRegister">
import { ref } from 'vue'
import RegisterFrom from "@renderer/views/LoginRegister/RegisterFrom.vue"
import LoginFrom from "@renderer/views/LoginRegister/LoginFrom.vue"
import 'animate.css'

// 控制显示登录还是注册组件
const isRegisterMode = ref(false)

// 切换到注册页面
const switchToRegister = () => {
    isRegisterMode.value = true
}

// 切换到登录页面
const switchToLogin = () => {
    isRegisterMode.value = false
}
</script>

<style lang="scss" scoped>
.login-register-wrapper {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
}

// 确保动画过渡效果平滑
.animate__animated {
    animation-duration: 0.3s;
    animation-fill-mode: both;
}

// 针对缩放动画的优化
.animate__zoomIn {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.animate__zoomOut {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
</style>