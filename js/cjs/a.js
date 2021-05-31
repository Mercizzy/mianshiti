let a = require('./c')
console.log(a);
a = 100
Object.keys(require.cache).forEach(key => delete require.cache[key])
setTimeout(() => {
    let b = require('./c')
    console.log(b);
}, 1000)


// let b = require('./b')
// console.log(b);
// b.b = 3
// setTimeout(() => {
//     let c = require('./b')
//     console.log(b);
// }, 1000)