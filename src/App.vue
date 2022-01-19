<!--
 * @Author: your name
 * @Date: 2022-01-17 16:47:37
 * @LastEditTime: 2022-01-19 09:31:17
 * @LastEditors: Please set LastEditors
 * @FilePath: /vue3-1.0/src/App.vue
-->
<template>
  <router-view></router-view>
</template>
<script>
import { login } from "./api/login";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {};
  },
  methods: {
    loginTo() {
      let lockUserName = "2f6590fd0ae44bb8811099b5bcec27ec$EF$c2hpcWlhbmcuY3Vp";
      let soId = "";
      let lockPassword = "f15f101a7b8ae9e3638ac95751202af7$EF$YTEyMzQ1Ng==";

      let data =
        "username=" +
        lockUserName +
        "&sourcecode=" +
        soId +
        "&password=" +
        lockPassword
      login(data).then((res) => {
        console.log("resss:::::", res);
      })
    }
  }
})
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
