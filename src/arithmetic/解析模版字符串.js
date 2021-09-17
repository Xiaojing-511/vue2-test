/*
 * @Author: your name
 * @Date: 2021-09-17 11:34:18
 * @LastEditTime: 2021-09-17 17:30:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/arithmetic/解析模版字符串.js
 */
function transform(tpl,...rest){
    let time = 0;
    return tpl.replace(/\$\{(\w+)\}/g,()=>rest[time++]);
}

let template = '${a}-${b}-${c}';
console.log(transform(template,2021,1,2));