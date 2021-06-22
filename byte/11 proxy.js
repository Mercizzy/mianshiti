// proxy reflect 有什么用？
// proxy的缺陷

// let proxy = new Proxy({}, {
//     get: function (target, propKey, receiver) {
//         console.log(`get: ${propKey}`)
//         return Reflect.get(target, propKey, receiver)
//     },
//     set: function (target, propKey, value, receiver) {
//         console.log(`set: ${propKey}`)
//         return Reflect.set(target, propKey, value, receiver)
//     }
// })
// proxy.a = 'a'
// console.log(proxy.a);
// console.log(proxy);

// Proxy的局限
// const _name = new WeakMap();
// class Person {
//   constructor(name) {
//     _name.set(this, name);
//   }
//   get name() {
//     return _name.get(this);
//   }
// }

// const jane = new Person('Jane');
// console.log(jane.name); // 'Jane'

// const proxy = new Proxy(jane, {});
// console.log(proxy.name); // undefined

// const target = new Date();
// const handler = {};
// const proxy = new Proxy(target, handler);
// console.log(target.getDate());
// proxy.getDate();  // TypeError: this is not a Date object.

// Proxy 拦截函数内部的this，指向的是handler对象。
// const handler = {
//   name: 'Merci',
//   get: (target, propKey, receiver) => {
//     console.log(this.name);
//     return Reflect.get(target, propKey, receiver)
//   },
//   set(target, propKey, value, receiver) {
//     console.log(this.name);
//     return Reflect.set(target, propKey, value, receiver)
//   },
// }
// let obj = {
//   name: 'Merci2'
// }
// let proxy = new Proxy(obj, handler)
// proxy.x = 1
// proxy.x

// Proxy的应用
// 利用Proxy做数据校验
const vaildateProxy = function (target, vaildateRules) {
  return new Proxy(target, {
    _vaildateRules: vaildateRules,
    set: function(target, propKey, value, receiver) {
      let vaildator = this._vaildateRules[propKey]
      if (vaildator) {
        if (vaildator(value)) {
          return Reflect.set(target, propKey, value, receiver)
        } else {
          throw Error(`${propKey}属性不符合规则`)
        }
      } else {
        throw Error(`${propKey}属性暂无校验`)
      }
    }
  })
}
let vaildateRules = {
  name: function(value) {
    return typeof value === 'string'
  },
  age: function(value) {
    return typeof value === 'number' && value > 0 && value <= 150
  }
}
let obj = {
  name: 'Merci',
  age: 25
}
let p1 = vaildateProxy(obj, vaildateRules)
// p1.name = 0

// Proxy 模拟私有属性
// get/set时不允许操作，遍历时不展示
let obj2 = {
  _id: '111',
  name: 'Merci',
  age: 25
}
let handler2 = {
  get(target, propKey, receiver) {
    if (propKey.startsWith('_')) {
      throw Error(`${propKey}是私有属性`)
    } else {
      return Reflect.get(target, propKey, receiver)
    }
  },
  set(target, propKey, value, receiver) {
    if (propKey.startsWith('_')) {
      throw Error(`${propKey}是私有属性`)
    } else {
      return Reflect.set(target, propKey, value, receiver)
    }
  },
  has(target, propKey) {
    if (propKey.startsWith('_')) {
      return false
    } else {
      return propKey in target
    }
  },
  ownKeys(target) {
    return Reflect.ownKeys(target).filter(item => !item.startsWith('_'))
  }
}
let p2 = new Proxy(obj2, handler2)
// p2._id = 222
// console.log(Reflect.ownKeys(p2));
// console.log(Object.keys(p2));
