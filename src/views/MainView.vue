<template>
   <div class="main-layout">
      <transition name="fade" mode="out-in">
         <KeepAlive>
            <component :is="viewComponent" />
         </KeepAlive>
      </transition>
   </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAppCore } from '@/core'

import DefaultMainView from '@/views/main/DefaultMainView.vue'
import ContactsMainView from '@/views/main/ContactsMainView.vue'
import ChatsMainView from '@/views/main/ChatsMainView.vue'
import ChannelsMainView from '@/views/main/ChannelsMainView.vue'
import SettingsMainView from '@/views/main/SettingsMainView.vue'

const $app = useAppCore()

// const props = defineProps(['view'])

const viewComponent = computed(() => {
   switch ($app.Core().mainView) {
      case 'contacts':
         return ContactsMainView
      case 'chats':
         return ChatsMainView
      case 'channels':
         return ChannelsMainView
      case 'settings':
         return SettingsMainView
      default:
         return DefaultMainView
   }
})
</script>

<style>
.main-layout {
   padding: 12px;
}
</style>
