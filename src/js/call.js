/*
 * @Author: your name
 * @Date: 2021-08-25 17:14:56
 * @LastEditTime: 2021-08-26 14:50:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/js/call.js
 */
// 手写call函数
/**
 * call 函数的实现步骤：
    判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
    判断传入上下文对象是否存在，如果不存在，则设置为 window 。
    处理传入的参数，截取第一个参数后的所有参数。
    将函数作为上下文对象的一个属性。
    使用上下文对象来调用这个方法，并保存返回结果。
    删除刚才新增的属性。
    返回结果。
 */

Function.prototype.myCall = function(context){
    if(typeof this !== 'function'){
        throw new TypeError('not a function')
    }
    let args = [...arguments].slice(1),
    result = null;
    context = context || window;
    context.fn = this;
    result = context.fn(...args);
    delete context.fn;
    return result;
}
// apply
Function.prototype.myApply = function(context){
    if(typeof this !== 'function'){
        throw new TypeError('not a function')
    }
    let result = null;
    context = context || window;
    context.fn = this;
    if(arguments[1]){
        result = context.fn(...arguments[1]);
    }else{
        result = context.fn();
    }
    delete context.fn;
    return result;
}
// bind
Function.prototype.bind = function(context){
    var args = [...arguments].slice(1),
    fn = this;
    return function Fn(){
        return fn.apply(
            this instanceof Fn ? this : context,
            args.concat(...arguments)
        )
    }

}