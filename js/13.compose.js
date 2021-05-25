function compose(...args) {
    return function (...args2) {
        let result;
        while (args.length) {
            result = args.shift()(...args2)
        }
        return result
    }
}

function add(x, y) {
    console.log(this);
    return x + y
}

function toString(s) {
    return s.toString()
}
let com = compose(toString, add)
console.log(com(4, 5));