import { MusicSearchItem } from '@renderer/entity/MusicSearch'
/**
 * ApiResult 接口返回结果类
 */

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
