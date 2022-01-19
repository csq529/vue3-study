<template>
  <div>{{ count }}</div>
  <button @click="add">add</button>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    let count = ref(0)
    function add () {
      count.value = count.value + 1
      console.log('count:', count)
    }
    return {
      count,
      add
    }
  }
}
</script>

<style>

</style>