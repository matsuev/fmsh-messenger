<template>
   <div class="app-layout" :class="appLayout">
      <SidebarView class="app-layout__sidebar" />
      <MainView class="app-layout__main" />
   </div>
</template>

<script setup>
import SidebarView from '@/views/SidebarView.vue'
import MainView from '@/views/MainView.vue'
import { useAppCore } from './core'
import { computed } from 'vue'

const $app = useAppCore()

const appLayout = computed(() => ($app.Core().appReady ? 'app-ready' : ''))
</script>

<style>
.app-layout {
   height: 100%;
   max-height: 100%;
   width: 100%;
   position: relative;
   display: flex;
   flex-direction: row;
   flex-wrap: nowrap;
}

.app-layout__sidebar {
   max-height: 100%;
   flex-grow: 0;
   width: 0;
   transition: width 0.1s ease-in;
}

.app-layout__main {
   flex-grow: 1;
   border-left: 1px solid #ccc;
   overflow: hidden;
}

.app-ready .app-layout__sidebar {
   width: 310px;
}
</style>
