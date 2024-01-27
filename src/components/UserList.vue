<template>
   <div>
      <UserCard v-for="(item, idx) in users" :key="idx" :user="item" />
   </div>
</template>

<script setup>
import UserCard from './UserCard.vue';

defineProps(['users'])
</script>