/*
 * @Author: your name
 * @Date: 2021-08-24 17:08:53
 * @LastEditTime: 2021-08-24 17:14:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/js/object_create.js
 */
// 手写 Object.create(obj) 将传入的对象obj作为原型
function myCreate(obj){
    function F(){}
    F.prototype = obj;
    return new F()
}
const testObj = {
    name: 'ceshi'
}
const obj = myCreate(testObj);
console.log('obj', obj);