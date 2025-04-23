<template>
    <div class="input-container">
        <div class="input-field-container">
            <input type="text" class="holo-input" placeholder="音乐搜索" />
            <div class="input-border"></div>
            <div class="holo-scan-line"></div>
            <div class="input-glow"></div>
            <div class="input-active-indicator"></div>

            <div class="input-data-visualization">
                <div class="data-segment" style="--index: 1;"></div>
                <div class="data-segment" style="--index: 2;"></div>
                <div class="data-segment" style="--index: 3;"></div>
                <div class="data-segment" style="--index: 4;"></div>
                <div class="data-segment" style="--index: 5;"></div>
                <div class="data-segment" style="--index: 6;"></div>
                <div class="data-segment" style="--index: 7;"></div>
                <div class="data-segment" style="--index: 8;"></div>
                <div class="data-segment" style="--index: 9;"></div>
                <div class="data-segment" style="--index: 10;"></div>
                <div class="data-segment" style="--index: 11;"></div>
                <div class="data-segment" style="--index: 12;"></div>
                <div class="data-segment" style="--index: 13;"></div>
                <div class="data-segment" style="--index: 14;"></div>
                <div class="data-segment" style="--index: 15;"></div>
                <div class="data-segment" style="--index: 16;"></div>
                <div class="data-segment" style="--index: 17;"></div>
                <div class="data-segment" style="--index: 18;"></div>
                <div class="data-segment" style="--index: 19;"></div>
                <div class="data-segment" style="--index: 20;"></div>
            </div>

            <div class="input-particles">
                <div class="input-particle" style="--index: 1; top: 20%; left: 10%;"></div>
                <div class="input-particle" style="--index: 2; top: 65%; left: 25%;"></div>
                <div class="input-particle" style="--index: 3; top: 40%; left: 40%;"></div>
                <div class="input-particle" style="--index: 4; top: 75%; left: 60%;"></div>
                <div class="input-particle" style="--index: 5; top: 30%; left: 75%;"></div>
                <div class="input-particle" style="--index: 6; top: 60%; left: 90%;"></div>
            </div>

            <div class="input-holo-overlay"></div>

            <div class="interface-lines">
                <div class="interface-line"></div>
                <div class="interface-line"></div>
                <div class="interface-line"></div>
                <div class="interface-line"></div>
            </div>

            <div class="hex-decoration"></div>
            <div class="power-indicator"></div>
        </div>
    </div>

</template>

<script lang="ts" setup name="Search">
</script>

<style lang="less" scoped>
.input-container {
    position: fixed;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
}

.input-field-container {
    position: relative;
    width: 100%;
}

.holo-input {
    width: 100%;
    height: 40px;
    background: rgba(0, 12, 36, 0.7);
    border: none;
    outline: none;
    padding: 0 60px 0 20px;
    color: rgba(0, 195, 255, 0.9);
    font-family: "Orbitron", sans-serif;
    font-size: 15px;
    letter-spacing: 1px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 4px;
    box-shadow:
        0 0 15px rgba(0, 140, 255, 0.3),
        inset 0 0 10px rgba(0, 0, 0, 0.8);
    transition: all 0.3s ease;
    text-shadow: 0 0 5px rgba(0, 160, 255, 0.7);
    z-index: 1;
}

.holo-input::placeholder {
    color: rgba(0, 110, 200, 0.4);
    transition: all 0.3s ease;
}

.input-border {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border: 1px solid rgba(0, 150, 255, 0.4);
    border-radius: 4px;
    z-index: 2;
}

.input-border::before,
.input-border::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border: 1px solid rgba(0, 150, 255, 0.7);
    z-index: 2;
    transition: all 0.3s ease;
}

.input-border::before {
    top: -1px;
    left: -1px;
    border-right: none;
    border-bottom: none;
}

.input-border::after {
    bottom: -1px;
    right: -1px;
    border-left: none;
    border-top: none;
}

.holo-scan-line {
    position: absolute;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 150, 255, 0.5) 20%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(0, 150, 255, 0.5) 80%,
            rgba(0, 0, 0, 0) 100%);
    top: 0;
    left: 0;
    opacity: 0;
    filter: blur(1px);
    z-index: 3;
    pointer-events: none;
    transition: opacity 0.3s ease;
}

