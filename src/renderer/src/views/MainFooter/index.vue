<template>
    <div class="MainFooter">
        <a-row class="grid-demo">
            <a-col flex="260px" class="grid-1">
                <a-space size="small" class="music-info">
                    <!-- 音乐图片 -->
                    <div class="music-img">
                        <img :src="ImagePath.zhiwoIcon" alt="知我">

                        <div class="user-play-info">
                            <!-- 放大指示图标 -->
                            <div class="zoom-indicator">
                                <svg t="1757596655028" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="2756" width="24" height="24">
                                    <path
                                        d="M302.82763 0H145.954751C65.483163 0 0.0128 65.470363 0.0128 145.941951v156.872879a41.368566 41.368566 0 0 0 82.724332 0V145.941951a63.294418 63.294418 0 0 1 63.230419-63.217619h156.860079a41.368566 41.368566 0 0 0 0-82.724332z m575.217619 0H721.146772a41.368566 41.368566 0 0 0 0 82.724332h156.885678a63.294418 63.294418 0 0 1 63.217619 63.230419v156.860079a41.368566 41.368566 0 1 0 82.724332 0V145.941951C1023.987201 65.470363 958.516837 0 878.045249 0z m104.573386 679.791005a41.355766 41.355766 0 0 0-41.355766 41.355766v156.885678a63.294418 63.294418 0 0 1-63.230419 63.21762H721.172371a41.355766 41.355766 0 1 0 0 82.724332h156.885678C958.516837 1023.974401 1023.987201 958.504037 1023.987201 878.032449V721.133972a41.355766 41.355766 0 0 0-41.368566-41.355766z m-679.791005 261.459064H145.954751a63.294418 63.294418 0 0 1-63.217619-63.230419V721.159571a41.368566 41.368566 0 1 0-82.724332 0v156.885678C0.0128 958.504037 65.483163 1023.974401 145.954751 1023.974401h156.872879a41.368566 41.368566 0 1 0 0-82.724332z"
                                        fill="#fff" p-id="2757"></path>
                                </svg>
                            </div>
                        </div>

                    </div>

                    <!-- 音乐名称及操作控件 -->
                    <a-space size="small" direction="vertical" class="music-control-name">

                        <div class="music-name">
                            知我 - 国风堂/哦漏
                        </div>

                        <a-space size="medium" class="music-control">
                            <svg t="1756824957754" class="icon" viewBox="0 0 1166 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="2500" width="20" height="20">
                                <path
                                    d="M882.058985 2.769416C863.503898 0.969296 845.641165 0 829.024669 0c-115.623117 0-184.166162 42.510535-246.201079 107.868752C512.341954 33.094521 431.751949-11.631547 283.588195 2.769416 158.964476 14.954846 17.170379 124.623718 0 336.345569v69.235399C13.84708 589.470188 142.486451 739.434063 507.495476 999.897634a129.331726 129.331726 0 0 0 150.379287 0c365.285966-261.017455 493.371454-410.981329 507.633946-594.870549v-69.235399C1148.476801 124.623718 1006.682703 14.954846 882.058985 2.769416z"
                                    fill="#9CA3AF" p-id="2501"></path>
                            </svg>

                            <svg t="1756825049142" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="2756" width="20" height="20">
                                <path
                                    d="M512 1024C229.180952 1024 0 794.819048 0 512S229.180952 0 512 0 1024 229.180952 1024 512 794.819048 1024 512 1024z m0-950.857143c-243.809524 0-438.857143 195.047619-438.857143 438.857143s195.047619 438.857143 438.857143 438.857143 438.857143-195.047619 438.857143-438.857143-195.047619-438.857143-438.857143-438.857143z"
                                    p-id="2757" fill="#9CA3AF"></path>
                                <path
                                    d="M277.942857 512m-58.514286 0a58.514286 58.514286 0 1 0 117.028572 0 58.514286 58.514286 0 1 0-117.028572 0Z"
                                    p-id="2758" fill="#9CA3AF"></path>
                                <path
                                    d="M512 512m-58.514286 0a58.514286 58.514286 0 1 0 117.028572 0 58.514286 58.514286 0 1 0-117.028572 0Z"
                                    p-id="2759" fill="#9CA3AF"></path>
                                <path
                                    d="M746.057143 512m-58.514286 0a58.514286 58.514286 0 1 0 117.028572 0 58.514286 58.514286 0 1 0-117.028572 0Z"
                                    p-id="2760" fill="#9CA3AF"></path>
                            </svg>

                            <svg t="1756825108950" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="3011" width="20" height="20">
                                <path
                                    d="M832 80a112 112 0 0 1 111.616 102.784L944 192v640a112 112 0 0 1-102.784 111.616L832 944H608a48 48 0 0 1-6.528-95.552l6.528-0.448H832a16 16 0 0 0 15.552-12.352L848 832V192a16 16 0 0 0-12.352-15.552L832 176H192a16 16 0 0 0-15.552 12.352L176 192v224a48 48 0 0 1-95.552 6.528L80 416V192a112 112 0 0 1 102.784-111.616L192 80h640z m-448 448c61.824 0 112 50.176 112 112v192A112 112 0 0 1 384 944H192A112 112 0 0 1 80 832v-192c0-61.824 50.176-112 112-112z m0 96H192a16 16 0 0 0-16 16v192c0 8.832 7.168 16 16 16h192a16 16 0 0 0 16-16v-192A16 16 0 0 0 384 624z"
                                    fill="#9CA3AF" p-id="3012"></path>
                            </svg>
                        </a-space>

                    </a-space>
                </a-space>
            </a-col>
            <a-col flex="auto" class="grid-2">
                <play-music play-line="40vw" />
            </a-col>
            <a-col flex="150px" class="grid-3">
                <a-space size="medium" class="music-operation">
                    <svg t="1756825569918" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="3263" width="22" height="22">
                        <path
                            d="M800 1024h-576C100.48 1024 0 923.52 0 800v-576C0 100.48 100.48 0 224 0h576C923.52 0 1024 100.48 1024 224v576c0 123.52-100.48 224-224 224z m-576-960A160 160 0 0 0 64 224v576A160 160 0 0 0 224 960h576a160 160 0 0 0 160-160v-576A160 160 0 0 0 800 64h-576z"
                            fill="#9CA3AF" p-id="3264"></path>
                        <path
                            d="M425.6 635.52c4.48 17.92 13.44 44.8 19.84 56.96C320 784.64 300.16 800.64 288 815.36c-6.4-12.8-26.24-35.2-37.12-45.44 15.36-12.16 40.32-40.32 40.32-77.44V457.6H192v-64h163.84v291.2l69.76-49.28zM343.04 344.32c-22.4-30.72-71.68-78.08-110.72-111.36L275.2 192c38.4 31.36 90.24 75.52 113.92 105.6l-46.08 46.72zM832 750.72c0 39.04-8.96 58.24-33.28 69.12-24.96 11.52-65.28 12.16-125.44 12.16-3.2-17.28-12.16-48.64-23.04-65.92 42.88 1.92 86.4 1.28 99.2 0.64 12.16 0 16.64-4.48 16.64-16.64V268.8h-339.2v-61.44H832v543.36z m-110.72-364.16H443.52v-56.96h277.12v56.96z m-191.36 293.76v46.08h-60.8V450.56h221.44v229.76H529.92z m0-172.8v116.48h100.48V507.52H529.92z"
                            fill="#9CA3AF" p-id="3265"></path>
                    </svg>

                    <svg t="1756825628238" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="3516" width="22" height="22">
                        <path
                            d="M977.55 140.13c25.71 0 46.55 20.82 46.55 46.5s-20.84 46.5-46.55 46.5h-512c-25.71 0-46.55-20.82-46.55-46.5s20.84-46.5 46.55-46.5h512z m0 325.5c25.71 0 46.55 20.82 46.55 46.5s-20.84 46.5-46.55 46.5H651.74c-25.71 0-46.55-20.82-46.55-46.5s20.84-46.5 46.55-46.5h325.81zM87.69 241.68c12.26 7.26 242.97 144.96 257.53 153.69 16.97 10.11 27.14 27.58 27.24 46.72 0.1 19.24-9.96 36.9-26.93 47.21-5.5 3.36-58.86 35.31-115.82 69.34l-22.87 13.66c-57.13 34.12-111.95 66.78-120.2 71.47-9.22 5.2-19.49 7.85-29.76 7.85-9.43 0-18.86-2.26-27.35-6.67C11.1 635.24 0.1 617.18 0.1 596.57V288.69c0-20.71 11.63-39.55 30.28-49.17 17.91-9.22 39.39-8.44 57.31 2.16z m889.86 549.45c25.71 0 46.55 20.82 46.55 46.5s-20.84 46.5-46.55 46.5H46.64c-25.71 0-46.55-20.82-46.55-46.5s20.84-46.5 46.55-46.5h930.91z"
                            fill="#9CA3AF" p-id="3517"></path>
                    </svg>
                </a-space>
            </a-col>
        </a-row>
    </div>
