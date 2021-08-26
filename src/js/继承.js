/*
 * @Author: your name
 * @Date: 2021-08-26 14:46:28
 * @LastEditTime: 2021-08-26 15:16:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/js/继承.js
 */
// es5
function Parent(name,age){
    this.name = name;
    this.age = age;
}
Parent.prototype = {
    getName: function(){
        return this.name;
    }
}
function Child(name,age,school){
    Parent.call(this,name,age);
    this.school = school;
}
// 子类的原型的原型继承父类的原型
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

// const parent = new Parent('zs',18);
const children = new Child('ls',10,'qh');
console.log('obj',children,children.getName());

// es6
class Parent1 {
    constructor(name,age){
        this.name =name;
        this.age = age
    }
    getName(){
        return this.name
    }
}

// 利用extends与super实现子类继承
class Child1 extends Parent1{
    constructor(name,age,school){
        super(name,age);
        this.school = school
    }
}

// const parent1 = new Parent1('张三',18);
const children1 = new Child1('里斯',10,'黑龙江');
console.log('obj1',children1,children1.getName());