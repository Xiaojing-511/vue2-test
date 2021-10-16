function longestWord( words ) {
    let arr = [];
    words.sort().reverse();
    for(var str of words){
        var len = str.length - 1;
        while(len > 0){
            if(words.includes(str.slice(0,len))){
                len--
            }else{
                break;
            }
        }
        if(len == 0){
            arr.push(str)
        }
    }
    if(arr.length == 0) return ''
    arr.sort()
    let i = arr.length - 1,maxLen = arr[i].length
    while(i >= 0){
        if(arr[i].length == maxLen){
            i--;
        }else{
            break;
        }
    }
    return arr[i+1]
}
longestWord([])