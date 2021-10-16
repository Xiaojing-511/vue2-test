/*
 * @Author: your name
 * @Date: 2021-09-18 10:23:33
 * @LastEditTime: 2021-10-06 21:20:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/arithmetic/test.js
 */
// 求和
let str = '1,2,3,4,5,-1,0.3,p,-0.3'; //14
let arr = str.split(',');
sum(arr)
function sum(arr){
    let newArr = [];
    arr.forEach((item)=>{
        item = parseFloat(item)
        if(Math.abs(item) >= 0 && Math.abs(item) <= 9){
            newArr.push(item);
        }
    })
    arr = [...newArr];
    console.log(arr);
    let int = 0,float = 0,maxFloat = 0;
    for(var i = 0;i<arr.length;i++){
        if(Math.abs(arr[i])>0 && Math.abs(arr[i]) < 1){
            let temp = Math.abs(arr[i]).toString().split('.');
            maxFloat = Math.max(temp[1].length,maxFloat);
            Math.abs(arr[i]) == arr[i] ? int += parseInt(temp[0]) : int -= parseInt(temp[0])
            Math.abs(arr[i]) == arr[i] ? float += parseInt(temp[1]) : float -= parseInt(temp[1])
        }else{
            int += parseInt(arr[i])
        }
    }
    var next = float.toString().length - maxFloat;
    if(next > 0){
        int += parseInt(float.toString().slice(0,next));
        float = parseInt(float.toString().slice(next));
    }
    console.log(int,float);
    return !float ? int : int+''+'.'+float
}

// sum([1,2,3,-1,null,false,'p',0.3,-0.3])