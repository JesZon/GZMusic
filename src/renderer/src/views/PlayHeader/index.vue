<template>
    <div class="play-header">
        <div class="reduce operation-left">
            <div class="page-down">
                <svg t="1757399983887" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="2426" width="20" height="20">
                    <path
                        d="M549.1 732.1L943.4 371c21.5-19.69999999 22.9-53 3.3-74.4-19.69999999-21.5-53-22.9-74.4-3.3L513.5 621.9 153.7 293.6c-21.5-19.60000001-54.8-18.1-74.39999999 3.4-19.60000001 21.5-18.1 54.8 3.39999999 74.4l394.9 360.5c0.8 0.7 1.7 1.5 2.5 2.1 19.9 16.40000001 49.4 16.1 69-1.9z"
                        fill="#70706c" p-id="2427"></path>
                </svg>
            </div>
        </div>
        <div class="reduce operation-right">
            <WindowControl one-type="play-page" />
        </div>
    </div>
</template>

<script lang="ts" setup name="PlayHeader">
import WindowControl from '@renderer/views/WindowControl/index.vue'
</script>

<style lang="scss" scoped>
.play-header {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 0px;

    .reduce {
        display: flex;
        align-items: center;
    }

    .operation-left {
        justify-self: start;
        margin-left: 20px;

        .page-down {
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            -webkit-app-region: no-drag;
            line-height: 40px;
            cursor: pointer;
            user-select: none;

            svg {
                width: 18px;
                height: 18px;
            }
        }
    }

    .operation-right {
        justify-content: right;
    }
}
</style>