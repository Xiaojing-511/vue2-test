/*
 * @Author: your name
 * @Date: 2021-08-24 17:15:54
 * @LastEditTime: 2021-08-24 18:05:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/js/instanceof.js
 */
// 手写 instanceOf 
/**
 * 
 * instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。
 * 实现步骤：
    首先获取类型的原型
    然后获得对象的原型
    然后一直循环判断对象的原型是否等于类型的原型，直到对象原型为 null，因为原型链最终为 null
 */

// 构造函数的prototype是一个对象（通常只包含一个constructor函数）
function myInstanceof(left,right){
    let proto = Object.getPrototypeOf(left),
    protoType = right.prototype;
    const flag = true;
    while(flag){
        console.log('proto', proto, protoType);
        if(!proto) return false;
        if(proto === protoType){
            return true
        }
        proto = Object.getPrototypeOf(proto);
    }
}
class Test extends Object{
    constructor(name){
        super();
        this.name = name
    }
}

let test = new Test('test-name');
console.log('test', test, myInstanceof(test, Object));
console.log('object', test instanceof Test);
