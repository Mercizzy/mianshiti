/**
 * push(element(s)):添加一个(或几个)新元素到栈顶。
 * pop():移除栈顶的元素，同时返回被移除的元素。
 * peek():返回栈顶的元素，不对栈做任何修改(该方法不会移除栈顶的元素，仅仅返回它)。 
 * isEmpty():如果栈里没有任何元素就返回 true，否则返回 false。
 * clear():移除栈里的所有元素。
 * size():返回栈里的元素个数。该方法和数组的 length 属性很类似。
 */

class Stack {
    constructor(list) {
        this.list = list || []
    }
    push(item) {
        this.list.push(item)
    }
    pop() {
        return this.list.pop()
    }
    peek() {
        return this.size() ? this.list[this.size() - 1] : undefined
    }
    clear() {
        this.list = []
    }
    size() {
        return this.list.length
    }
    isEmpty() {
        return this.size() === 0
    }
}

module.exports = Stack