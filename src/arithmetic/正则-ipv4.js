let reg = new RegExp(/^((25[0-5]|2[0-4]\d|[0,1]?\d{1,2})\.){3}(25[0-5]|2[0-4]\d|[0,1]?\d{1,2})$/);
let ipv4 = '20.223.214.33';
console.log(reg.test(ipv4)); 