<template>
    <a-scrollbar class="custom-scrollbar" style="height: 100%;
                    overflow: auto;
                    width: 100%;
                    padding-right: 10px;
                    max-height: calc(100vh - 77px - var(--gz-element-footer-height));">

        <a-row class="information-page">
            <a-col flex="120px">
                <div class="info-image">
                    <img :src="ImagePath.musicType[1]" alt="yanhuixiang"></img>
                    <div class="play-count">
                        <svg t="1755875557346" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="15981" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path
                                d="M256 458.688a256 256 0 0 1 512 0v53.568l-9.6 4.352c-15.232 6.784-50.24 22.464-61.12 54.784-4.032 11.712-3.968 24.32-3.968 35.968v193.28c0 11.648 0 24.192 3.968 35.968 10.88 32.32 45.888 48 61.12 54.784 15.488 7.04 30.08 13.76 45.312 14.976 16.96 1.408 34.112-2.24 48.96-10.624 13.568-7.552 23.68-19.968 33.984-32.512 0 0 10.752-12.8 15.744-18.56 8.96-10.432 19.264-22.4 27.776-33.408 13.952-18.304 27.968-40.256 34.88-65.728a157.376 157.376 0 0 0 0-83.072c-4.992-18.56-14.144-34.816-26.24-51.968a1091.648 1091.648 0 0 0-46.848-59.264s-11.584-14.72-14.784-18.304a94.656 94.656 0 0 0-23.872-20.352v-53.888a341.312 341.312 0 1 0-682.624 0v53.888a94.656 94.656 0 0 0-23.872 20.352c-3.2 3.648-14.784 18.24-14.784 18.24-19.456 23.68-35.2 42.752-46.848 59.328-12.096 17.152-21.248 33.472-26.24 51.968a157.376 157.376 0 0 0 0 83.072c6.912 25.472 20.928 47.36 34.944 65.728 8.448 11.072 18.688 22.976 27.712 33.408 4.992 5.76 15.744 18.56 15.744 18.56 10.24 12.544 20.48 24.96 33.92 32.512 14.912 8.384 32.064 12.032 49.024 10.624 15.296-1.28 29.824-7.872 45.312-14.976 15.232-6.784 50.24-22.464 61.12-54.784 4.032-11.776 3.968-24.32 3.968-35.968V607.36c0-11.648 0-24.256-3.968-35.968-10.88-32.32-45.888-48-61.12-54.784L256 512.256v-53.568z"
                                p-id="15982"></path>
                        </svg>
                        <span>316</span>
                        <div class="action">
                            <svg t="1757677687456" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="3586">
                                <path
                                    d="M780.8 475.733333L285.866667 168.533333c-27.733333-17.066667-64 4.266667-64 36.266667v614.4c0 32 36.266667 53.333333 64 36.266667l492.8-307.2c29.866667-14.933333 29.866667-57.6 2.133333-72.533334z"
                                    p-id="3587"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </a-col>
            <a-col flex="auto">
                <a-space size="medium" direction="vertical" fill class="Information-message">
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
                    <div class="control">
                        <a-button type="primary" status="success"
                            style="border-radius: var(--gz-element-round-radian2);">
                            <svg t="1757677830461" class="but_icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="3842">
                                <path
                                    d="M780.8 475.733333L285.866667 168.533333c-27.733333-17.066667-64 4.266667-64 36.266667v614.4c0 32 36.266667 53.333333 64 36.266667l492.8-307.2c29.866667-14.933333 29.866667-57.6 2.133333-72.533334z"
                                    p-id="3843"></path>
                            </svg>
                            <span>播放全部</span>
                        </a-button>
                        <a-button style="border-radius: var(--gz-element-round-radian2); background-color: #c4c2c2;color: #fff;">
                            <svg t="1757678193356" class="but_icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="4098">
                                <path
                                    d="M896 256h85.333333c23.552 0 42.666667 19.114667 42.666667 42.666667V512c0 23.552-19.114667 42.666667-42.666667 42.666667h-85.333333V1024h-85.333333V554.666667h-85.333334c-23.552 0-42.666667-19.114667-42.666666-42.666667V298.666667c0-23.552 19.114667-42.666667 42.666666-42.666667h85.333334V0h85.333333v256z m0 85.333333H768v128h170.666667V341.333333h-42.666667z m-341.333333 213.333334h85.333333c23.552 0 42.666667 19.114667 42.666667 42.666666v213.333334c0 23.552-19.114667 42.666667-42.666667 42.666666h-85.333333v170.666667h-85.333334v-170.666667h-85.333333c-23.552 0-42.666667-19.114667-42.666667-42.666666V597.333333c0-23.552 19.114667-42.666667 42.666667-42.666666h85.333333V0h85.333334v554.666667z m0 85.333333H426.666667v128h170.666666v-128h-42.666666zM213.333333 170.666667h85.333334C322.218667 170.666667 341.333333 189.781333 341.333333 213.333333v213.333334c0 23.552-19.114667 42.666667-42.666666 42.666666h-85.333334V1024h-85.333333V469.333333h-85.333333C19.114667 469.333333 0 450.218667 0 426.666667V213.333333C0 189.781333 19.114667 170.666667 42.666667 170.666667h85.333333V0h85.333333v170.666667z m0 85.333333H85.333333v128h170.666667V256H213.333333z"
                                    p-id="4099"></path>
                            </svg>
                            <span>批量操作</span>
                            
                        </a-button>

                        <div class="SearchSort">
                            <div class="search-input-container" @click.stop="handleClick">
                                <svg t="1757675653893" class="search-icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="3078">
                                    <path
                                        d="M446.112323 177.545051c137.567677 0.219798 252.612525 104.59798 266.162424 241.493333 13.562828 136.895354-78.778182 261.818182-213.617777 289.008485-134.852525 27.203232-268.386263-52.156768-308.945455-183.608889s25.018182-272.252121 151.738182-325.779394A267.235556 267.235556 0 0 1 446.112323 177.545051m0-62.060607c-182.794343 0-330.989899 148.195556-330.989899 330.989899s148.195556 330.989899 330.989899 330.989899 330.989899-148.195556 330.989899-330.989899-148.195556-330.989899-330.989899-330.989899z m431.321212 793.341415a30.849293 30.849293 0 0 1-21.94101-9.102223l-157.220202-157.220202c-11.752727-12.179394-11.584646-31.534545 0.37495-43.50707 11.972525-11.972525 31.327677-12.140606 43.494141-0.37495l157.220202 157.220202a31.036768 31.036768 0 0 1 6.723232 33.810101 31.004444 31.004444 0 0 1-28.651313 19.174142z m0 0"
                                        p-id="3079"></path>
                                </svg>
                                <input type="text" ref="searchInput" placeholder="搜索" class="search-input" />
                            </div>

                            <div class="sort-container">
                                <svg t="1757677216621" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="3330">
                                    <path
                                        d="M358.265 273.813l-111.561 94.165c-19.508 16.466-48.67 14-65.136-5.508-16.466-19.507-14-48.67 5.508-65.135l187.597-158.346c30.052-25.365 76.036-4.003 76.036 35.322v682.667c0 25.528-20.694 46.222-46.222 46.222-25.528 0-46.222-20.694-46.222-46.222V273.813z m410.837 389.409c19.507-16.466 48.67-14 65.135 5.508 16.466 19.507 14 48.67-5.507 65.135L641.132 892.211c-30.05 25.365-76.036 4.003-76.036-35.322V174.222c0-25.528 20.695-46.222 46.223-46.222 25.527 0 46.222 20.694 46.222 46.222v583.165l111.56-94.165z"
                                        p-id="3331"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </a-space>
            </a-col>
        </a-row>

    </a-scrollbar>
