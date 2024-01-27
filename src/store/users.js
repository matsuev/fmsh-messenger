import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
   state: () => ({
      list: [
         {
            id: 1,
            name: {
               first: 'Alex',
               second: 'Matsuev'
            },
            username: 'ghjgkjgjkhg',
            deleted: false
         },
      ],
   }),

   getters: {
      search: (state) =>
         (queryString) =>
            state.list.filter((item) =>
               item.name.first.toLowerCase().startsWith(queryString) ||
               item.name.second.toLowerCase().startsWith(queryString)
            )
   },

   actions: {
      AddUser(user)
      {
         this.list.push(user)
      }
   },
})