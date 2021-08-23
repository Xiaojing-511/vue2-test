<!--
 * @Author: your name
 * @Date: 2021-08-22 09:30:00
 * @LastEditTime: 2021-08-23 20:28:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/components/EventEntrust.vue
-->
<template>
    <div>
        <ul id="list" @click="handleClick">
            <li id="record1" class="record sign">
                测试记录1
                <div>
                    <a-button style="margin-right:10px">编辑</a-button>
                    <a-button type="primary" class="btn">查看</a-button>
                </div>
                <ul>
                    <li class="record">内部li</li>
                </ul>
            </li>
            <li id="record2" class="record sign">
                测试记录2
                <div>
                    <a-button style="margin-right:10px">编辑</a-button>
                    <a-button type="primary" class="btn">查看</a-button>
                </div>
                
            </li>
            <li id="record3" class="record sign">
                测试记录3
                <div>
                    <a-button style="margin-right:10px">编辑</a-button>
                    <a-button type="primary" class="btn">查看</a-button>
                </div>
            </li>
        </ul>
        <p>点击的记录是: {{recordList[record]}}</p>
    </div>
</template>
<script>
import { Button } from 'ant-design-vue';
export default {
    name: 'EventEntrust',
    components: { AButton: Button },
    data() {
        return {
            recordList: {
                'record1': '测试记录1',
                'record2': '测试记录2',
                'record3': '测试记录3',
                'record4': '测试记录4',
            },
            record: '',
        }
    },
    methods:{
        handleClick(e){
            console.log('event', e);
            console.log('target', e.target);
            console.log('path', e.path);
            e.path.forEach((item)=>{
                // localName 返回元素的本地名称（元素名称）小写
                // tagName 返回元素的标签名。标签名大写
                if(item.tagName == 'LI' && item.className.includes('sign')){
                    this.record = item.id;
                    console.log('localName --- tagName',item.localName,item.tagName);
                    console.log('item', item, item.id);
                }
            }) 
        }
    }
}
</script>
<style>
#list{
    color: #000;
    display: inline-block;
    /* background-color: #ccc; */
}
.record{
    width: 500px;
    line-height: 40px;
    margin: 10px 0;
    padding: 0 10px;
    border: 1px solid #ccc;
    list-style: none;
} 
</style>
