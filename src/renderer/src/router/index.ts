import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 登录/注册页面
import SignUpLayout from '@renderer/layout/SignUpLayout/index.vue'

// 主页面
import MainLayout from '@renderer/layout/MainPageLayout/index.vue'
// 主页面 - 信息页面（喜欢、下载、最近播放等）
import InformationPage from '@renderer/components/InformationPage/index.vue'
// 主页面 - 搜索页面
import MusicSearch from '@renderer/components/MusicSearch/index.vue'
// 主页面 - 首页
import MainPage from '@renderer/views/ContentPage/main-page.vue'

// 播放页面
import PlayLayout from '@renderer/layout/PlayLayout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/mainLayout'
  },
  {
    path: '/signUpLayout',
    name: 'SignUpLayout',
    component: SignUpLayout
  },
  {
    path: '/mainLayout',
    name: 'MainLayout',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'MainPage',
        component: MainPage
      },
      {
        path: 'musicSearch',
        name: 'MusicSearch',
        component: MusicSearch
      },
      {
        path: 'informationPage',
        name: 'InformationPage',
        component: InformationPage
      }
    ]
  },
  {
    path: '/playLayout',
    name: 'PlayLayout',
    component: PlayLayout
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router