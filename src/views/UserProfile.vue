<template>
   <h1>User Profile</h1>
   <UserCard :userid="$route.params.id" />
</template>

<script setup>
import UserCard from '../components/UserCard.vue';
</script>

