/*
 * @Author: your name
 * @Date: 2021-09-09 17:12:48
 * @LastEditTime: 2021-09-09 17:25:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/arithmetic/js对象数组变为树形结构.js
 */
let objArr = [
    {
        id: 1,
        name: 'name1',
        childrenId: [2]
    },
    {
        id: 2,
        name: 'name2',
        childrenId: [3]
    },
    {
        id: 3,
        name: 'name3'
    },
];
let tempObj = {},treeObj = {};
objArr.forEach(item => {
    tempObj[item.id] = item
})
objArr.forEach(item => {
    if(tempObj[item.id]?.childrenId?.length){
        tempObj[item.id].childrenId.forEach((pid)=>{
            tempObj[item.id].children ? tempObj[item.id].children.push(tempObj[pid]) : (tempObj[item.id].children = []).push(tempObj[pid]);
        })
    }
})
treeObj = tempObj[1];
console.log('tree', treeObj);