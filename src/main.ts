import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import Vue3SimpleHtml2pdf from 'vue3-simple-html2pdf'
const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(Vue3SimpleHtml2pdf as any)

app.mount('#app')
