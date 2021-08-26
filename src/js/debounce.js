/*
 * @Author: your name
 * @Date: 2021-08-25 16:55:04
 * @LastEditTime: 2021-08-25 17:14:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/js/debound.js
 */
// 防抖 操作后一段时间再触发  场景：搜索框高频率输入 在停止输入几秒后再开始执行对应函数
function debounce(fn,wait){
    let timer = null;
    return function(){
        // 如果此时存在定时器的话，则取消之前的定时器重新记时
        if(timer){
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(() => {
            fn.apply(this,arguments);
        }, wait);
    }
}
let debounceTest = debounce(()=>{},1000);
debounceTest()