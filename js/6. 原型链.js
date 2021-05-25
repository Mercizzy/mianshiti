
// 实例原型的 constructor 指向构造函数
// 构造函数的 prototype 指向实例原型
// 实例对象的 __proto__ 指向实例原型
// .__proto__不停地向下，直到实例原型为null时停止，这条线就是原型链

class Base {}
let b = new Base()
console.log(Object.getPrototypeOf(b) === Base.prototype);
console.log(Base.constructor);