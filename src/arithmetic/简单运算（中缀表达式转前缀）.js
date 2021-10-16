let obj = {
    '+' : 0,
    '-' : 0,
    '*' : 1,
    '/' : 1
}
// let str = (readline()).trim();
let str = '1+(2+3)*4-5'
let numStack = [],aStack = [];
for(var i = str.length-1; i >= 0;i--){
    let item = str[i];
    if(parseInt(item) >= 0 && parseInt(item) <=9){
        numStack.push(item);
    }else{
        if(item == ')' || aStack.length == 0){
            aStack.push(item)
        }else if(item == '('){
            for(var j = aStack.length-1;j>=0;j--){
                if(aStack[j] != ')'){
                    numStack.push(aStack.pop())
                }else{
                    aStack.pop();
                    break;
                }
            }
        }else{
            if(aStack[aStack.length-1] == ')' || obj[aStack[aStack.length-1]] <= obj[item]){
               aStack.push(item) 
            }else{
                for(var k = aStack.length-1;k>=0;k--){
                    if(obj[aStack[k]] > obj[item] && aStack[k] != ')'){
                        numStack.push(aStack.pop())
                    }else{
                        break;
                    }
                }
                aStack.push(item)
            }
        }
    }
}
let len = aStack.length
while(len > 0){
    numStack.push(aStack.pop());
    len = aStack.length;
}
console.log(numStack,aStack);
let res = null;
let stack = [];
for(var p = 0; p < numStack.length; p++){
    let item = numStack[p]
    if(item>=0 && item <=9){
        stack.push(item)
    }else{
        if(res == null){
            let a = parseInt(stack.pop()),b = parseInt(stack.pop());
            switch(item){
                case '+': res = a+b; break;
                case '-': res = a-b; break;
                case '*': res = a*b; break;
                case '/': res = a/b; break;
            }
        }else{
            let a = parseInt(stack.pop());
            switch(item){
                case '+': res += a; break;
                case '-': res -= a; break;
                case '*': res *= a; break;
                case '/': res /= a; break;
            }
        }
    }
}
console.log(res);
