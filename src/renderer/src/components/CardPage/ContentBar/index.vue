<template>
    <div class="glass-container">

    </div>
</template>

<script lang="ts" setup name="ContentBar">
</script>

<style lang="less" scoped>
.glass-container {
    width: 60%;
    height: 350px;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
    border: 2px solid rgba(255, 255, 255, 0.3);
    transform: perspective(1000px) rotateY(-30deg);
    transform-origin: left center;
    position: relative;
    overflow: hidden;
    animation: breathe 3s ease-in-out infinite;
    animation-play-state: running;
    
    &:hover {
        animation-play-state: paused;
    }
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            to right bottom,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.05)
        );
        z-index: -1;
    }
}

@keyframes breathe {
    0%, 100% {
        transform: perspective(1000px) rotateY(-30deg) translateY(0);
    }
    50% {
        transform: perspective(1000px) rotateY(-30deg) translateY(-10px);
    }
}
</style>