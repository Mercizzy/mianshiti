let arr = [1, [2, 3, [5, 6]], 4]
console.log(Array.prototype.concat.apply([], arr));
console.log(arr.flat(Infinity));