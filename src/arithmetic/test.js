/*
 * @Author: your name
 * @Date: 2021-09-18 10:23:33
 * @LastEditTime: 2021-10-06 21:20:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue2-test/src/arithmetic/test.js
 */
function quickSort(arr,left,right){
    if(left >= right) return;
    let target = arr[left];
    let l = left + 1,r = right;
    console.log(l,r);
    while(l < r){
        while(arr[l] + target < target + arr[l] && l < r) l++;
        while(target + arr[r] < arr[r] + target && l < r) r--;
        [arr[l],arr[r]] = [arr[r],arr[l]]
    }
    if(arr[l] + arr[left] < arr[left] + arr[l]){
        [arr[l],arr[left]] = [arr[left],arr[l]];
    }
    quickSort(arr,left,l-1);
    quickSort(arr,l+1,right);
}

var minNumber = function(nums) {
    nums = nums.map((item)=>item+'')
    quickSort(nums,0,nums.length - 1)
    console.log(nums.join(''))
    // return nums.join('')
};
minNumber([10,2])