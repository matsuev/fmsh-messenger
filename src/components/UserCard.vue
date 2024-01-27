<template>
   <div>
      <div class="avatar">{{ avatarLetters }}</div>
      id: {{ user.id }}, name: {{ user.name }}
   </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps(['user'])

const avatarLetters = computed(() =>
   props.user.name.first[0].toUpperCase() + props.user.name.second[0].toUpperCase()
)

</script>

<style>
.avatar {
   text-align: center;
   width: 32px;
   line-height: 32px;
   border: 1px solid red;
   border-radius: 50%;
}
</style>