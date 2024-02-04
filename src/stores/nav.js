import { defineStore } from 'pinia'

export const useNavStore = defineStore('nav', {
   state: () => ({
      btns: [
         {
            name: 'contacts',
            tooltip: 'Контакты',
            icon: 'alternate_email'
         },
         {
            name: 'chats',
            tooltip: 'Чаты',
            icon: 'chat_bubble_outline'
         },
         {
            name: 'channels',
            tooltip: 'Каналы',
            icon: 'tag'
         },
         {
            name: 'settings',
            tooltip: 'Настройки',
            icon: 'tune'
         }
      ]
   }),

   getters: {
      buttons: (state) => state.btns
   },

   actions: {}
})
