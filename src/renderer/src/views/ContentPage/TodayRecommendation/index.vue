<template>
    <a-space class="TodayRecommendation" direction="vertical">
        <div class="title">
            <span>今日推荐 - "放松点，听首歌吧 ~"</span>
            <a-link>更多推荐</a-link>
        </div>
        <div class="music-recommend">
            <img :src="ImagePath.recommend" alt="今日推荐">
            <div class="music-info">
                <div class="song-title">See You Again</div>
                <div class="artist-info">演唱：Wiz Khalifa / Charlie Puth</div>
                <div class="action-buttons">
                    <button class="play-btn">立即播放</button>
                    <div class="icon-buttons">
                        <button class="icon-btn heart">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </button>
                        <button class="icon-btn download">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7,10 12,15 17,10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                        </button>
                        <button class="icon-btn more">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </a-space>
</template>

<script lang="ts" setup name="TodayRecommendation">
// 今日推荐

// 图片导入
import { ImagePath } from '@renderer/utils/ImagePath'
</script>

<style lang="scss" scoped>
.TodayRecommendation {
    width: 100%;
    height: 100%;
    // background-color: red;
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        margin: 10px 0 5px 0;
        user-select: none;
        
        span {
            text-align: left;
        }
    }

    .music-recommend{
        width: 100%;
        height: 200px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        
        img{
            max-width: none;
            max-height: none;
            width: auto;
            height: auto;
            min-width: 100%;
            min-height: 100%;
            object-fit: cover;
        }

        .music-info{
            position: absolute;
            width: 100%;
            height: inherit;
            background: linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 60%, transparent 100%);
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            padding: 0 30px;
            color: white;
            user-select: none;
            
            .song-title {
                font-size: 28px;
                font-weight: bold;
                margin-bottom: 8px;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            }
            
            .artist-info {
                font-size: 14px;
                opacity: 0.9;
                margin-bottom: 20px;
                text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
            }
            
            .action-buttons {
                display: flex;
                align-items: center;
                gap: 15px;
                
                .play-btn {
                    background-color: #1db954;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 20px;
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    
                    &:hover {
                        background-color: #1ed760;
                        transform: translateY(-1px);
                        box-shadow: 0 4px 12px rgba(29, 185, 84, 0.4);
                    }
                }
                
                .icon-buttons {
                    display: flex;
                    gap: 10px;
                    
                    .icon-btn {
                        background: rgba(255, 255, 255, 0.2);
                        border: none;
                        width: 36px;
                        height: 36px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        
                        svg {
                            width: 18px;
                            height: 18px;
                            color: white;
                        }
                        
                        &:hover {
                            background: rgba(255, 255, 255, 0.3);
                            transform: translateY(-1px);
                        }
                        
                        &.heart:hover {
                            background: rgba(255, 69, 58, 0.3);
                        }
                        
                        &.download:hover {
                            background: rgba(0, 122, 255, 0.3);
                        }
                    }
                }
            }
        }
    }
}
</style>