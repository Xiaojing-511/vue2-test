/*
 * @Author: your name
 * @Date: 2021-09-18 11:07:23
 * @LastEditTime: 2021-09-18 11:45:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/arithmetic/去除字符串中连续重复的字符.js
 */
var str = 'AAAABBBBCDEEEEAABB';
let reg = new RegExp(/(.+)\1/g); //贪婪匹配
let reg2 = new RegExp(/(.+?)\1/g); //惰性匹配
function test(){
    let format = str.replace(reg,'$1');  //'AABBCDEEAB'
    while(reg2.test(format)){
        format = format.replace(reg,'$1'); //'ABCDEAB'
    }
    return format
}

test()
