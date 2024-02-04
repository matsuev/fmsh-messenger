import { defineStore } from 'pinia'

import chats from '@/dataset/chats.js'

export const useChatStore = defineStore('chat', {
   state: () => ({
      list: chats
   }),

   getters: {
      all: (state) => Object.values(state.list)
   },

   actions: {
      Delete(id) {
         delete this.list[id]
      }
   }
})
