function formatter(num){
    return num.toString().replace(/(\d)(?=(\d{3})+\.)/g,(part,$1)=>{
        return $1 + ','
    })
}
console.log(formatter(1234567.342));
