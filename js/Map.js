let arr = [1, 1, 3, 'a', 'a']
let map = new Map()
arr.map((item, index) => {
    map.set(item, index)
})
console.log(map);