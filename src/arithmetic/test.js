/*
 * @Author: your name
 * @Date: 2021-09-18 10:23:33
 * @LastEditTime: 2021-09-18 10:46:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/arithmetic/test.js
 */
function transfromUrl (url,key){
    let q = {};
    url.replace(/([^?&=]+)=([^&]+)/g,(_,k,v)=>q[k]=v);
    // console.log('q', q,Object.prototype.hasOwnProperty.call(q,key));
    return Object.prototype.hasOwnProperty.call(q,key) ? q[key] : false
}
// console.log(transfromUrl('https://m.xiaohongshu.com?name1=1','name'));
function test(arr){
    let max = 0,beforeIndex =0, afterIndex = 0
    for(var i = 0;i< arr.length - 1; i++){
        for(var j = i + 1; j <arr.length; j++){
            if(arr[j] - arr[i] > 0 && arr[j] - arr[i] > max){
                max = arr[j] - arr[i];
                beforeIndex = i;
                afterIndex = j;
            }
        }
    }
    console.log(arr,beforeIndex,afterIndex)
}
test([7,1,5,3,6,4])

