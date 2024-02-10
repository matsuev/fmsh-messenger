import { defineStore } from 'pinia'

import { users } from '@/dataset/users.js'

export const useUserStore = defineStore('users', {
   state: () => ({
      list: users,
   }),

   getters: {
      all: (state) => Object.values(state.list),
      user: (state) => (userId) => state.list[userId]
   }

})
