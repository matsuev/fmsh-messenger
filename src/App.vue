<template>
   <h1>My super application</h1>
   <AppNavigation />
   <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppNavigation from '@/components/AppNavigation.vue'
</script>