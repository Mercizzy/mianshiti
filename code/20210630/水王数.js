// 当一个数字在数组中的数量超过一半时，我们就说这是一个水王数
function waterKing(arr) {
    const length = arr.length
    let tempWaterKing
    let hp = 0
    for (let i=0; i<length; i++) {
        if (hp === 0) {
            tempWaterKing = arr[i]
            hp = 1
        } else if (arr[i] === tempWaterKing) {
            hp ++
        } else if (arr[i] !== tempWaterKing) {
            hp --
        }
    }
    let count = 0
    for (let i=0; i<length; i++) {
        if (arr[i] === tempWaterKing) count ++
        if (count > length >> 1) return tempWaterKing
    }
    return -1
}

// let arr = [1, 2, 3, 4, 3, 3, 3, 3, 5]
let arr = [1, 2, 3, 4, 5]

console.log(waterKing(arr));