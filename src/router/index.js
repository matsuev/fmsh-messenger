import { createRouter, createWebHistory } from 'vue-router'

import { useAppCore } from '@/core'

import BlankView from '@/views/sidebar/HomeView.vue'

import ContactList from '@/views/sidebar/ContactList.vue'
import ChatList from '@/views/sidebar/ChatList.vue'
import ChannelList from '@/views/sidebar/ChannelList.vue'
import SettingsList from '@/views/sidebar/SettingsList.vue'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: 'home',
         component: BlankView,
         meta: {
            authRequired: true
         }
      },
      {
         path: '/contacts/:id*',
         name: 'contacts',
         component: ContactList,
         props: true,
         meta: {
            authRequired: true
         }
      },
      {
         path: '/chats/:id*',
         name: 'chats',
         component: ChatList,
         props: true,
         meta: {
            authRequired: true
         }
      },
      {
         path: '/channels/:id*',
         name: 'channels',
         component: ChannelList,
         props: true,
         meta: {
            authRequired: true
         }
      },
      {
         path: '/settings/:id*',
         name: 'settings',
         component: SettingsList,
         props: true,
         meta: {
            authRequired: true
         }
      }
   ]
})

router.beforeEach(() => {
   // if (to.name == 'home') {
   useAppCore().Core().SetState('ready')
   // }

   return true
})

export default router
