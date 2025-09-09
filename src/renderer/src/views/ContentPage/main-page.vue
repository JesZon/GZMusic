<template>
    <div class="MainPage">
        <a-space :size="4" direction="vertical" class="space-vertical" fill>
            <!-- 标题 -->
            <div class="main-title">
                <span>下午好，打个盹儿吧！</span>
            </div>

            <!-- 歌单分类 -->
            <MusicClassify />

            <!-- 今日推荐 -->
            <TodayRecommendation />

            <!-- 歌单榜 -->
            <SongChart />

            <!-- 为您打造 -->
            <CreatedYou />

            <!-- 艺术家推荐 -->
            <ArtistList />
        </a-space>
    </div>
</template>

<script lang="ts" setup name="MainPage">
import MusicClassify from "@renderer/views/ContentPage/MusicClassify/index.vue"
import TodayRecommendation from "@renderer/views/ContentPage/TodayRecommendation/index.vue"
import SongChart from "@renderer/views/ContentPage/SongChart/index.vue"
import CreatedYou from "@renderer/views/ContentPage/CreatedYou/index.vue"
import ArtistList from "@renderer/views/ContentPage/ArtistList/index.vue"
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'ZhiMangXing';
    src: url('@renderer/assets/fonts/ZhiMangXing-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

.MainPage {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}

.space-vertical {
    height: 100%;
}

.main-title {
    font-family: 'ZhiMangXing', sans-serif;
    font-weight: bolder;
    text-align: left;
    width: 100%;
    font-size: 40px;
    user-select: none;
    // padding: 5px 0;
}
</style>