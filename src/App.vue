<template>
   <div>
      <h1>App</h1>
      <input v-model="query" />
      <UserList :users="users.search(query)" />
      <button @click="userAdd">Добавить</button>
   </div>
</template>

<script setup>
import UserList from '@/components/UserList.vue'
import { useUserStore } from '@/store/users.js'
import { ref } from 'vue'

const query = ref('')
const users = useUserStore()

function userAdd()
{
   users.AddUser({
      id: 3,
      name: 'hjdsagfjhasgdhjgasdkjf'
   })
}

</script>