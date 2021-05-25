
// 如果构造函数有返回，如果返回的是对象，则返回这个对象，如果返回的不是对象，则返回构造函数创建的对象
function Base() {
    // return { a: 111 }
    // return null
    // return 1
    // return true
}

let b = new Base()
console.log(b);

// 手写new
// new的时候，发生了什么？
// 1. 创建了一个全新的对象
// 2. 这个对象的__proto__将被链接到构造函数的prototype所指向的对象
// 3. 这个新对象会绑定到函数调用的this
// 4. 如果构造函数没有返回其他对象，那么会自动返回新对象

function myNew(fn, ...rest) {
    let obj = Object.create(fn.prototype)
    let result = fn.apply(obj, rest)
    return result instanceof Object ? result : obj
}
let b2 = myNew(Base)
console.log(b2);