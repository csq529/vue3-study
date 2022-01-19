<!--
 * @Author: cui
 * @Date: 2022-01-19 14:14:53
 * @LastEditors: cui
 * @LastEditTime: 2022-01-19 14:31:22
 * @FilePath: /vue3-jsj/src/views/LifeCycle.vue
 * @Description: 生命周期
-->
<template>
  <div ref="LifeCycle">生命周期</div>
</template>

<script setup>
/**
 * 因为 setup 是围绕 beforeCreate 和 created 生命周期钩子运行的， 所以不需要显示的定义它们，换句话说，在这些钩子中编写的任何代码都应该直接在 setup 函数中编写
 */
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured, onRenderTracked, onRenderTriggered, onActivated, onDeactivated } from 'vue'
onBeforeMount(() => {
  console.log('onBeforeMount')
})

onMounted(() => {
  console.log('onMounted')
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})

onUnmounted(() => {
  console.log('onUnmounted')
})
</script>

<style>

</style>
