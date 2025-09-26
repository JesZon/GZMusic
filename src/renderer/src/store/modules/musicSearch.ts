import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { searchMusic } from '@renderer/api/MusicSearch'
import type { MusicSearchItem } from '@renderer/entity/MusicSearch'

// 导入类型、枚举
import * as musicEnum from "@renderer/store/musicEnum"
import * as musicType from "@renderer/store/musicType"


export const useMusicSearchStore = defineStore('musicSearch', () => {
    // ======================== satate ========================
    // 搜索状态
    const searchStatus = ref<musicEnum.SearchStatus>(musicEnum.SearchStatus.IDLE)

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
    const isLoading = computed(() => searchStatus.value === musicEnum.SearchStatus.LOADING)

    // 是否有搜索结果
    const hasResults = computed(() => searchResults.value.length > 0)

    // 是否有错误
    const hasError = computed(() => searchStatus.value === musicEnum.SearchStatus.ERROR)

    // 格式化搜索结构
    const formatSearchData = computed((): musicType.MusicItem[] => {
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
        searchStatus.value = musicEnum.SearchStatus.LOADING
        // 设置当前搜索关键词
        currentKeyword.value = keyword

        // 发送请求
        try {
            const response = await searchMusic(keyword)
            // 设置状态为成功
            searchStatus.value = musicEnum.SearchStatus.SUCCESS
            // 设置搜索结果
            searchResults.value = response.data
        } catch (error: any) {
            // 设置状态为错误
            searchStatus.value = musicEnum.SearchStatus.ERROR
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
