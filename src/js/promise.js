/*
 * @Author: your name
 * @Date: 2021-08-25 14:28:25
 * @LastEditTime: 2021-08-25 16:14:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/js/promise.js
 */

const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";
class PRomise {
    constructor(fn){
        // 保存初始化状态
        let self = this;
        this.state = PENDING;
        // 用于保存 resolve 或者 rejected 传入的值
        this.value = null;
        // 用于保存 resolve 的回调函数
        this.resolvedCallbacks = [];
        this.rejectedCallbacks = [];
        // 状态转变为 resolved 的方法
        function resolve(value){
            if(value instanceof PRomise){
                return value.then(resolve,reject);
            }
            console.log('0 触发reslove 此时状态还没变');
            // 保证在本次事件循环的末尾进行（在之前把then里的方法push进resolvedCallbacks）
            setTimeout(()=>{
                if(self.state === PENDING){ 
                    // 用self保存下this的原因 this拿不到
                    console.log('2 回到reslove 改变状态 执行回调',self.resolvedCallbacks);
                    self.state = RESOLVED;
                    self.value = value;
                    self.resolvedCallbacks.forEach(callback => {callback(value)})
                }
            },0)
        }
        function reject(value){
            setTimeout(()=>{
                if(self.state === PENDING){
                    console.log('rejectd',self.rejectedCallbacks);
                    self.state = REJECTED;
                    self.value = value;
                    self.rejectedCallbacks.forEach(callback => {callback(value)})
                }
            },0)
        }

        // 将两个方法传入函数执行
        try {
            fn(resolve,reject)
        }catch(e){
            console.log('err',e);
             // 遇到错误时，捕获错误，执行 reject 函数
            reject(e)
        }
    }
}
PRomise.prototype.then = function(onResolved,onRejected){
     // 首先判断两个参数是否为函数类型，因为这两个参数是可选参数
    onResolved =
    typeof onResolved === "function"
        ? onResolved
        : function(value) {
            return value;
        };

    onRejected =
    typeof onRejected === "function"
        ? onRejected
        : function(error) {
            throw error;
        };

    if(this.state === PENDING){
        console.log('1 进入then 将回调函数push进数组');
        this.resolvedCallbacks.push(onResolved);
        this.rejectedCallbacks.push(onRejected);
    }
    if(this.state === RESOLVED){
        onResolved(this.value)
    }
    if(this.state === REJECTED){
        onRejected(this.value)
    }
}

new PRomise((resolve) => {
    resolve('reslove');
    // throw 'errorcsdcscv';
}).then((res)=>{
    console.log('3 回调函数',res);
},(err)=>{
    console.log('rejected value',err);
})

