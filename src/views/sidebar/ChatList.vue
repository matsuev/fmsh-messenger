<template>
   <div>
      <div style="max-width: 310px" class="contact-list-layout">
         <div class="contact-list-layout__header">
            <q-item-section>
               <q-item-label class="text-center text-h6 q-pt-sm">Чаты</q-item-label>
            </q-item-section>

            <q-item-section>
               <q-input
                  class="q-pa-sm"
                  outlined
                  v-model="q"
                  dense
                  clearable
                  debounce="150"
                  placeholder="Найти"
                  clear-icon="clear"
               >
                  <template v-slot:prepend>
                     <q-icon name="person_search" />
                  </template>
               </q-input>
            </q-item-section>

            <q-item-section>
               <q-item-label class="text-center" caption lines="1"
                  ><span v-if="query.length > 0">Найдено: </span><span v-else>Всего:</span>
                  {{ chats.length }}</q-item-label
               >
            </q-item-section>
         </div>

         <q-virtual-scroll
            class="contact-list-layout__list"
            :items="chats"
            :items-size="chats.length"
            :virtual-scroll-item-size="61"
            separator
            v-slot="{ item }"
         >
            <ChatListCard :key="item.id" :chat="item" @click="DeleteChat(item.id)" />
         </q-virtual-scroll>
      </div>
   </div>
</template>

<script setup>
import { useAppCore } from '@/core'
import { ref, computed } from 'vue'

import ChatListCard from '@/components/ChatListCard.vue'

const $app = useAppCore()

const q = ref('')

const query = computed(() => (q.value == null ? '' : q.value))

const chats = computed(() =>
   $app
      .Chats()
      .all.filter((item) => {
         let result = true

         query.value
            .toLocaleLowerCase()
            .split(' ')
            .forEach((qp) => {
               result &= item.title.toLocaleLowerCase().includes(qp)
            })

         return result
      })
      .sort((a, b) => {
         if (a.title > b.title) {
            return 1
         } else if (a.title < b.title) {
            return -1
         } else {
            return 0
         }
      })
)

function DeleteChat(id) {
   $app.Chats().Delete(id)
}
</script>

<style>
.contact-list-layout {
   height: 100%;
   display: grid;
   grid-template-rows: 110px 1fr;
   grid-template-columns: 1fr;
   grid-template-areas:
      'head'
      'list';
}

.contact-list-layout__header {
   grid-area: head;
   border-bottom: 1px solid #ccc;
}

.contact-list-layout__list {
   grid-area: list;
   max-height: 100%;
}

.contact-list-layout__title {
   text-align: center;
   font-weight: 600;
   padding: 12px;
}
</style>
