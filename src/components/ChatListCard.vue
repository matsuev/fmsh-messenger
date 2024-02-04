<template>
   <q-item class="q-my-xs q-py-sm" clickable v-ripple>
      <q-item-section avatar>
         <q-avatar :style="{ 'background-color': color }" text-color="white">
            <span>{{ chat.fl }}</span>
         </q-avatar>
      </q-item-section>

      <q-item-section>
         <q-item-label class="text-weight-medium">{{ chat.title }}</q-item-label>
         <!-- <q-item-label caption lines="2">{{ contact.un }}</q-item-label> -->
      </q-item-section>

      <q-item-section side>
         <q-icon name="chat_bubble_outline" color="primary" />
      </q-item-section>
   </q-item>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['chat'])

const color = computed(() => '#' + props['chat'].id.slice(0, 6))
</script>

<style>
.contact-list-card {
   padding: 10px;
}
</style>
