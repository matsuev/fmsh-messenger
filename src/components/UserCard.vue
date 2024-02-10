<template>
   <div>
      <h2>User card</h2>
      <strong>
         <div>UserName: {{ users.user(userid).name }}</div>
         <div>Email: {{ users.user(userid).email }}</div>
      </strong>

   </div>
</template>

<script setup>
import { useUserStore } from '@/stores/users.js';

const users = useUserStore()


defineProps(['userid'])
</script>