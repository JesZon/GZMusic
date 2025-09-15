<template>
    <div class="music-table">

        <!-- 表头 -->
        <div class="table-header">
            <div class="header-item header-index">序号</div>
            <div class="header-item header-song">歌名/歌手</div>
            <div class="header-item header-action"></div>
            <div class="header-item header-album">专辑</div>
            <div class="header-item header-duration">时长</div>
        </div>

        <div class="table-body">
        </div>

    </div>
</template>

<script lang="ts" setup name="MusicTable">
</script>

<style lang="scss" scoped>
.music-table {
    position: relative;
    width: 100%;
    height: 100%;
}

.table-header {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    background-color: #f8f9fa;
    border-bottom: 1px solid #e9ecef;
    font-size: 14px;
    font-weight: 500;
    color: #6c757d;
    padding: 0 16px;

    .header-item {
        display: flex;
        align-items: center;
        height: 100%;
    }

    .header-index {
        width: 60px;
        justify-content: center;
    }

    .header-song {
        flex: 1;
        min-width: 200px;
        padding-left: 16px;
    }

    .header-action {
        width: 120px;
        justify-content: center;
    }

    .header-album {
        width: 180px;
        padding-left: 16px;
    }

    .header-duration {
        width: 80px;
        justify-content: center;
    }

}

.table-body {
    width: inherit;
    height: calc(100% - 40px);
    background-color: green;
    overflow: hidden;
    overflow-y: auto;
    max-height: calc(100% - 40px);

    .table-item {
        width: 100%;
        height: 50px;
        background-color: grey;
        box-sizing: border-box;
        flex-shrink: 0;
    }
}
</style>