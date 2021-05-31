let obj = {
  b: 1
};
module.exports = obj

setTimeout(() => {
  obj.b = 2
}, 2000)