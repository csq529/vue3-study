<!--
 * @Author: cui
 * @Date: 2022-01-24 11:42:43
 * @LastEditors: cui
 * @LastEditTime: 2022-01-24 11:54:16
 * @FilePath: /vue3-jsj/src/views/pinia.vue
 * @Description: pinia
-->

<template>
  <div>
    <div>获取state：{{ userStore.name }}</div>
    <!-- <div>结合computed获取state：{{ name }}</div> -->
    <div>解构：{{ name }}</div>
    <div>getters：{{ fullName }}</div>
  </div>
</template>

<script setup>
import { useUserStore } from '../store/user'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
const userStore = useUserStore()
// 结合computed获取state
// const name = computed(() => userStore.name)

// state也可以使用解构，但解构会使其失去响应式，可以使用pinia的storeToRefs
const { name } = storeToRefs(userStore)
userStore.updateName('csq')
const fullName = userStore.fullName
</script>

<style>

</style>