.input-glow {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: radial-gradient(ellipse at center,
            rgba(0, 150, 255, 0.1) 0%,
            rgba(0, 0, 0, 0) 70%);
    opacity: 0;
    border-radius: 4px;
    z-index: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.input-active-indicator {
    position: absolute;
    width: 10px;
    height: 10px;
    background: rgba(0, 150, 255, 0.7);
    border-radius: 50%;
    right: 20px;
    top: 25px;
    opacity: 0.3;
    box-shadow: 0 0 10px rgba(0, 150, 255, 0.5);
    transition: all 0.3s ease;
    z-index: 2;
    cursor: pointer;
}

.input-data-visualization {
    position: absolute;
    width: calc(100% - 40px);
    height: 3px;
    bottom: 12px;
    left: 20px;
    display: flex;
    justify-content: space-between;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.data-segment {
    width: 4%;
    height: 100%;
    background: rgba(0, 150, 255, 0.3);
    transition: all 0.5s ease;
}

.data-segment:nth-child(even) {
    height: 5px;
    transform: translateY(-1px);
}

.input-particles {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 3;
    overflow: hidden;
    border-radius: 4px;
}

.input-particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(0, 150, 255, 0.7);
    border-radius: 50%;
    opacity: 0;
    filter: blur(1px);
    transition: all 0.3s ease;
    box-shadow: 0 0 5px rgba(0, 150, 255, 0.7);
}

.input-holo-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(90deg,
            rgba(0, 150, 255, 0.05) 25%,
            rgba(0, 150, 255, 0.02) 50%,
            rgba(0, 150, 255, 0.05) 75%);
    background-size: 8px 100%;
    opacity: 0.5;
    pointer-events: none;
    z-index: 4;
    mix-blend-mode: overlay;
}

.interface-lines {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 2;
}

.interface-line {
    position: absolute;
    background: rgba(0, 150, 255, 0.3);
    transition: all 0.3s ease;
}

.interface-line:nth-child(1) {
    width: 20px;
    height: 1px;
    top: 15px;
    right: 15px;
}

.interface-line:nth-child(2) {
    width: 1px;
    height: 20px;
    top: 15px;
    right: 15px;
}

.interface-line:nth-child(3) {
    width: 1px;
    height: 20px;
    bottom: 15px;
    left: 15px;
}

.interface-line:nth-child(4) {
    width: 20px;
    height: 1px;
    bottom: 15px;
    left: 15px;
}

.hex-decoration {
    position: absolute;
    width: 30px;
    height: 34px;
    background: transparent;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    border: 1px solid rgba(0, 150, 255, 0.3);
    right: -15px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 1;
    transition: all 0.3s ease;
    z-index: 2;
}

@keyframes scan-animation {
    0% {
        top: 0;
        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    90% {
        opacity: 1;
    }

    100% {
        top: 100%;
        opacity: 0;
    }
}

@keyframes data-pulse {
    0% {
        transform: scaleY(1);
    }

    50% {
        transform: scaleY(1.8);
    }

    100% {
        transform: scaleY(1);
    }
}

@keyframes particle-float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.holo-input:focus {
    background: rgba(0, 22, 46, 0.8);
    box-shadow:
        0 0 20px rgba(0, 150, 255, 0.4),
        inset 0 0 15px rgba(0, 0, 0, 0.9);
    // color: rgba(0, 210, 255, 1);
    color: white;
}

.holo-input:focus::placeholder {
    color: rgba(0, 150, 255, 0.3);
    transform: translateX(10px);
}

.holo-input:focus~.input-border {
    border-color: rgba(0, 180, 255, 0.7);
}

.holo-input:focus~.input-border::before,
.holo-input:focus~.input-border::after {
    border-color: rgba(0, 180, 255, 1);
    width: 30px;
    height: 30px;
}

.holo-input:focus~.holo-scan-line {
    opacity: 1;
    animation: scan-animation 2s infinite ease-in-out;
}

.holo-input:focus~.input-glow {
    opacity: 1;
}

.holo-input:focus~.input-active-indicator {
    opacity: 1;
    background: rgba(0, 200, 255, 1);
    box-shadow: 0 0 15px rgba(0, 200, 255, 0.7);
    transform: scale(1.2);
}

.holo-input:focus~.input-data-visualization {
    opacity: 1;
}

.holo-input:focus~.input-data-visualization .data-segment {
    animation: data-pulse 2s infinite;
    animation-delay: calc(var(--index) * 0.1s);
}

.holo-input:focus~.interface-lines .interface-line {
    background: rgba(0, 200, 255, 0.6);
}

.holo-input:focus~.hex-decoration {
    border-color: rgba(0, 200, 255, 0.6);
    box-shadow: 0 0 10px rgba(0, 200, 255, 0.3);
    transform: translateY(-50%) rotate(30deg);
}

.holo-input:focus~.input-particles .input-particle {
    opacity: 1;
    animation: particle-float 3s infinite ease-in-out;
    animation-delay: calc(var(--index) * 0.2s);
}

.holo-input:hover {
    background: rgba(0, 15, 40, 0.75);
}

.holo-input:hover~.input-active-indicator {
    opacity: 0.6;
}

.holo-input:hover~.hex-decoration {
    border-color: rgba(0, 180, 255, 0.5);
}

.power-indicator {
    position: absolute;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,
            rgba(0, 180, 255, 0.7) 0%,
            rgba(0, 180, 255, 0.3) 100%);
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
    z-index: 3;
}

.holo-input:focus~.power-indicator {
    transform: scaleX(1);
}
</style>