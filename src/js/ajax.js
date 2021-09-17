/*
 * @Author: your name
 * @Date: 2021-09-07 17:22:39
 * @LastEditTime: 2021-09-07 17:33:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/js/ajax.js
 */
function ajax(){
    let SERVER_PATH = '/server';
    let xhr = new XMLHttpRequest();
    // 创建http请求
    xhr.open("GET", SERVER_PATH, true)
    // 设置监听函数
    xhr.onreadystatechange = function(){
        if(this.readyState !== 4 ) return;
        // 请求成功
        if(this.status === 200){
            console.log(this.response);
        }else{
            console.log('error', this.statusText);
        }
    }
    // 请求失败
    xhr.onerror = function(){
        console.error(this.statusText);
    }
    xhr.setRequestHeader('Accept','application/json')
    // send参数：在XHR请求中要发送的数据体 get/head请求方式时填null
    xhr.send(null);
}