// Symbol的用处
/**
 * 1. 唯一值
 * 2. 模拟私有变量
 */

let obj = {
    a: 111,
    b: 222,
    [Symbol()]: 1
}

Object.keys(obj).forEach(item => {
    console.log(item);
})

console.log('-------------------------------');

Object.getOwnPropertySymbols(obj).forEach(item => {
    console.log(item);
})

console.log('-------------------------------');

Reflect.ownKeys(obj).forEach(item => {
    console.log(item);
})