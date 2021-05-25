// js的数据类型，分为基本数据类型以及引用数据类型
// 基本数据类型：Number, String, Boolean, undefined, null, Symbol, BigInt
// 引用数据类型：Array, Function, RegExp, Date

// 如何判断数据类型
// 1. typeof
console.log(typeof 1);  // number
console.log(typeof "1");    // string
console.log(typeof true);   // boolean
console.log(typeof undefined);  // undefined
console.log(typeof null);   // object
console.log(typeof Symbol());   // symbol
console.log(typeof 100000n );   // bigint
console.log(typeof []); // object
console.log(typeof function() {});  // function
console.log(typeof /1/g);   // object
console.log(typeof new Date()); // object

console.log('--------------------------------------------');

// instanceof 用于判断引用类型
console.log([] instanceof Array);   // true
console.log(function() {} instanceof Function); // true
console.log(/1/g instanceof RegExp);    // true
console.log(new Date() instanceof Date);    // true

console.log('--------------------------------------------');

// Object.prototype.toString.call
console.log(Object.prototype.toString.call(1)); // [object Number]
console.log(Object.prototype.toString.call("1"));   // [object String]
console.log(Object.prototype.toString.call(true));  // [object Boolean]
console.log(Object.prototype.toString.call(undefined)); // [object Undefined]
console.log(Object.prototype.toString.call(null));  // [object Null]
console.log(Object.prototype.toString.call(Symbol()));  // [object Symbol]
console.log(Object.prototype.toString.call(100n));  // [object BigInt]
console.log(Object.prototype.toString.call([]));    // [object Array]
console.log(Object.prototype.toString.call(function() {})); // [object Function]
console.log(Object.prototype.toString.call(/1/g));  // [object RegExp]
console.log(Object.prototype.toString.call(new Date()));    // [object Date]

console.log('-----------------------------------');

// 手写instanceof
function myInstanceOf(child, parent) {
    const L = child.__proto__
    const R = parent.prototype
    if (L === R) {
        return true
    } else if (L === null){
        return false
    } else {
        return myInstanceOf(L, parent)
    }

}
console.log(myInstanceOf([], Array));
class A {}
class B extends A {}
const b1 = new B()
console.log(myInstanceOf(b1, A));
