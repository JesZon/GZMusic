import './assets/main.css'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupStore } from './store'

const app = createApp(App);
app.use(ArcoVue);
app.use(router);
setupStore(app);
app.mount('#app');
