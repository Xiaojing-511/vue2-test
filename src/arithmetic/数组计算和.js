/*
 * @Author: your name
 * @Date: 2021-09-08 17:18:56
 * @LastEditTime: 2021-09-08 17:36:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/arithmetic/数组计算和.js
 */
// 数组求和
function sum(arr){
    return arr.toString().split(',').reduce((total,i) => total += parseInt(i),0)
}
console.log('1',sum([1,2,3]));
console.log('2',sum([1,2,3,[4,5]]));

// 递归实现
function recursiveSum(arr){
    if(arr.length === 1) return arr[0];
    return arr[0] + recursiveSum(arr.slice(1))
}
console.log('recursive',recursiveSum([1,2,3]));
