// 音乐搜索模块接口
import axios from 'axios'

// 数据实体
import { MusicSearchItem } from '@renderer/entity/MusicSearch'

// 返回响应
import { ApiResponse, MusicSearchResponse } from '@renderer/api/ApiResult'

// 基础API配置
const BASE_URL = '/api/gz-client/music'


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


/**
 * 获取音乐播放地址
 * @param music_id 歌曲id
 * @returns Promise<ApiResponse<string>>
 */
export const getMusicUrl = async (music_id: string): Promise<ApiResponse<string>> => {
  const url = `${BASE_URL}/url?musicId=${music_id}`
  const response = await axios.get<ApiResponse<string>>(url)
  return response.data
}


// 默认导出
export default {
  searchMusic,
  getMusicUrl
}