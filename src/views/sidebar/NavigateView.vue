<template>
   <div>
      <div class="nav-buttons">
         <q-btn
            v-for="(btn, idx) in $app.Nav().buttons"
            :key="idx"
            flat
            round
            :color="btnColor(btn.name)"
            :icon="btn.icon"
            :ripple="{ center: true }"
            @click="openView(btn.name)"
            ><q-tooltip
               transition-show="scale"
               transition-hide="scale"
               class="bg-indigo text-body2"
               :offset="[0, 10]"
               >{{ btn.tooltip }}</q-tooltip
            >
         </q-btn>
      </div>
   </div>
</template>

<script setup>
import { useAppCore } from '@/core'

const $app = useAppCore()

function btnColor(name) {
   return name == $app.Route().name ? 'primary' : 'blue-grey-3'
}

function openView(name) {
   $app.Router().push({ name: name })
   $app.Core().SetMainView(name)
}
</script>

<style>
.nav-buttons {
   display: flex;
   padding: 6px 14px 6px 8px;
   justify-content: space-around;
   user-select: none !important;
}

.nav-buttons button {
   font-size: 15px !important;
}

.badge-bottom sup {
   top: 33px !important;
   right: calc(1px + var(--el-badge-size) / 2) !important;
}
</style>
