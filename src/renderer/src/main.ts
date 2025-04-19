import './assets/main.css'
import './assets/tailwind.css'

// 额外引入图标库
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(ArcoVueIcon)
app.mount('#app')
