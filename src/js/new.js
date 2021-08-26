/*
 * @Author: your name
 * @Date: 2021-08-25 10:48:33
 * @LastEditTime: 2021-08-25 11:15:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/js/new.js
 */
function myConstructor(name){
    this.name = name;
    // return {
    //     name: 'zs'
    // }
}
// new
function myNew(){
    let newObject = null;
    // 取出构造函数（第一个参数）
    let constructor = Array.prototype.shift.call(arguments);
    console.log('constructor', constructor, constructor.prototype);
    let result = null;
    // 判断构造函数是否合法
    if(typeof constructor !== 'function'){
        return;
    }
    // 给新对象的原型赋值
    newObject = Object.create(constructor.prototype);
    // 构造函数内部指向新对象 并执行函数 给新对象添加属性 
    // result为构造函数返回值 构造函数也可以有返回值
    result = constructor.apply(newObject, arguments);
    console.log('result', result, newObject);
    // 判断构造函数返回值是否为引用类型(数组、对象或者函数)
    let flag = result && (typeof result === 'object' || typeof result === 'function');
    // 返回基本类型与无返回值同样返回新创建的对象 返回引用类型的话新创建的对象将被返回值覆盖
    return flag ? result : newObject;
}
console.log('object',myNew(myConstructor,'lisi'));
