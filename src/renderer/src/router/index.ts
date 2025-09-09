import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 登录/注册页面
import SignUpLayout from '@renderer/layout/SignUpLayout/index.vue'

// 主页面
import MainLayout from '@renderer/layout/MainPageLayout/index.vue'

// 播放页面
import PlayLayout from '@renderer/layout/PlayLayout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/playLayout'
  },
  {
    path: '/signUpLayout',
    name: 'SignUpLayout',
    component: SignUpLayout
  },
  {
    path: '/mainLayout',
    name: 'MainLayout',
    component: MainLayout
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