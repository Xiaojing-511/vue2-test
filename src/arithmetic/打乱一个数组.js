/*
 * @Author: your name
 * @Date: 2021-09-08 16:57:43
 * @LastEditTime: 2021-09-08 17:07:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/arithmetic/打乱一个数组.js
 */
// 打乱一个数组
// 思想： 取第一个元素并与随机出来的索引对应的元素交换 第二个与随机出来的索引（除了前面的1）...
function outOfOrder(arr){
    for (let i = 0; i < arr.length; i++) {
        let randIndex = Math.round(Math.random()*(arr.length - 1 - i)) + i;
        [arr[i], arr[randIndex]] = [arr[randIndex], arr[i]]
        console.log('change', arr);
    }
    console.log('arr', arr);
}

outOfOrder([1,2,3,4,5,6,7,8,9,10,11,12,13])