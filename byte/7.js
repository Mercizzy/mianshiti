// 截取路由中的参数。考虑hash存在

let url = 'http://www.baidu.com?a=1&b=2&c=3#main'
let reg = /\?.+\#/g
let a = url.match(reg)
console.log(a);