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