</template>

<script lang="ts" setup name="MainFooter">
import PlayMusic from "@renderer/components/PlayMusic/index.vue"

// 音频导入
import { ImagePath } from '@renderer/utils/ImagePath'
</script>

<style lang="scss" scoped>
.MainFooter {
    height: 100%;
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
}

.grid-1 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: var(--gz-element-footer-height);
    padding-left: 10px;

    .music-info {
        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;
        height: 100%;

        .music-img {
            position: relative;
            width: 66px;
            height: 66px;
            border-radius: var(--gz-element-round-radian1);
            overflow: hidden;
            flex-shrink: 0;
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover {
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

                .user-play-info {
                    opacity: 0.7;

                    .zoom-indicator {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
            }

            .user-play-info {
                width: inherit;
                height: inherit;
                position: absolute;
                background-color: rgb(58, 57, 57);
                opacity: 0;
                top: 0;
                left: 0;
                object-fit: cover;
                border-radius: inherit;
                transition: opacity 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;

                .zoom-indicator {
                    opacity: 0;
                    transform: scale(0.8);
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    svg {
                        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
                    }
                }
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: inherit;
                transition: transform 0.3s ease;
            }
        }

        .music-control-name {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 4px;
            flex: 1;
            min-width: 0;

            .music-name {
                font-size: 15px;
                font-weight: 500;
                line-height: 1;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100%;
                user-select: none;
            }

            .music-control {
                font-size: 12px;
                line-height: 1;

                .icon {
                    cursor: pointer;
                    user-select: none;
                }
            }
        }
    }
}

.grid-2 {

    display: flex;
    align-items: center;
    height: var(--gz-element-footer-height);
}

.grid-3 {

    display: flex;
    align-items: center;
    height: var(--gz-element-footer-height);

    .music-operation {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 10px;
        width: 100%;
        height: 100%;
        margin-right: 20px;
    }

}
</style>
