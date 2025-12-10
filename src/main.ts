import { createApp } from 'vue'
import App from './App.vue'
import router from '@core/router'
import './style.css'
import { VueQueryPlugin } from '@tanstack/vue-query'

createApp(App).use(router).use(VueQueryPlugin).mount('#app')
