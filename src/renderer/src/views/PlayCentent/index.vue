<template>
    <div class="play-centent">
        <div size="large" class="play-view">
            <div class="play-view-image">
                <PlayImage />
            </div>
            <div class="play-view-lyrics">
                
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="PlayCentent">
import PlayImage from '@renderer/views/PlayCentent/play-image.vue';
</script>

<style lang="scss" scoped>
.play-centent {
    width: 100%;
    height: 100%;
}

.play-view {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 0px;
    width: 100%;
    height: 100%;

    .play-view-image {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .play-view-lyrics {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
