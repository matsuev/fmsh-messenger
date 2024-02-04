import './assets/styles.css'

import { createApp, unref } from 'vue'
import { createPinia } from 'pinia'

import { Quasar, Loading } from 'quasar'
import quasarLang from 'quasar/lang/ru'
import quasarIconSet from 'quasar/icon-set/svg-material-icons'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Import Global componenets

// import DefaultView from '@/views/main/DefaultView.vue'
// import UserMainView from '@/views/main/UserMainView.vue'
// import GroupMainView from '@/views/main/GroupMainView.vue'
// import ChannelMainView from '@/views/main/ChannelMainView.vue'
// import SettingsMainView from '@/views/main/SettingsMainView.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()
pinia.use(({ store }) => {
   store.$router = unref(router)
})

app.use(pinia)
app.use(router)

app.use(Quasar, {
   // import Quasar plugins and add here
   plugins: {
      Loading
   },
   lang: quasarLang,
   iconSet: quasarIconSet
})

// Define global componenets

// app.component('DefaultView', DefaultView)
// app.component('UserMainView', UserMainView)
// app.component('GroupMainView', GroupMainView)
// app.component('ChannelMainView', ChannelMainView)
// app.component('SettingsMainView', SettingsMainView)

app.mount('#app')
