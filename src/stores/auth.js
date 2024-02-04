import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
   state: () => ({
      auth: true
   }),

   getters: {
      isAuthorized: (state) => state.auth
   },

   actions: {
      SetAuth(v) {
         this.auth = v
      }
   }
})
