<!--
 * @Author: your name
 * @Date: 2022-01-17 16:47:37
 * @LastEditTime: 2022-01-17 18:15:27
 * @LastEditors: Please set LastEditors
 * @FilePath: /vue3-1.0/src/App.vue
-->
<template>
  <div @click="loginTo">home</div>
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
        // eslint-disable-next-line no-console
        console.log("resss:::::", res)
      });
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
