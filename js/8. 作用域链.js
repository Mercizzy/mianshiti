// 什么是作用域链
/**
 * 当访问一个变量时，编译器在执行这段代码时，会首先从当前的作用域中查找是否有这个标识符，
 * 如果没有找到，就会去父作用域查找，如果父作用域还没找到继续向上查找，直到全局作用域为止,
 * 而作用域链，就是有当前作用域与上层作用域的一系列变量对象组成，它保证了当前执行的作用域对符合访问权限的变量和函数的有序访问
 */

// 什么是闭包
/**
 * 当前环境中存在指向父级作用域的引用
 */

// 函数柯里化
function myCurry(fn, ...args) {
    let self = this
    let length = fn.length
    return function inner (...rest) {
        args = args.concat(rest)
        if (args.length < length) {
            return inner
        } else {
            return fn.apply(self, args)
        }
    }
}
function add (a, b, c, d) {
    console.log(a + b + c + d);
}
let curryAdd = myCurry(add)
curryAdd(1, 2)(3, 4)