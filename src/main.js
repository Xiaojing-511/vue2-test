/*
 * @Author: your name
 * @Date: 2021-08-11 18:43:57
 * @LastEditTime: 2021-08-22 09:33:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
