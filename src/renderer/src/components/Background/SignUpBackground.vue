<template>
    <div class="signup-layout">
        <!-- 音乐符号泡泡动画 -->
        <div class="music-bubbles">
            <div class="bubble" v-for="(bubble, index) in bubbles" :key="index" 
                 :style="{
                     left: bubble.left + '%',
                     animationDelay: bubble.delay + 's',
                     animationDuration: bubble.duration + 's'
                 }">
                {{ bubble.symbol }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="SignUpBackground">
import { ref, onMounted } from 'vue'

interface Bubble {
  symbol: string
  left: number
  delay: number
  duration: number
}

const bubbles = ref<Bubble[]>([])

// 音乐符号数组
const musicSymbols = ['♪', '♫', '♬', '♩', '♭', '♯', '𝄞', '𝄢']

// 生成随机泡泡
const generateBubbles = () => {
  const newBubbles: Bubble[] = []
  
  for (let i = 0; i < 15; i++) {
    newBubbles.push({
      symbol: musicSymbols[Math.floor(Math.random() * musicSymbols.length)],
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 10
    })
  }
  
  bubbles.value = newBubbles
}

onMounted(() => {
  generateBubbles()
})
</script>

<style lang="scss" scoped>
.signup-layout {
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  position: relative;
  z-index: 10;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.music-bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.bubble {
  position: absolute;
  bottom: -50px;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  animation: float-up linear infinite;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  
  &:nth-child(odd) {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.8rem;
  }
  
  &:nth-child(3n) {
    color: rgba(255, 255, 255, 0.6);
    font-size: 1.2rem;
  }
  
  &:nth-child(4n) {
    color: rgba(255, 255, 255, 0.9);
    font-size: 2rem;
  }
}

@keyframes float-up {
  0% {
    transform: translateY(0) rotate(0deg) scale(0.8);
    opacity: 0;
  }
  
  10% {
    opacity: 1;
  }
  
  50% {
    transform: translateY(-50vh) rotate(180deg) scale(1);
    opacity: 0.8;
  }
  
  90% {
    opacity: 0.3;
  }
  
  100% {
    transform: translateY(-100vh) rotate(360deg) scale(0.6);
    opacity: 0;
  }
}

// 添加一些随机的水平移动
.bubble:nth-child(2n) {
  animation-name: float-up-left;
}

.bubble:nth-child(3n) {
  animation-name: float-up-right;
}

@keyframes float-up-left {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(0.8);
    opacity: 0;
  }
  
  10% {
    opacity: 1;
  }
  
  50% {
    transform: translateY(-50vh) translateX(-20px) rotate(180deg) scale(1);
    opacity: 0.8;
  }
  
  90% {
    opacity: 0.3;
  }
  
  100% {
    transform: translateY(-100vh) translateX(-40px) rotate(360deg) scale(0.6);
    opacity: 0;
  }
}

@keyframes float-up-right {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(0.8);
    opacity: 0;
  }
  
  10% {
    opacity: 1;
  }
  
  50% {
    transform: translateY(-50vh) translateX(20px) rotate(180deg) scale(1);
    opacity: 0.8;
  }
  
  90% {
    opacity: 0.3;
  }
  
  100% {
    transform: translateY(-100vh) translateX(40px) rotate(360deg) scale(0.6);
    opacity: 0;
  }
}
</style>