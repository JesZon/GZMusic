// 音乐搜索模块接口
import axios from 'axios'

// 基础API配置
const BASE_URL = '/api/gz-client/music'

// 音乐搜索响应数据类型定义 - 对应后端MusicResponse
export interface MusicSearchItem {
  // 歌曲名
  name: string
  // 歌曲 id
  id: string
  // GZMusic 歌曲 id -- 为本地服务设置的id
  GZMusic_id: string
  // 艺术家名称
  artists: string[]
  // 音乐来源 例如：某某电影 、 电视剧等
  sources: string[]
  // 歌曲封面 url
  cover_url: string
  // 音乐封面id
  pic_id: string
  // 歌词id
  lyric_id: string
  // 歌词内容
  lyric: string[]
  // 发布时间
  release_time: string
  // 歌曲 url
  url: string
  // 歌曲时长
  duration: string
}

// API响应基础结构
export interface ApiResponse<T> {
  code: number
  message: string
  data: T
}

// 音乐搜索响应类型
export interface MusicSearchResponse {
  list: MusicSearchItem[]
  total?: number
  page?: number
  pageSize?: number
}

/**
 * 音乐搜索API
 * @param keyword 搜索关键词
 * @returns Promise<ApiResponse<MusicSearchItem[]>>
 */
export const searchMusic = async (keyword: string): Promise<ApiResponse<MusicSearchItem[]>> => {
  const encodedKeyword = encodeURIComponent(keyword.trim())
  const url = `${BASE_URL}/search/${encodedKeyword}`
  
  const response = await axios.get<ApiResponse<MusicSearchItem[]>>(url)
  return response.data
}


// 默认导出
export default {
  searchMusic
}