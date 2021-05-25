let reg = /^A((?!(c|cd)).)*B$/

let str = 'AdB'
console.log(reg.test(str));