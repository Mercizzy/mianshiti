
// Object.assign concat
let obj = {
    a: 1,
    b: 2,
    c: [1, 2, 3]
};
let arr = [1, 2, 3];

let o1 = Object.assign({}, obj)
o1.a = 333
o1.c = [1111]
console.log(obj);

let a1 = [].concat(arr)
a1[0] = 'hahaha'
console.log(arr[0]);

// 遍历key值
function deepClone(obj) {
    if (typeof obj === 'object') {
        let result = obj instanceof Array ? [] : {}
        for (let i in obj) {
            result[i] = typeof obj[i] === 'object' ? deepCopy(obj[i]) : obj[i];
        }
    } else {
        let result = obj
    }
    return obj
}

// JSON.stringify/JSON.parse
// 缺点 存在 Date，正则，function，NAN，Infinity，-Infinity，不可枚举属性，循环引用 时，都会有问题
