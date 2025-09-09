<template>
    <div class="parent">
        <div class="card">
            <div class="logo">
                <span class="circle circle1"></span>
                <span class="circle circle2"></span>
                <span class="circle circle3"></span>
                <span class="circle circle4"></span>
                <span class="circle circle5">
                    <img :src="ImagePath.logoUrl" alt="logo" />
                </span>
            </div>
            <div class="glass">
                <img :src="ImagePath.zhiwoIcon" alt="music-bg" />
            </div>
            <div class="content">
                <span class="title">知我</span>
                <span class="text">演唱：国风堂/哦漏</span>
            </div>
            <div class="bottom">
                <div class="social-buttons-container">
                    <button class="social-button .social-button1">
                        <svg t="1757424890024" class="svg" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2891">
                            <path
                                d="M364.302083 465.602819L687.954365 218.588294c38.416414-29.327534 93.791393-1.929039 93.791392 46.396277v494.029051c0 48.325316-55.374979 75.725617-93.791392 46.398084L364.302083 558.397181c-30.600916-23.357989-30.600916-69.436372 0-92.794362zM238.945254 780.798397V451.684117v-164.562559c0-19.628152-5.904521-60.475733 17.057907-75.841215 25.523642-17.068744 59.747828 1.210165 59.747828 31.919454v493.676839c0 19.628152 5.915358 60.473927-17.047069 75.841215-25.53448 17.068744-59.758666-1.211971-59.758666-31.919454z"
                                p-id="2892"></path>
                        </svg>
                    </button>
                    <button class="social-button .social-button2">
                        <svg t="1757424561742" class="svg" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="4739">
                            <path
                                d="M780.8 475.733333L285.866667 168.533333c-27.733333-17.066667-64 4.266667-64 36.266667v614.4c0 32 36.266667 53.333333 64 36.266667l492.8-307.2c29.866667-14.933333 29.866667-57.6 2.133333-72.533334z"
                                p-id="4740"></path>
                        </svg>
                    </button>
                    <button class="social-button .social-button3">
                        <svg t="1757424951051" class="svg" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2815">
                            <path
                                d="M659.697917 558.397181L336.045635 805.411706c-38.416414 29.327534-93.791393 1.929039-93.791392-46.39627701l0-494.02905099c0-48.325316 55.374979-75.725617 93.791392-46.398084L659.697917 465.602819c30.600916 23.357989 30.600916 69.436372 0 92.794362zM785.054746 243.201603L785.054746 572.315883l0 164.562559c0 19.628152 5.904521 60.475733-17.057907 75.841215-25.523642 17.068744-59.747828-1.210165-59.74782801-31.919454l1e-8-493.67683901c0-19.628152-5.915358-60.473927 17.047069-75.84121499 25.53448-17.068744 59.758666 1.211971 59.758666 31.919454z"
                                p-id="2816"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="PlayImage">
// 图片导入
import { ImagePath } from '@renderer/utils/ImagePath'




</script>

<style lang="scss" scoped>
.parent {
    width: 290px;
    height: 300px;
    perspective: 1000px;
}

@media (min-width: 1500px) {
    .parent {
        width: 350px;
        height: 360px;
        perspective: 1000px;
    }
}


.card {
    height: 100%;
    border-radius: 50px;
    background: linear-gradient(135deg, rgb(0, 255, 214) 0%, rgb(8, 226, 96) 100%);
    transition: all 0.5s ease-in-out;
    transform-style: preserve-3d;
    box-shadow: rgba(5, 71, 17, 0) 40px 50px 25px -40px, rgba(5, 71, 17, 0.2) 0px 25px 25px -5px;
}

.glass {
    transform-style: preserve-3d;
    position: absolute;
    inset: 8px;
    border-radius: 55px;
    border-top-right-radius: 100%;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.349) 0%, rgba(255, 255, 255, 0.815) 100%);
    transform: translate3d(0px, 0px, 25px);
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    transition: all 0.5s ease-in-out;
    overflow: hidden;

    img {
        width: 130%;
        height: 130%;
        position: absolute;
        top: 0;
        left: 0;
        // top: -10%;
        // left: -10%;
        object-fit: cover;
        object-position: center;
        border-radius: 55px;
        border-top-right-radius: 100%;
        transition: all 0.3s ease-in-out;
        transform: scale(1);

        /* 确保图片完美贴合半圆轮廓 */
        clip-path: polygon(0% 0%,
                100% 0%,
                100% 50%,
                95% 55%,
                90% 60%,
                85% 65%,
                80% 70%,
                75% 75%,
                70% 80%,
                65% 85%,
                60% 90%,
                55% 95%,
                50% 100%,
                0% 100%);
    }

    /* 悬停时的图片效果 */
    &:hover img {
        transform: scale(1.05);
        filter: brightness(1.1) contrast(1.05);
    }

    /* 响应式调整 */
    @media (max-width: 768px) {
        img {
            width: 115%;
            height: 115%;
            top: -7.5%;
            left: -7.5%;
        }
    }

    @media (max-width: 480px) {
        img {
            width: 110%;
            height: 110%;
            top: -5%;
            left: -5%;
        }
    }
}

