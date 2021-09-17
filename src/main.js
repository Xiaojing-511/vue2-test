/*
 * @Author: your name
 * @Date: 2021-08-11 18:43:57
 * @LastEditTime: 2021-09-14 21:30:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
