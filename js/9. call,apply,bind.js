// call 
Function.prototype.myCall = function (con, ...rest) {
    // console.log(this);
    // console.log(context);
    let context = con || window
    let fnName = Symbol()
    context[fnName] = this
    const result = context[fnName](...rest)
    delete context[fnName]
    return result
}

function add(a, b) {
    console.log(this);
    console.log(a + b);
}
function add2() {}
add.myCall(add2, 1, 2)

// apply
Function.prototype.myApply = function (con, arr) {
    let context = con || window
    let fnName = Symbol()
    context[fnName] = this
    const result = context[fnName](arr)
    delete context[fnName]
    return result
}

// bind
/**
 * 1. 不会立即执行
 * 2. 参数柯里化
 * 3. 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。
 */

Function.prototype.myBind = function (con, ...rest) {
    let self = this
    let temp = function () {}
    function fBound(...rest2) {
        self.apply(this instanceof self ? this : con, [...rest, ...rest2])
    }
    temp.prototype = this.prototype
    fBound.prototype = new temp()
    return fBound
}
add.myBind(add2)(1, 2)