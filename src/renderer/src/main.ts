import './assets/main.css'

// 额外引入图标库
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import { createApp } from 'vue'
import App from './App.vue'

import pinia from "@renderer/store/index"

const app = createApp(App)
app.use(pinia)
app.use(ArcoVueIcon)
app.mount('#app')
