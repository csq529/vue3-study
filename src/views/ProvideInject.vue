<!--
 * @Author: cui
 * @Date: 2022-01-19 14:50:43
 * @LastEditors: cui
 * @LastEditTime: 2022-01-19 15:03:59
 * @FilePath: /vue3-jsj/src/views/ProvideInject.vue
 * @Description: provide & inject
-->
<template>
  <MyMarkerVue/>
</template>

<script setup>
import MyMarkerVue from '../components/MyMarker.vue'
import { provide, ref, reactive, readonly } from 'vue'

const location = ref('North Pole')
const geolocation = reactive({
  longitude: 90,
  latitude: 135
})

function updateLocation() {
  location.value = 'South Pole'
}

provide('location', readonly(location))
provide('geolocation', readonly(geolocation))
provide('updateLocation', updateLocation)
</script>

<style>

</style>