/*
 * @Author: your name
 * @Date: 2021-08-22 09:16:18
 * @LastEditTime: 2021-08-24 17:15:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/router/index.js
 */
import Vue from 'vue';
import VueRouter from 'vue-router'
const routes = [
    { 
        path: '/',
        redirect: '/test',
    },
    {
        path: '/entrust',
        name: 'EventEntrust',
        component: () => import('../components/EventEntrust.vue')
    },
    {
        path: '/test',
        name: 'Test',
        component: () => import('../components/Test.vue')
    },
]
Vue.use(VueRouter);
const router = new VueRouter({
    routes
})
export default router