</template>

<script lang="ts" setup name="InformationPage">
// 图片导入
import { ImagePath } from '@renderer/utils/ImagePath'
import { ref } from 'vue';

const searchInput = ref<HTMLInputElement>()
const handleClick = () => {
    searchInput.value?.focus();
}
</script>

<style lang="scss" scoped>
.information-page {
    color: black;
    text-align: center;
    padding: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.info-image {
    position: relative;
    width: 120px;
    height: 120px;
    border-radius: var(--gz-element-round-radian1);
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.03);

        .play-count {
            background-color: rgba(0, 0, 0, 0.35);

            svg {
                opacity: 1;
            }

            span {
                opacity: 1;
            }
        }
    }

    img {
        width: inherit;
        height: inherit;
        object-fit: cover;
        border-radius: inherit;
    }

    .play-count {
        width: inherit;
        height: inherit;
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


        .action {
            width: 50px;
            height: 50px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            .icon {
                width: 50px;
                height: 50px;
                fill: #9CA3AF;
            }
        }

        svg {
            width: 16px;
            height: 16px;
            flex-shrink: 0;
            display: flex;
            fill: #fff;
            align-items: center;
            justify-content: center;
            opacity: 0;
        }

        span {
            font-size: 15px;
            font-weight: 400;
            color: #fff;
            white-space: nowrap;
            display: flex;
            align-items: center;
            line-height: 1;
            user-select: none;
            opacity: 0;
        }
    }
}

.Information-message {
    margin: 0 0 0 10px;
    width: 100%;

    .title {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 15px;
        padding: 4px 8px;

        .icon {
            width: 35px;
            height: 35px;
            flex-shrink: 0;
        }

        span {
            font-size: 30px;
            font-weight: 500;
            white-space: nowrap;
            font-weight: bold;
            user-select: none;
        }
    }

    .control {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 15px;
        padding: 4px 8px;

        .but_icon {
            width: 20px;
            height: 20px;
            fill: #fff;
            margin-right: 5px;
        }

        .SearchSort {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: end;
            margin-right: 20px;

            .search-input-container {
                position: relative;
                display: flex;
                align-items: center;
                background-color: #f5f5f5;
                border-radius: 20px;
                padding: 4px 8px;
                width: 70px;
                transition: all 0.3s ease-in-out;
                border: 1px solid transparent;

                &:hover {
                    background-color: #eeeeee;
                }

                &:focus-within {
                    width: 200px;
                    background-color: #ffffff;
                    border-color: #8b8b8b;
                }

                .search-icon {
                    width: 16px;
                    height: 16px;
                    fill: #999999;
                    margin-right: 4px;
                    flex-shrink: 0;
                    transition: fill 0.3s ease;
                }

                .search-input {
                    flex: 1;
                    border: none;
                    outline: none;
                    background: transparent;
                    font-size: 14px;
                    color: #333333;
                    padding: 0;
                    width: 100%;

                    &::placeholder {
                        color: #999999;
                        transition: color 0.3s ease;
                    }

                    &:focus::placeholder {
                        color: #cccccc;
                    }
                }
            }

            .sort-container {
                margin-left: 8px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;

                .icon {
                    width: 22px;
                    height: 22px;
                    fill: #999999;
                }
            }
        }
    }

}
</style>