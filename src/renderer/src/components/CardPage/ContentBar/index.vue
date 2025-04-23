<template>
    <div class="glass-container" :class="!RetrievingReleasing ? 'no-container' : 'yes-container'">
        <div class="Content" :class="!RetrievingReleasing ? 'no-rotate' : 'yes-rotate'">
        </div>
    </div>
</template>

<script lang="ts" setup name="ContentBar">
import { usePageStatus } from '@renderer/store/modules/PageStatus'
import { storeToRefs } from 'pinia';

const PageStatus = usePageStatus();
const { RetrievingReleasing } = storeToRefs(PageStatus)
</script>

<style lang="less" scoped>
.glass-container {
    width: 80%;
    height: 80%;
    perspective: 1000px;
    display: inline-block;
    transition: margin-right 0.8s ease;

    .Content {
        transition: transform 0.8s ease;
        transform-origin: center;
        width: 100%;
        height: 100%;
        background: #2196F3;
        color: white;
    }
}

.yes-container {
    margin-right: 10%;
}

.no-container {
    margin-right: 0;
}

.yes-rotate {
    transform: rotateY(-30deg);
}

.no-rotate {
    transform: rotateY(0deg);
}
</style>