// 有两头牛出生，出生后第三个月每个月可以生一对，孩子出生后第三个月每个月又可以生一堆 求：n个月时有几头牛
function handle(n){
    let parent = 0;
    let childArr = [1];
    for(var i = 1;i<=n+1;i++){
        for(var j = 0;j<childArr.length;j++){
            if(i - childArr[j] > 2){
                parent++;
                childArr.splice(j,j+1)
            } 
        }
        childArr.push(...new Array(parent).fill(i))
    }
    console.log(n,2*(parent + childArr.length));
    return 2*(parent + childArr.length)
}
handle(6);