import { defineStore } from 'pinia'
import { markRaw } from 'vue'

import contacts from '@/dataset/contacts.js'

export const useContactStore = defineStore('contacts', {
   state: () => ({
      list: contacts
   }),

   getters: {
      raw: (state) => markRaw(state.list),
      all: (state) => Object.values(state.list)
   },

   actions: {
      Delete(id) {
         delete this.list[id]
      }
   }
})
