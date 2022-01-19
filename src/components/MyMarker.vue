<!--
 * @Author: cui
 * @Date: 2022-01-19 14:53:22
 * @LastEditors: cui
 * @LastEditTime: 2022-01-19 15:02:43
 * @FilePath: /vue3-jsj/src/components/MyMarker.vue
 * @Description: MyMarker
-->

<template>
  <div>{{ location }}</div>
  <div>{{ geoLocation.longitude }} - {{ geoLocation.latitude }}</div>
  <button @click="updateUserLocation">修改地址</button>
</template>

<script setup>
import { inject } from 'vue'
const location = inject('location', 'ShangHai')
const geoLocation = inject('geolocation')
const updateUserLocation = inject('updateLocation')
</script>

<style>

</style>
