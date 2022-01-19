<!--
 * @Author: cui
 * @Date: 2022-01-19 09:39:36
 * @LastEditTime: 2022-01-19 09:41:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue3-jsj/src/views/watch.vue
-->
<template>
  <div>{{ count }}</div>
  <button @click="add">add</button>
</template>

<script>
import { ref, watch } from 'vue'
export default {
  setup() {
    let count = ref(0)

    function add () {
      count.value = count.value + 1
    }

    watch(count, (newVal, oldVal) => {
      console.log('newVal:', newVal)
      console.log('oldVal:', oldVal)
    })
    return {
      count,
      add
    }
  }
}
</script>

<style>

</style>