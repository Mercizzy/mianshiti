let {a} = require('./c')
let obj = require('./b')
console.log(obj);
console.log(a);
obj.b = 2
console.log(obj);
a = 11
console.log(a);