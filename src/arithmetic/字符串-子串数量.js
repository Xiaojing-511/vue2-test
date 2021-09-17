/*
 * @Author: your name
 * @Date: 2021-08-26 18:14:26
 * @LastEditTime: 2021-08-30 10:51:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/算法/字符串-子串数量.js
 */

// 统计规定开头和结尾的子串数
function totalCounter(str,start,end){
    let count = 0,
    aCount = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i] === start) {
            aCount++;
        }else if(str[i] === end){
            count += aCount;
        }
    }
    if(start === end) return aCount*(aCount - 1)/2;
    return count;
}
console.log(totalCounter('anhnhjbabb','a','b'));
console.log(totalCounter('anhnhjbabb','a','a'));