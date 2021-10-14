// 实现一个可以无限执行的方法
// 最后的valueOf方法返回所有参数的和
// add(1, 2, 3)(1, 2)(1).valueOf() => 10

function add(...args) {
  aramsArr = args
  let fn = function (...args) {
    aramsArr.push(...args)
    return fn
  }
  fn.valueOf = function() {
    let sum = aramsArr.reduce((all, current) => all + current, 0)
    console.log(sum);
  }
  return fn
}
let temp = add(1, 2)(3, 4)
temp.valueOf()
