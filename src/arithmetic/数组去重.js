/*
 * @Author: your name
 * @Date: 2021-09-09 14:44:33
 * @LastEditTime: 2021-09-09 15:14:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/arithmetic/数组去重.js
 */
let arr = [1,2,2,3,1,2,4,6];
// es6 Set
console.log('es6 Set',typeof new Set(arr) ,[...new Set(arr)]);

// 利用对象属性不重复特点
function cancelRepeat(arr){
    let map = {},res = [];
    arr.forEach(item => {
        if(!Object.prototype.hasOwnProperty.call(map, item)){
            map[item] = 1;
            res.push(item)
        }
    });
    return res
}
console.log('对象属性不重复特点', cancelRepeat(arr));
