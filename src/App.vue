<template>
   <div id="AppLayout" class="b-box">
      <HeaderView class="layout-header b-box" />
      <SidebarView class="layout-sidebar b-box" />
      <MainView class="layout-main b-box" />
      <FooterView class="layout-footer b-box" />
   </div>
</template>

<script setup>
import HeaderView from '@/views/HeaderView.vue'
import SidebarView from '@/views/SidebarView.vue'
import MainView from '@/views/MainView.vue'
import FooterView from '@/views/FooterView.vue'
</script>

<style>
.b-box {
   box-sizing: border-box;
}

html,
body {
   height: 100vh;
   margin: 0;
   padding: 0;
   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen-Sans, Ubuntu, Cantarell,
      "Helvetica Neue", sans-serif;
   font-size: 1em;
}

#app {
   height: inherit;
}

#AppLayout {
   display: block;
   position: relative;
   height: inherit;
   display: grid;
   grid-template-columns: 320px 1fr;
   grid-template-rows: 80px 1fr 32px;
   grid-template-areas:
      "sidebar header"
      "sidebar main"
      "footer footer";
}

.layout-header {
   grid-area: header;
}

.layout-sidebar {
   grid-area: sidebar;
   border-right: 1px solid #ccc;
}

.layout-main {
   grid-area: main;
}

.layout-footer {
   grid-area: footer;
   background-color: orange;
}
</style>