import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { searchMusic } from '@renderer/api/MusicSearch'
import type { MusicSearchItem } from '@renderer/api/MusicSearch'


// 搜索状态枚举
export enum SearchStatus {
    IDLE = 'idle', // 空闲状态
    LOADING = 'loading', // 加载中状态
    SUCCESS = 'success', // 成功状态
    ERROR = 'error' // 错误状态
}

// 缓存数据类型
export interface SearchCache {
    keyword: string
    data: MusicSearchItem[]
    timestamp: number
    expireTime: number
}

export interface MusicItem {
    id: string // 音乐ID
    name: string  // 音乐名称
    artist: string  // 艺术家名称
    album: string  // 专辑名称
    duration: string // 音乐时长
    cover: string // 封面图片地址
}

export const useMusicSearchStore = defineStore('musicSearch', () => {
    // ======================== satate ========================
    // 搜索状态
    const searchStatus = ref<SearchStatus>(SearchStatus.IDLE)

    // 搜索结果列表
    const searchResults = ref<MusicSearchItem[]>([])

    // 当前搜索关键词
    const currentKeyword = ref<string>('')

    // 上一次搜索
    const lastSearch = ref<string>('')

    // 错误信息
    const errorMessage = ref<string>('')

    // ======================== getter ========================
    // 是否正在加载
    const isLoading = computed(() => searchStatus.value === SearchStatus.LOADING)

    // 是否有搜索结果
    const hasResults = computed(() => searchResults.value.length > 0)

    // 是否有错误
    const hasError = computed(() => searchStatus.value === SearchStatus.ERROR)

    // 格式化搜索结构
    const formatSearchData = computed((): MusicItem[] => {
        return searchResults.value.map(item => {
            return {
                id: item.id,
                name: item.name,
                artist: item.artists.join(' - '),
                album: item.sources[0],
                duration: item.duration,
                cover: item.cover_url.replace(/http:\/\/p\d+\.music\.126\.net/g, '/music-img')
            }
        });
    })

    // ======================== action ========================
    // 搜索音乐
    const search = async (keyword: string) => {
        // 设置状态为加载中
        searchStatus.value = SearchStatus.LOADING
        // 设置当前搜索关键词
        currentKeyword.value = keyword

        // 发送请求
        try {
            const response = await searchMusic(keyword)
            // 设置状态为成功
            searchStatus.value = SearchStatus.SUCCESS
            // 设置搜索结果
            searchResults.value = response.data
        } catch (error: any) {
            // 设置状态为错误
            searchStatus.value = SearchStatus.ERROR
            // 设置错误信息
            errorMessage.value = error.message
        }
    }

    return {
        // state
        searchStatus,
        searchResults,
        currentKeyword,
        errorMessage,
        lastSearch,

        // getter
        isLoading,
        hasResults,
        hasError,
        formatSearchData,

        // action
        search
    }
})

// 导出类型
export type MusicSearchStore = ReturnType<typeof useMusicSearchStore>
