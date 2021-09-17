/*
 * @Author: your name
 * @Date: 2021-09-09 16:24:33
 * @LastEditTime: 2021-09-09 16:42:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/arithmetic/超大数相加/小数准确相加.js
 */
// 思想：转化为字符串 对应位相加并进位
function sum(num1,num2){
    let sum = ''
    let num1Arr = (num1 + '').split('');
    let num2Arr = (num2 + '').split('');
    let temp = 0;
    while(num1Arr.length || num2Arr.length || temp) {
        let a = num1Arr.length > 0 ? parseInt(num1Arr.pop()) : 0;
        let b = num2Arr.length > 0 ? parseInt(num2Arr.pop()) : 0;
        temp += a + b;
        console.log('temp', temp);
        sum = (temp % 10) + sum
        temp = temp > 9
    }
    return sum
}

console.log('sum', sum(23456,29345));