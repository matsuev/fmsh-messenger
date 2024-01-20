<template>
   <el-row>
      <el-button :icon="Search" circle @click="switchTab('users')" />
      <el-button :icon="Edit" circle @click="switchTab('groups')" />
      <el-button :icon="Check" circle @click="switchTab('third')" />
      <el-button :icon="Message" circle />
   </el-row>
   <div>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
         <el-tab-pane label="Контакты" name="users">
            <UserList />
         </el-tab-pane>
         <el-tab-pane label="Группы" name="groups">
            <GroupList />
         </el-tab-pane>
         <el-tab-pane label="Role" name="third">Role</el-tab-pane>
         <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
      </el-tabs>
   </div>
</template>

<script setup>
import { ref } from 'vue'
import UserList from '@/components/UserList.vue'
import GroupList from '@/components/GroupList.vue'
import { Check, Edit, Message, Search } from '@element-plus/icons-vue'

const activeName = ref('groups')

function switchTab(name)
{
   activeName.value = name
}
</script>