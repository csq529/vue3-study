<!--
 * @Author: cui
 * @Date: 2022-01-19 09:51:12
 * @LastEditTime: 2022-01-19 10:12:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue3-jsj/src/views/computed.vue
-->
<template>
  <button @click="add">add</button>
  <div>{{ num }}</div>
  <div>{{ doubleNum }}</div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  setup() {
    let num = ref(0)

    function add () {
      num.value = num.value + 1
    }
    const doubleNum = computed(() => num.value * 2)
    return {
      num,
      doubleNum,
      add
    }
  }
}
</script>

<style>

</style>