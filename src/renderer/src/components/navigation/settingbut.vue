<template>
    <div class="nebula"></div>
    <div class="grid-plane"></div>
    <div class="stars-container">
        <div class="star-layer"></div>
        <div class="star-layer"></div>
        <div class="star-layer"></div>
    </div>

    <div class="button-container">
        <button class="holo-button">
            <div class="button-text">{{ props.title }}</div>
            <div class="holo-glow"></div>
            <div class="button-glitch"></div>
            <div class="corner-accents">
                <div class="corner-accent"></div>
                <div class="corner-accent"></div>
                <div class="corner-accent"></div>
                <div class="corner-accent"></div>
            </div>
            <div class="holo-lines">
                <div class="holo-line"></div>
                <div class="holo-line"></div>
                <div class="holo-line"></div>
                <div class="holo-line"></div>
            </div>
            <div class="scan-line"></div>
            <div class="holo-particles">
                <div class="holo-particle"></div>
                <div class="holo-particle"></div>
                <div class="holo-particle"></div>
                <div class="holo-particle"></div>
                <div class="holo-particle"></div>
                <div class="holo-particle"></div>
            </div>
        </button>
    </div>

</template>

<script lang="ts" setup name="SettingBut">
const props = defineProps({
    title: { type: String, required: true },
})
</script>

<style lang="less" scoped>
/* From Uiverse.io by reglobby */
.stars-container {
    position: absolute;
    width: 100%;
    height: 100%;
    perspective: 500px;
    transform-style: preserve-3d;
}

.star-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.8;
}

.star-layer:nth-child(1) {
    transform: translateZ(-50px);
    animation: star-drift 150s linear infinite;
}

.star-layer:nth-child(2) {
    transform: translateZ(-100px);
    animation: star-drift 200s linear infinite reverse;
    opacity: 0.6;
}

.star-layer:nth-child(3) {
    transform: translateZ(-200px);
    animation: star-drift 250s linear infinite;
    opacity: 0.4;
}

@keyframes star-drift {
    0% {
        transform: translateZ(-50px) translateY(0);
    }

    100% {
        transform: translateZ(-50px) translateY(100%);
    }
}

.star {
    position: absolute;
    background: white;
    border-radius: 50%;
    filter: blur(1px);
}

.star-layer::before,
.star-layer::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
}

.star-layer:nth-child(1)::before {
    background-image: radial-gradient(1px 1px at 10% 10%, white 100%, transparent),
        radial-gradient(1px 1px at 20% 20%, white 100%, transparent),
        radial-gradient(2px 2px at 30% 30%, white 100%, transparent),
        radial-gradient(1px 1px at 40% 40%, white 100%, transparent),
        radial-gradient(2px 2px at 50% 50%, white 100%, transparent),
        radial-gradient(1px 1px at 60% 60%, white 100%, transparent),
        radial-gradient(2px 2px at 70% 70%, white 100%, transparent),
        radial-gradient(1px 1px at 80% 80%, white 100%, transparent),
        radial-gradient(2px 2px at 90% 90%, white 100%, transparent),
        radial-gradient(1px 1px at 15% 85%, white 100%, transparent);
}

.nebula {
    position: absolute;
    width: 120%;
    height: 120%;
    top: -10%;
    left: -10%;
    background: radial-gradient(ellipse at 30% 30%,
            rgba(63, 0, 113, 0.3) 0%,
            rgba(63, 0, 113, 0) 70%),
        radial-gradient(ellipse at 70% 60%,
            rgba(0, 113, 167, 0.3) 0%,
            rgba(0, 113, 167, 0) 70%),
        radial-gradient(ellipse at 50% 50%,
            rgba(167, 0, 157, 0.2) 0%,
            rgba(167, 0, 157, 0) 70%);
    filter: blur(30px);
    opacity: 0.5;
    animation: nebula-shift 30s infinite alternate ease-in-out;
}

@keyframes nebula-shift {
    0% {
        transform: scale(1) rotate(0deg);
        opacity: 0.3;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        transform: scale(1.2) rotate(5deg);
        opacity: 0.4;
    }
}

.grid-plane {
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    background-image: linear-gradient(rgba(0, 162, 255, 0.15) 1px,
            transparent 1px),
        linear-gradient(90deg, rgba(0, 162, 255, 0.15) 1px, transparent 1px);
    background-size: 40px 40px;
    transform: perspective(500px) rotateX(60deg);
    transform-origin: center;
    animation: grid-move 20s linear infinite;
    opacity: 0.3;
}

