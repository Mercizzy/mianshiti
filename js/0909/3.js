function Calculator(initValue) {
  this.initValue = initValue
  this.initValueArr = [initValue]
}
Calculator.prototype.add = function(number) {
  this.initValue += number
  this.initValueArr.push(`+${number}`)
  return this
}
Calculator.prototype.substract = function(number) {
  this.initValue -= number
  this.initValueArr.push(`-${number}`)
  return this
}
Calculator.prototype.result = function(number) {
  console.log(`${this.initValueArr.toString().replace(/,/g, '')}=${this.initValue}`);
}
  

const cal = new Calculator(50);
cal.add(10).substract(1000).add(1).substract(100).result().add(1)
