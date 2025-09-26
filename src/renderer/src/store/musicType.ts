import type { MusicSearchItem } from '@renderer/entity/MusicSearch'

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