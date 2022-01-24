/*
 * @Author: cui
 * @Date: 2022-01-24 11:40:43
 * @LastEditors: cui
 * @LastEditTime: 2022-01-24 11:58:23
 * @FilePath: /vue3-jsj/src/store/index.js
 * @Description: 
 */
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()
store.use(piniaPluginPersist)

export default store