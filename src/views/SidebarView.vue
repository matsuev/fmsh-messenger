<template>
   <div>
      <div class="sidebar-layout">
         <RouterView class="sidebar-layout__router" v-slot="{ Component }">
            <transition name="fade" mode="out-in">
               <KeepAlive>
                  <component :is="Component" />
               </KeepAlive>
            </transition>
         </RouterView>

         <NavigateView class="sidebar-layout__navigate" />
      </div>
   </div>
</template>

<script setup>
import NavigateView from '@/views/sidebar/NavigateView.vue'
</script>

<style>
.sidebar-layout {
   height: 100%;
   display: grid;
   grid-template-rows: 1fr 58px;
   grid-template-columns: 1fr;
   grid-template-areas:
      'head'
      'list';
}

.sidebar-layout__router {
   grid-area: head;
   overflow: hidden;
}

.sidebar-layout__navigate {
   grid-area: list;
   border-top: 1px solid #ccc;
}
</style>
