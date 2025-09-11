<template>
    <a-scrollbar class="custom-scrollbar" style="height: 100%;
                    overflow: auto;
                    width: 100%;
                    padding-right: 10px;
                    max-height: calc(100vh - 67px - var(--gz-element-footer-height));">

        <a-space class="information-page">
            <!-- 信息头部 -->
            <div class="img-box">
                <img :src="ImagePath.musicType[1]" alt="yanhuixiang"></img>
                <div class="play-count">
                    <svg t="1755875557346" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="15981" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path
                            d="M256 458.688a256 256 0 0 1 512 0v53.568l-9.6 4.352c-15.232 6.784-50.24 22.464-61.12 54.784-4.032 11.712-3.968 24.32-3.968 35.968v193.28c0 11.648 0 24.192 3.968 35.968 10.88 32.32 45.888 48 61.12 54.784 15.488 7.04 30.08 13.76 45.312 14.976 16.96 1.408 34.112-2.24 48.96-10.624 13.568-7.552 23.68-19.968 33.984-32.512 0 0 10.752-12.8 15.744-18.56 8.96-10.432 19.264-22.4 27.776-33.408 13.952-18.304 27.968-40.256 34.88-65.728a157.376 157.376 0 0 0 0-83.072c-4.992-18.56-14.144-34.816-26.24-51.968a1091.648 1091.648 0 0 0-46.848-59.264s-11.584-14.72-14.784-18.304a94.656 94.656 0 0 0-23.872-20.352v-53.888a341.312 341.312 0 1 0-682.624 0v53.888a94.656 94.656 0 0 0-23.872 20.352c-3.2 3.648-14.784 18.24-14.784 18.24-19.456 23.68-35.2 42.752-46.848 59.328-12.096 17.152-21.248 33.472-26.24 51.968a157.376 157.376 0 0 0 0 83.072c6.912 25.472 20.928 47.36 34.944 65.728 8.448 11.072 18.688 22.976 27.712 33.408 4.992 5.76 15.744 18.56 15.744 18.56 10.24 12.544 20.48 24.96 33.92 32.512 14.912 8.384 32.064 12.032 49.024 10.624 15.296-1.28 29.824-7.872 45.312-14.976 15.232-6.784 50.24-22.464 61.12-54.784 4.032-11.776 3.968-24.32 3.968-35.968V607.36c0-11.648 0-24.256-3.968-35.968-10.88-32.32-45.888-48-61.12-54.784L256 512.256v-53.568z"
                            p-id="15982"></path>
                    </svg>
                    <span>316</span>
                </div>
            </div>

            <a-space direction="vertical" fill class="info">
                <div class="title">
                    <svg t="1755875299992" class="icon" viewBox="0 0 1084 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="8379" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path
                            d="M983.45517 101.440323c133.496535 133.806412 134.850564 349.925695 4.041879 485.396014l-4.041879 4.122717-165.178131 165.548637a348.605348 348.605348 0 0 1-25.113543 29.189105l-4.59427 4.695316-225.220247 225.732219a26.757241 26.757241 0 0 1-21.037982 7.79409 26.750504 26.750504 0 0 1-21.017772-7.79409l-225.226984-225.738955a349.124056 349.124056 0 0 1-29.728022-33.891158L101.180297 590.959054c-133.496535-133.799676-134.850564-349.925695-4.041879-485.396014l4.041879-4.122717C201.466058 0.932259 348.071754-24.848194 472.123764 24.112437c11.142114 4.398912 25.605305 11.654085 43.382838 21.778992a53.891723 53.891723 0 0 0 53.514481-0.101046c15.264831-8.777614 27.754237-15.183993 37.454747-19.232609 125.298256-52.227816 275.063355-27.262475 376.97934 74.882549z"
                            fill="#d3217b" p-id="8380" data-spm-anchor-id="a313x.search_index.0.i4.3eaf3a81OETN3K"
                            class="selected"></path>
                        <path
                            d="M996.490231 324.781097A365.891118 365.891118 0 0 1 1003.765613 397.507977a26.945862 26.945862 0 1 1-53.891723 0c0-20.889779-2.081568-41.712194-6.197548-62.002427a26.945862 26.945862 0 0 1 52.813889-10.724453z m-280.358217-243.812892c71.217912 5.402645 138.602776 33.716009 191.740014 81.942365l3.051619 2.802369 3.590536 3.408652a26.945862 26.945862 0 0 1-35.965988 40.102178l-1.098044-0.99026-3.428861-3.246976c-44.352888-41.314742-101.404014-65.680538-161.958101-70.274807a26.945862 26.945862 0 0 1 4.068825-53.743521z"
                            fill="#FFFFFF" p-id="8381"></path>
                    </svg>
                    <span>喜 欢</span>
                </div>

                <a-space class="control">
                    <a-button type="primary" status="success" style="border-radius: 5px;">播放全部</a-button>
                    <a-button style="border-radius: 5px;">批量操作</a-button>
                </a-space>
            </a-space>
        </a-space>

        <!-- <div class="music-list">
            音乐列表
        </div> -->
    </a-scrollbar>
</template>

<script lang="ts" setup name="InformationPage">
// 图片导入
import { ImagePath } from '@renderer/utils/ImagePath'
</script>

<style lang="scss" scoped>
.information-page {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    // background-color: red;
    display: flex;
    align-items: center;
    padding: 10px;
    // justify-content: center;

    .img-box {
        position: relative;
        width: 100px;
        height: 100px;
        border-radius: var(--gz-element-round-radian1);

        img {
            width: inherit;
            height: inherit;
            border-radius: inherit;
        }

        .play-count {
            width: inherit;
            height: inherit;
            background-color: rgba(0, 0, 0, 0.2);
            border-radius: inherit;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            align-items: self-start;
            justify-content: end;
            gap: 6px;
            padding: 8px;
            margin-left: auto;
            margin-right: auto;

            svg {
                width: 16px;
                height: 16px;
                flex-shrink: 0;
                display: flex;
                fill: #fff;
                align-items: center;
                justify-content: center;
            }

            span {
                font-size: 15px;
                font-weight: 400;
                color: #fff;
                white-space: nowrap;
                display: flex;
                align-items: center;
                line-height: 1;
            }
        }

        // 响应式设计
        @media (max-width: 768px) {
            .play-count {
                padding: 3px 6px;
                gap: 4px;

                svg {
                    width: 14px;
                    height: 14px;
                }

                span {
                    font-size: 12px;
                }
            }
        }

        @media (max-width: 480px) {
            .play-count {
                padding: 2px 4px;
                gap: 3px;

                svg {
                    width: 12px;
                    height: 12px;
                }

                span {
                    font-size: 11px;
                }
            }
        }
    }

    .info {
        width: 100%;
        // background-color: yellow;

        .title {
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 15px;
            padding: 4px 8px;
            backdrop-filter: blur(10px);
            width: fit-content;

            .icon {
                width: 34px;
                height: 34px;
                flex-shrink: 0;
            }

            span {
                font-size: 25px;
                font-weight: 500;
                // color: #fff;
                white-space: nowrap;
                font-weight: bold;
            }
        }

        .control {
            display: flex;
            align-items: center;
            justify-content: start;
            width: 100%;
            // background-color: yellow;
            padding: 4px 8px;
            // border-radius: var(--gz-element-round-radian1);
        }
    }
}

.music-list {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}
</style>