@keyframes grid-move {
    0% {
        transform: perspective(500px) rotateX(60deg) translateY(0);
    }

    100% {
        transform: perspective(500px) rotateX(60deg) translateY(40px);
    }
}

.button-container {
    position: relative;
    perspective: 1000px;
    transform-style: preserve-3d;
    z-index: 10;
}

.holo-button {
    position: relative;
    width: 100px;
    height: 40px;
    background: rgba(10, 10, 30, 0.6);
    border: none;
    color: rgba(0, 221, 255, 0.8);
    font-family: "Orbitron", sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 3px;
    text-shadow: 0 0 10px rgba(0, 221, 255, 0.5);
    cursor: pointer;
    overflow: hidden;
    transform-style: preserve-3d;
    transition: all 0.3s ease;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    z-index: 5;
    border-radius: 2px;
}

.holo-button::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: linear-gradient(45deg,
            rgba(0, 0, 40, 0.8) 0%,
            rgba(0, 20, 50, 0.8) 50%,
            rgba(5, 10, 30, 0.8) 100%);
    z-index: -1;
    border-radius: 1px;
}

.button-border {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 2;
}

.button-border::before,
.button-border::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    box-shadow: 0 0 10px rgba(0, 221, 255, 0.7);
    animation: border-flow 3s infinite;
}

.button-border::before {
    border-top-color: rgba(0, 221, 255, 0.8);
    border-left-color: rgba(0, 221, 255, 0.8);
    filter: drop-shadow(0 0 5px rgba(0, 221, 255, 0.7));
}

.button-border::after {
    border-bottom-color: rgba(255, 0, 222, 0.8);
    border-right-color: rgba(255, 0, 222, 0.8);
    filter: drop-shadow(0 0 5px rgba(255, 0, 222, 0.7));
}

@keyframes border-flow {

    0%,
    100% {
        transform: scale(1);
        opacity: 1;
    }

    50% {
        transform: scale(1.03);
        opacity: 0.8;
    }
}

.holo-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at center,
            rgba(0, 221, 255, 0.2) 0%,
            rgba(0, 0, 0, 0) 70%);
    pointer-events: none;
    z-index: 1;
    opacity: 0.7;
    filter: blur(10px);
    animation: glow-pulse 3s infinite alternate;
}

@keyframes glow-pulse {
    0% {
        opacity: 0.4;
        filter: blur(10px) brightness(0.8);
    }

    100% {
        opacity: 0.7;
        filter: blur(15px) brightness(1.2);
    }
}

/* Световые линии */
.holo-lines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
    z-index: 2;
}

.holo-line {
    position: absolute;
    background: rgba(0, 221, 255, 0.5);
    filter: blur(1px);
}

.holo-line:nth-child(1) {
    top: 0;
    left: 30px;
    width: 1.5px;
    height: 100%;
    animation: line-pulse 2s infinite alternate;
    animation-delay: -0.5s;
}

.holo-line:nth-child(2) {
    top: 0;
    right: 30px;
    width: 1.5px;
    height: 100%;
    animation: line-pulse 2s infinite alternate;
    animation-delay: -1s;
}

.holo-line:nth-child(3) {
    top: 15px;
    left: 0;
    width: 100%;
    height: 1.5px;
    animation: line-pulse 2s infinite alternate;
    animation-delay: -1.5s;
}

.holo-line:nth-child(4) {
    bottom: 15px;
    left: 0;
    width: 100%;
    height: 1.5px;
    animation: line-pulse 2s infinite alternate;
    animation-delay: -2s;
}

@keyframes line-pulse {
    0% {
        opacity: 0.3;
        background: rgba(0, 221, 255, 0.5);
    }

    100% {
        opacity: 0.7;
        background: rgba(255, 0, 222, 0.5);
    }
}

.scan-line {
    position: absolute;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 221, 255, 0.5) 20%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 0, 222, 0.5) 80%,
            rgba(0, 0, 0, 0) 100%);
    top: 0;
    left: 0;
    filter: blur(1px);
    opacity: 0;
    z-index: 2;
    pointer-events: none;
    animation: scan 2s infinite;
}

