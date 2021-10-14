let arr = [1, 2, 3]

let arr2 = arr.map((item) => {
  if (item == 2) {
    return;
  }
  return item
})
console.log(arr2);

let arr3 = []
arr.forEach((ele) => {
  if(ele == 2) {
    return;
  }
  arr3.push(ele)
})
console.log(arr3);