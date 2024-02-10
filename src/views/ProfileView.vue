<template>
   <h1>Profile</h1>
   <ul>
      <li v-for="user in users.all" :key="user.id">
         <div @click="openUserProfile(user.id)">{{ user.name }}</div>
      </li>
   </ul>
</template>

<script setup>
import { useUserStore } from '@/stores/users.js';
import { useRouter } from 'vue-router'

const router = useRouter()

const users = useUserStore()

function openUserProfile(id)
{
   router.push({
      name: 'user',
      params: {
         id:
            id
      }
   })
}
</script>