@keyframes scan {
    0% {
        top: -5px;
        opacity: 0;
    }

    15% {
        opacity: 0.7;
    }

    85% {
        opacity: 0.7;
    }

    100% {
        top: 85px;
        opacity: 0;
    }
}

/* Частицы */
.holo-particles {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 1;
}

.holo-particle {
    position: absolute;
    background: white;
    box-shadow: 0 0 10px rgba(0, 221, 255, 0.7);
    border-radius: 50%;
    filter: blur(1px);
    opacity: 0;
    pointer-events: none;
    animation: particle-float 3s infinite ease-out;
}

.holo-particle:nth-child(1) {
    width: 3px;
    height: 3px;
    top: 70%;
    left: 30%;
    animation-delay: 0.2s;
}

.holo-particle:nth-child(2) {
    width: 2px;
    height: 2px;
    top: 60%;
    left: 40%;
    animation-delay: 0.5s;
}

.holo-particle:nth-child(3) {
    width: 4px;
    height: 4px;
    top: 80%;
    left: 60%;
    animation-delay: 0.8s;
}

.holo-particle:nth-child(4) {
    width: 2px;
    height: 2px;
    top: 70%;
    left: 70%;
    animation-delay: 1.1s;
}

.holo-particle:nth-child(5) {
    width: 3px;
    height: 3px;
    top: 75%;
    left: 50%;
    animation-delay: 1.4s;
}

.holo-particle:nth-child(6) {
    width: 2px;
    height: 2px;
    top: 65%;
    left: 65%;
    animation-delay: 1.7s;
}

@keyframes particle-float {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0;
    }

    10% {
        opacity: 0.8;
    }

    100% {
        transform: translateY(-40px) rotate(360deg);
        opacity: 0;
    }
}

.corner-accents {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.corner-accent {
    position: absolute;
    width: 15px;
    height: 15px;
    border-style: solid;
    border-width: 2px;
    border-color: rgba(0, 221, 255, 0.7);
}

.corner-accent:nth-child(1) {
    top: 0;
    left: 0;
    border-right: none;
    border-bottom: none;
}

.corner-accent:nth-child(2) {
    top: 0;
    right: 0;
    border-left: none;
    border-bottom: none;
}

.corner-accent:nth-child(3) {
    bottom: 0;
    left: 0;
    border-right: none;
    border-top: none;
}

.corner-accent:nth-child(4) {
    bottom: 0;
    right: 0;
    border-left: none;
    border-top: none;
}

.button-glitch {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    pointer-events: none;
    z-index: 3;
    opacity: 0;
    animation: button-glitch 8s infinite;
}

@keyframes button-glitch {

    0%,
    100% {
        opacity: 0;
    }

    94%,
    96% {
        opacity: 0;
    }

    94.5% {
        opacity: 0.8;
        transform: translate(5px, -2px) skew(-5deg, 2deg);
        background: rgba(255, 0, 222, 0.2);
    }

    95% {
        opacity: 0.8;
        transform: translate(-5px, 2px) skew(5deg, -2deg);
        background: rgba(0, 221, 255, 0.2);
    }

    95.5% {
        opacity: 0.8;
        transform: translate(2px, 0) skew(-2deg, 0);
        background: rgba(255, 255, 255, 0.2);
    }
}

.holo-button:hover {
    color: rgb(255, 255, 255);
    text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
    transform: scale(1.02);
    transition: all 0.2s ease;
}

.holo-button:hover .holo-glow {
    background: radial-gradient(ellipse at center,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(0, 221, 255, 0.2) 40%,
            rgba(0, 0, 0, 0) 70%);
    animation: glow-pulse-hover 1.5s infinite alternate;
}

@keyframes glow-pulse-hover {
    0% {
        opacity: 0.6;
        filter: blur(10px) brightness(1);
    }

    100% {
        opacity: 0.9;
        filter: blur(15px) brightness(1.5);
    }
}

.holo-button:active {
    transform: scale(0.98);
    transition: all 0.1s ease;
}

.holo-button:active .holo-glow {
    opacity: 1;
    background: radial-gradient(ellipse at center,
            rgba(255, 255, 255, 0.5) 0%,
            rgba(255, 0, 222, 0.3) 40%,
            rgba(0, 0, 0, 0) 70%);
}

.button-text {
    position: relative;
    z-index: 5;
    transform-style: preserve-3d;
    text-transform: uppercase;
}
</style>