/*
 * @Author: your name
 * @Date: 2021-09-28 23:34:17
 * @LastEditTime: 2021-09-29 00:20:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/arithmetic/arithmetic-demo.js
 */
// 实现repeat函数 输出4次hello 每隔1s输出一次 
function repeat(func,times,wait){
    return function(msg){
        let timer = setInterval(function(){
            if( times){
                func(msg)
                times--;
            }
            if(!times){
                clearInterval(timer)
            }
        },wait);
    }
}
const repeatFunc = repeat(console.log,4,1000);
repeatFunc('hello')