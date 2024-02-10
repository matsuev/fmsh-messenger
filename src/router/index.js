import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProfileView from '@/views/ProfileView.vue'
import UserProfile from '@/views/UserProfile.vue'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),

   routes: [
      {
         path: '/',
         name: 'home',
         component: HomeView
      },
      {
         path: '/v2/about',
         name: 'about',
         component: AboutView
      },
      {
         path: '/v2/profile',
         name: 'profile',
         component: ProfileView
      },
      {
         path: '/v2/profile/:id',
         name: 'user',
         component: UserProfile
      }


   ]

})

export default router
