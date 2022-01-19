<!--
 * @Author: cui
 * @Date: 2022-01-19 13:56:18
 * @LastEditors: cui
 * @LastEditTime: 2022-01-19 14:13:17
 * @FilePath: /vue3-jsj/src/views/parent.vue
 * @Description: 父子组件传值
-->
<template>
  <div>Parent</div>
  <child-component
    :userName="userName"
    @changeUserName="changeUserName"/>
</template>

<script setup>
import { ref } from 'vue'
import ChildComponent from '@/components/ChildComponent'
const name = 'csq'
const userName = ref(name)

function changeUserName() {
  userName.value = 'cui'
}
</script>

<style>

</style>
