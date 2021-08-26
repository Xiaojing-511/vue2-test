/*
 * @Author: your name
 * @Date: 2021-08-25 16:40:59
 * @LastEditTime: 2021-08-25 16:53:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/js/throttle.js
 */
// 节流 一段时间触发一次 场景：滑动
function throttle(fn,delay){
    console.log('nkun');
    let curTime = Date.now();
    return function(){
        let nowTime = Date.now();
        if(nowTime - curTime >= delay){
            curTime = Date.now();
            return fn.apply(this,arguments);
        }
    }
}
function test(){
    console.log('run')
}
let throttleTest = throttle(test,1000)
setTimeout(() => {
    throttleTest()
}, 1200);
