import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    // 默认主页面
    path: '/',
    redirect: '/mainLayout'
  },
  {
    // 登录/注册页面
    path: '/signUpLayout',
    name: 'SignUpLayout',
    component: () => import('@renderer/layout/SignUpLayout/index.vue')
  },
  {
    // 主页面
    path: '/mainLayout',
    name: 'MainLayout',
    component: () => import('@renderer/layout/MainPageLayout/index.vue'),
    children: [
      {
        // 主页面 - 首页
        path: '',
        name: 'MainPage',
        component: () => import('@renderer/views/ContentPage/main-page.vue')
      },
      {
        // 主页面 - 搜索页面
        path:'musicSearch',
        name: 'MusicSearch',
        component: () => import('@renderer/components/MusicSearch/index.vue')
      },
      {
        // 主页面 - 信息页面
        path: 'informationPage',
        name: 'InformationPage',
        component: () => import('@renderer/components/InformationPage/index.vue')
      }
    ]
  },
  {
    // 播放页面
    path: '/playLayout',
    name: 'PlayLayout',
    component: () => import('@renderer/layout/PlayLayout/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router