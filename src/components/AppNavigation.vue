<template>
   <div>
      <button @click="goTo('home')">Home</button>
      <button @click="goTo('about')">About</button>
      <button @click="goTo('profile')">Profile</button>
   </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goTo(linkName)
{
   router.push({ name: linkName })
}

</script>