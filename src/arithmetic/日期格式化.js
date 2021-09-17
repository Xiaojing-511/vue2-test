/*
 * @Author: your name
 * @Date: 2021-09-08 16:24:08
 * @LastEditTime: 2021-09-08 16:36:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/算法/日期格式化.js
 */
function dateFormat(date,format){
    let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
    // 注意：getMonth返回的是0-11
    month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1,
    year = date.getFullYear();
    format = format.replace(/YYYY/,year);
    format = format.replace(/MM/,month);
    format = format.replace(/DD/,day);
    return format;
}
console.log(dateFormat(new Date('2021-09-01'),'YYYY/MM/DD'));
console.log(dateFormat(new Date('2021-10-01'),'YYYY/MM/DD'));