.content {
    padding: 100px 60px 0px 30px;
    transform: translate3d(0, 0, 26px);
}

.content .title {
    display: block;
    // color: #00894d;
    font-weight: 900;
    font-size: 20px;
}

.content .text {
    display: block;
    // color: rgba(0, 137, 78, 0.7647058824);
    font-size: 15px;
    margin-top: 20px;
}

@media (min-width: 1500px) {
    .content .title {
        font-size: 30px;
    }

    .content .text {
        font-size: 20px;
        margin-top: 20px;
    }
}

.bottom {
    padding: 10px 12px;
    transform-style: preserve-3d;
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: translate3d(0, 0, 26px);
}

.bottom .social-buttons-container {
    display: flex;
    gap: 10px;
    transform-style: preserve-3d;
}

.bottom .social-buttons-container .social-button {
    width: 30px;
    aspect-ratio: 1;
    padding: 5px;
    background: rgb(255, 255, 255);
    border-radius: 50%;
    border: none;
    display: grid;
    place-content: center;
    box-shadow: rgba(5, 71, 17, 0.5) 0px 7px 5px -5px;
}

.bottom .social-buttons-container .social-button:first-child {
    transition: transform 0.2s ease-in-out 0.4s, box-shadow 0.2s ease-in-out 0.4s;
}

.bottom .social-buttons-container .social-button:nth-child(2) {
    transition: transform 0.2s ease-in-out 0.6s, box-shadow 0.2s ease-in-out 0.6s;
}

.bottom .social-buttons-container .social-button:nth-child(3) {
    transition: transform 0.2s ease-in-out 0.8s, box-shadow 0.2s ease-in-out 0.8s;
}

.bottom .social-buttons-container .social-button .svg {
    width: 15px;
    fill: #00894d;
}

@media (min-width: 1500px) {

    .bottom .social-buttons-container {
        gap: 20px;
    }

    .bottom .social-buttons-container .social-button {
        width: 36px;
        padding: 6px;
    }

    .bottom .social-buttons-container .social-button .svg {
        width: 18px;
    }
}

.bottom .social-buttons-container .social-button:hover {
    background: black;
}

.bottom .social-buttons-container .social-button:hover .svg {
    fill: white;
}

.bottom .social-buttons-container .social-button:active {
    background: rgb(255, 234, 0);
}

.bottom .social-buttons-container .social-button:active .svg {
    fill: black;
}

.logo {
    position: absolute;
    right: 0;
    top: 0;
    transform-style: preserve-3d;
}

.logo .circle {
    display: block;
    position: absolute;
    aspect-ratio: 1;
    border-radius: 50%;
    top: 0;
    right: 0;
    box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    background: rgba(0, 249, 203, 0.2);
    transition: all 0.5s ease-in-out;
}

.logo .circle1 {
    width: 170px;
    transform: translate3d(0, 0, 20px);
    top: 8px;
    right: 8px;
}

.logo .circle2 {
    width: 140px;
    transform: translate3d(0, 0, 40px);
    top: 10px;
    right: 10px;
    -webkit-backdrop-filter: blur(1px);
    backdrop-filter: blur(1px);
    transition-delay: 0.4s;
}

.logo .circle3 {
    width: 110px;
    transform: translate3d(0, 0, 60px);
    top: 17px;
    right: 17px;
    transition-delay: 0.8s;
}

.logo .circle4 {
    width: 80px;
    transform: translate3d(0, 0, 80px);
    top: 23px;
    right: 23px;
    transition-delay: 1.2s;
}

.logo .circle5 {
    width: 50px;
    transform: translate3d(0, 0, 100px);
    top: 30px;
    right: 30px;
    display: grid;
    place-content: center;
    transition-delay: 1.6s;
}

.logo .circle5 img {
    width: 25px;
    fill: white;
}

.parent:hover .card {
    transform: rotate3d(1, 1, 0, 30deg);
    box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px, rgba(5, 71, 17, 0.1) 0px 25px 30px 0px;
}

.parent:hover .card .bottom .social-buttons-container .social-button {
    transform: translate3d(0, 0, 50px);
    box-shadow: rgba(5, 71, 17, 0.2) -5px 20px 10px 0px;
}

.parent:hover .card .logo .circle2 {
    transform: translate3d(0, 0, 60px);
}

.parent:hover .card .logo .circle3 {
    transform: translate3d(0, 0, 80px);
}

.parent:hover .card .logo .circle4 {
    transform: translate3d(0, 0, 100px);
}

.parent:hover .card .logo .circle5 {
    transform: translate3d(0, 0, 120px);
}
</style>