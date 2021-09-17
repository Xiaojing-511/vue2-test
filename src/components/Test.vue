<!--
 * @Author: your name
 * @Date: 2021-08-24 17:09:57
 * @LastEditTime: 2021-09-15 14:33:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/components/Test.vue
-->
<template>
    <div>
        <ul>
            <li>111</li>
            <li>222</li>
            <div style="width:100px; height: 40px; background:pink;">bjhsx</div>
            <li>333</li>
            <p>this is a p</p>
            <li>444</li>
        </ul>
        <p>cecvsf</p>
        <canvas id="myCanvas" width="300px" height="300px"></canvas>
    </div>
</template>
<script>
// import '../js/object_create'
// import '../js/instanceof'
// import '../js/new'
// import '../js/promise'
// import '../js/throttle'
// import '../js/继承'
import '../arithmetic/js对象数组变为树形结构'
export default {
    created(){
        this.$axios.get('https://1967681584377147.cn-shanghai.fc.aliyuncs.com/2016-08-15/proxy/test_serverless/getInfoLIst/',
        {
            params: {
                path: 'test-path'
            }
        }).then(res=> console.log('res', res)).catch(err=>console.log('err', err))
    },
    mounted(){
        let myCanvas = document.getElementById('myCanvas');
        // 创建 context 对象：
        // getContext("2d") 对象是内建的 HTML5 对象，拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。
        let ctx = myCanvas.getContext('2d');
        console.log('my', myCanvas, ctx);
        ctx.fillStyle = '#000'
        // 在画布上绘制 150x75 的矩形，从左上角开始 (0,0)
        ctx.fillRect(0,0,100,100);
    }
}
</script>
<style>
p{
    text-align: left;
}
ul{
    background-color: #ccc;
    /* display: flex; */
}
ul li{
    width: 80px;
    border: 1px solid #000;
}
</style>