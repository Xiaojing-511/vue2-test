<!--
 * @Author: your name
 * @Date: 2021-08-11 18:43:57
 * @LastEditTime: 2021-08-22 09:36:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/App.vue
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'alpinejs';
import 'petite-vue'
export default {
  name: 'App'
}
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
