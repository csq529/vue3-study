<!--
 * @Author: cui
 * @Date: 2022-01-19 13:56:34
 * @LastEditTime: 2022-01-19 14:03:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue3-jsj/src/components/ChildComponent.vue
-->
<template>
  <div>{{ userName }}</div>
  <button @click="changeName">changeName</button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
const user = defineProps({
  userName: {
    type: String,
    default: 'c',
    required: true
  }
})

const emit = defineEmits(['changeUserName'])

function changeName() {
  emit('changeUserName')
}
</script>

<style>

</style>
