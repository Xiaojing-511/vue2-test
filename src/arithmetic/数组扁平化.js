/*
 * @Author: your name
 * @Date: 2021-09-08 17:45:55
 * @LastEditTime: 2021-09-09 14:39:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/arithmetic/数组扁平化.js
 */
let arr = [1,2,[3,4],[5,6,[7,8,[9]]]];
// toString split
console.log('toString', arr.toString(),arr.toString().split(',')); 

// reduce concat
function transformArr(arr){
    return arr.reduce((prev,next)=>{
        return prev.concat(Array.isArray(next) ? transformArr(next) : next)
    },[])
}
console.log('reduce', transformArr(arr));

// some 、 扩展运算符
function methods1(arr){
    while(arr.some((item)=> Array.isArray(item) )){
        console.log('arr', arr);
        // 扩展运算符一次只能打开一个[]
        arr = [].concat(...arr);
    }
    return arr
}
// es6 flat
console.log('flat', arr.flat(Infinity));
console.log('some,扩展运算符',methods1(arr));

// 正则和JSON.stringify
function reg(arr){
    let str = JSON.stringify(arr).replace(/(\[|\])/g,'');
    str = '[' + str + ']';
    return JSON.parse(str);
}
console.log('正则、JSON.stringify', reg(arr));

// 递归实现
function transform(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            result = result.concat(transform(arr[i]))
        }else{
            result.push(arr[i])
        }
    }
    return result
}
console.log('递归', transform(arr));
