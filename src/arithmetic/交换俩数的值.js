/*
 * @Author: your name
 * @Date: 2021-09-08 16:40:12
 * @LastEditTime: 2021-09-08 16:53:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/arithmetic/交换俩数的值.js
 */
// 交换两个数字
var a = 1, b = 2;
console.log('before', a, b);
a = a + b;
b = a - b;
a = a - b;
console.log('after', a, b);

// 交换两个字符串
var str1 = 'a', str2 = 'b';
console.log('before', str1, str2);
str1 = str1 + '|' + str2;
str2 = str1.split('|')[0];
str1 = str1.split('|')[1];
console.log('after', str1, str2);
