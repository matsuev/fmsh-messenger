import { defineStore } from 'pinia'

import { useCoreStore } from '@/stores/core.js'
import { useNavStore } from '@/stores/nav.js'
import { useContactStore } from '@/stores/contacts.js'
import { useChatStore } from '@/stores/chats.js'

export const useAppCore = defineStore('app', {
   getters: {
      Core: () => useCoreStore,
      Nav: () => useNavStore,
      Contacts: () => useContactStore,
      Chats: () => useChatStore,
      Route: (state) => () => state.$router.currentRoute,
      Router: (state) => () => state.$router
   },

   actions: {}
})
