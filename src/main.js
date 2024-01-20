// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import ruRu from 'element-plus/dist/locale/ru.mjs'


import App from './App.vue'
// import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus, {
   locale: ruRu,
   size: 'default'
})
// app.use(router)

app.mount('#app')
