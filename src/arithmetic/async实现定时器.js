/*
 * @Author: your name
 * @Date: 2021-09-17 10:20:47
 * @LastEditTime: 2021-09-17 11:29:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/arithmetic/async实现定时器.js
 */

async function sleep(de){
    return new Promise(reslove=>{
        setTimeout(reslove,de)
    })
}
async function test(){
    console.log('start');
    await sleep(1000)
// setTimeout(()=>{},1000)
    console.log('end');
}
test()

// reslove()参数只接受一个 其他忽略 不会传给then
new Promise(reslove=>{
    reslove('success', 'a',console.log('r内'))
}).then(res=>console.log('res', res))

Promise.resolve({
    'a': 'a' 
}).then(res=>console.log(res))