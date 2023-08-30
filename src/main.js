import { createApp } from 'vue'
import './stylesheet/style.scss'
import App from './App.vue'
import router from "./router/router.js";

createApp(App).use(router).mount('#app')
