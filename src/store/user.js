/*
 * @Author: cui
 * @Date: 2022-01-24 11:43:46
 * @LastEditors: cui
 * @LastEditTime: 2022-01-24 13:59:13
 * @FilePath: /vue3-jsj/src/store/user.js
 * @Description: 
 */

import { defineStore } from "pinia"

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      name: 'cui'
    }
  },
  getters: {
    fullName: state => state.name + ' getters'
  },
  actions: {
    updateName(name) {
      this.name = name
    }
  },
   // 开启数据缓存
   persist: {
    enabled: true
  },
  // strategies: [
  //   {
  //     key: 'my_user',
  //     storage: localStorage,
  //     paths: ['name', 'age']
  //   }
  // ]
})
