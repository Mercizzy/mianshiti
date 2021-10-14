let arr = [1, 2, 3]
let temp = arr.filter((v) => {
    if (v > 1) {
        return v
    }
})
console.log(temp);

let list = [
    {
        flag: true,
        count: 1
    },
    {
        flag: false,
        count: 2
    },
    {
        flag: true,
        count: 3
    },
    {
        flag: false,
        count: 4
    },
]
let m = list.filter((item) => {
    if (!item.flag) {
        item.count *= 2
        return item
    }
})
console.log(m);