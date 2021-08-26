/*
 * @Author: your name
 * @Date: 2021-08-25 16:26:10
 * @LastEditTime: 2021-08-25 16:34:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/js/promise_all.js
 */
function promiseAll(promises){
    return new Promise(function(resolve,reject){
        if(!Array.isArray(promises)){
            throw new TypeError('is not a array');
        }
        let reslovedCount = 0;
        let promisesNum = promises.length;
        let resloveResult = [];
        for(let i = 0; i < promisesNum; i++){
            Promise.resolve(promises[i]).then(value=>{
                reslovedCount++;
                resloveResult[i] = value
                if(reslovedCount == promisesNum){
                    return resolve(resloveResult);
                }
            }).catch(err=>reject(err))
        }

    })
}
promiseAll([])