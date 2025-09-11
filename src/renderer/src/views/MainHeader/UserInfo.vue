<template>
    <div class="UserInfo">
        <!-- 用户信息 -->
        <div class="user-info-container">
            <!-- 消息通知图标 -->
            <div class="message-icon">
                <svg t="1754413273116" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="38656" xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="18" height="18">
                    <path
                        d="M511.982939 1023.98368c90.302561-1.567975 126.077991-81.214706 126.269987-155.837516H385.488955c0 74.814808 33.85546 157.181495 126.461984 155.837516z m447.768863-305.179136c-1.823971-33.343469-22.207646-54.175137-49.663208-54.175137-49.887205 0-49.887205-178.717152-49.887205-178.717151v-125.214005c0-103.55035-105.40632-212.70061-250.012016-255.99592 0.799987-4.41593 1.215981-9.43985 1.215981-14.655766C611.405354 40.383356 566.926063 0 512.046938 0c-54.943124 0-99.582413 40.191359-99.582413 90.046565 0 5.02392 0.415993 10.04784 1.21598 14.847763-137.533808 43.29531-250.236012 143.357715-250.236012 255.803923v123.838027s0 178.557154-48.447227 180.093129c-28.895539 0-51.42318 21.855652-51.103186 56.223104 0.63999 63.774984 54.111138 58.143073 81.5987 58.143074h732.884319c48.607225-1.663973 83.774665-17.023729 81.374703-60.159041z"
                        p-id="38657"></path>
                </svg>
            </div>

            <!-- 用户信息区域 -->
            <div class="user-profile">
                <!-- 用户头像 -->
                <div class="avatar-container">
                    <svg t="1754413750668" class="avatar-icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="41504" xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="21" height="21">
                        <path
                            d="M512 1022.1056c-282.3168 0-511.232-228.864-511.232-511.0784S229.632 0 512 0c282.3168 0 511.232 228.8128 511.232 511.0272 0 282.2656-228.864 511.0784-511.232 511.0784z m0-926.2592a415.2832 415.2832 0 0 0-415.3856 415.232c0 107.2128 41.0624 204.6464 107.8272 278.3232 60.16-29.1328 38.0416-4.9152 116.736-37.2736 80.5888-33.1264 99.6352-44.6464 99.6352-44.6464l0.768-76.288s-30.1568-22.8864-39.5264-94.72c-18.8928 5.4272-25.088-22.016-26.2144-39.424-1.024-16.896-10.9568-69.4784 12.0832-64.7168-4.7104-35.1744-8.0896-66.8672-6.4-83.6608 5.7344-58.88 62.976-120.5248 151.0912-124.9792 103.68 4.4544 144.7424 66.048 150.528 124.928 1.6384 16.8448-2.048 48.5376-6.7584 83.6096 23.04-4.6592 13.0048 47.872 11.8784 64.7168-1.024 17.408-7.3728 44.7488-26.2144 39.3728-9.4208 71.7824-39.5776 94.464-39.5776 94.464l0.7168 75.9296s19.0976 10.8032 99.6352 43.9296c78.6944 32.3584 56.576 9.5744 116.736 38.7584a413.184 413.184 0 0 0 107.776-278.3744A415.232 415.232 0 0 0 512 95.7952z"
                            p-id="41505"></path>
                    </svg>
                </div>

                <!-- 用户名 -->
                <span class="username-text">
                    <span>用户名</span>
                </span>

                <!-- 下拉箭头 -->
                <div class="dropdown-arrow">
                    <svg t="1756809214310" class="dropdown-icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="2500" width="15" height="15">
                        <path
                            d="M291.9 549.1L653 943.4c19.69999999 21.5 53 22.9 74.4 3.3 21.5-19.69999999 22.9-53 3.3-74.4L402.1 513.5 730.4 153.7c19.60000001-21.5 18.1-54.8-3.4-74.39999999-21.5-19.60000001-54.8-18.1-74.4 3.39999999l-360.5 394.9c-0.7 0.8-1.5 1.7-2.1 2.5-16.40000001 19.9-16.1 49.4 1.9 69z"
                            p-id="2501"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="UserInfo">
</script>9

<style lang="scss" scoped>
.UserInfo {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
    margin-right: 1rem;

    .user-info-container {
        display: flex;
        align-items: center;
        gap: 12px;
        height: 100%;

        .message-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            -webkit-app-region: no-drag;
            padding: 4px;
            border-radius: 4px;
            transition: background-color 0.2s ease;
            background-color: #9CA3AF;
            border-radius: 50%;

            .icon {
                fill: #fff;
                transition: fill 0.2s ease;

                &:hover {
                    fill: #7c7b7b;
                }
            }
        }

        .user-profile {
            display: flex;
            align-items: center;
            -webkit-app-region: no-drag;
            gap: 8px;
            padding: 0 5px;
            border-radius: 16px;
            background-color: #9CA3AF;
            cursor: pointer;
            min-width: 80px;
            height: 30px;

            .avatar-container {
                display: flex;
                align-items: center;
                justify-content: center;

                .avatar-icon {
                    fill: #ffffff;
                }
            }

            .username-text {
                color: #ffffff;
                font-size: 13px;
                font-weight: 500;
                line-height: 1;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 60px;
            }

            .dropdown-arrow {
                display: flex;
                align-items: center;
                justify-content: center;
                color: #ffffff;

                .dropdown-icon {
                    fill: #fff;
                    transform: rotate(-90deg);
                }
            }
        }
    }
}
</style>