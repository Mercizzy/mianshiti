const Stack = require('./1.js模拟栈')

let s1 = new Stack()
console.log(s1.peek());
s1.push(1)
console.log(s1.peek());
s1.pop()
console.log(s1.isEmpty());

// 平衡圆括号问题
// ([{}])
// 遇到左括号就入栈，遇到右括号则出栈，最后判断栈是否为空
function parenthesesChecker(str) {
    const strArr = str.split('')
    const s1 = new Stack()
    const left = ['(', '[', '{']
    for (let i=0; i<strArr.length; i++) {
        if (left.includes(strArr[i])) {
            s1.push(strArr[i])
        } else {
            if (strArr[i] === ')' && s1.peek() === '(') {
                s1.pop()
            } else {
                break
            }
        }
    }
}

// 进制转换
function decimalToBase(decimal, base) {
    const stack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let baseString = '';

    if (base < 2 || base > 36) {
        return ''
    }
    while(decimal) {
        const rem = decimal % base
        stack.push(rem)
        decimal = Math.floor(decimal / base)
    }
    while(!stack.isEmpty()) {
        baseString += digits[stack.pop()]
    }
    return baseString
}
console.log(decimalToBase(10, 2));

// 汉诺塔问题
// 三个栈，如果有空的栈，就将不空的栈顶最大数字移动到空栈
// 否则，则将栈顶最小的数，移动到栈顶数字第二大的栈的栈顶
// 如此循环往复，知道AB栈空
function hanoi(n) {
    const A = new Stack()
    while(n) {
        A.push(n--)
    }
    console.log(A);
    const B = new Stack()
    const C = new Stack()
    let count = 0
    while(!A.isEmpty()) {
        if (B.isEmpty()) {
            B.push(A.pop())
        } else if (C.isEmpty()) {
            C.push(A.pop())
        } else if (!B.isEmpty() && !C.isEmpty()) {
            B.push(C.pop())
        }
        count++
    }
    console.log(count);
    console.log(B);
}
hanoi(4)