/*
 * @Author: cui
 * @Date: 2022-01-17 18:04:47
 * @LastEditors: cui
 * @LastEditTime: 2022-01-24 11:41:03
 * @FilePath: /vue3-jsj/src/main.js
 * @Description: 
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// 引入store
import store from './store'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount("#app")
