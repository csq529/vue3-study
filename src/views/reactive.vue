
<template>
  <div>{{ userInfo.name }}</div>
  <button @click="changeUserInfo">changeUserInfo</button>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup() {
    let userInfo = reactive({
      name: 'cui',
      age: 18
    })
    function changeUserInfo () {
      userInfo.name = 'csq'
      console.log('userInfo:', userInfo)
    }
    return {
      userInfo,
      changeUserInfo
    }
  }
}
</script>

<style>

</style>