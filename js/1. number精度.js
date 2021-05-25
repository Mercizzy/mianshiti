
console.log(0.1 + 0.2 === 0.3);

// 为什么会产生误差？
// JS 采用 IEEE 754 双精度版本（64位）1 + 11 + 52 
// S: 1位数符 标记正负，0为正，1为负
// E: 阶码 = 阶码真值 + 偏移量 1023。偏移量 = 2^(k-1)-1,k表示阶码位数
// M: 尾数 数字的小数部分
// V = (-1)^Sｘ2^(E-1023)*1.M

// 解决方法
// 1. es6 新加入了Number.EPSILON，用以忽略精度误差
function ignoreError(left, right) {
    return Math.abs(left - right) < Number.EPSILON
}
console.log(ignoreError(0.1 + 0.2, 0.3));

// 2. 将数字转化为整数，再除去相应的倍数
function add(num1, num2) {
    const num1Length = num1.toString().split('.')[1].length
    const num2Length = num2.toString().split('.')[1].length
    const maxBase = Math.pow(10, Math.max(num1Length, num2Length))
    return (num1 * maxBase + num2 * maxBase) / maxBase
}
console.log(add(0.1, 0.2) === 0.3);