/*
 * @Author: your name
 * @Date: 2021-09-09 15:17:05
 * @LastEditTime: 2021-09-09 16:05:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/arithmetic/字符串.js
 */
// 用逗号分隔千分位
function handle(str){
    let splitArr = str.split('.');
    let frontArr = splitArr[0].split('').reverse()
    if(splitArr[0].length > 3) {
        let i = 3;
        while(frontArr[i] && frontArr.length > i){
            frontArr[i] += ',';
            i += 3;
        }
    }
    return splitArr.length <= 1 ? frontArr.reverse().join('') : frontArr.reverse().join('') + '.' + splitArr[1];
}
console.log('反转数组并拼接字符串', handle('1112223.23'));
console.log('反转数组并拼接字符串', handle('1112223'));
console.log('反转数组并拼接字符串', handle('111.22'));
console.log('反转数组并拼接字符串', handle('111'));

// match() 
function handleMatch(str){
    let splitArr = str.split('.');
    let remain = splitArr[0].length % 3
    if(splitArr[0].length <= 3){
        return str
    }else if(remain === 0){
        return splitArr.length > 1 ? splitArr[0].match(/\d{3}/g).join(',') + '.' + splitArr[1] : splitArr[0].match(/\d{3}/g).join(',');
    }else if(remain !== 0) {
        return splitArr.length > 1 ? splitArr[0].slice(0,remain) + ',' + splitArr[0].slice(remain).match(/\d{3}/g).join(',') + '.' + splitArr[1] : 
        splitArr[0].slice(0,remain) + ',' + splitArr[0].slice(remain).match(/\d{3}/g).join(',');
    }
}
console.log('match', handleMatch('1112223.23'));
console.log('match', handleMatch('1112223'));
console.log('match', handleMatch('111.22'));
console.log('match', handleMatch('111'));
