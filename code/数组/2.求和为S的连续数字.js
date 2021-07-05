// 输入一个正数S，打印出所有和为S的连续正数序列。
// 例如：输入15，有序1+2+3+4+5 = 4+5+6 = 7+8 = 15 所以打印出3个连续序列1-5，5-6和7-8。

function getStrList(s) {
    let small = 1, big = 2
    let sum = small + big
    let arr = []
    while(small < big) {
        if (sum < s) {
            sum += ++big
        } else if (sum > s) {
            sum -= small++
        } else {
            arr.push(getArr(small, big))
            big++
            sum = sum - small + big
            small++
        }
    }
    return arr
}
function getArr(small, big) {
    let arr = []
    for (let i=small; i<=big; i++) {
        arr.push(i)
    }
    return arr
}

console.log(getStrList(100));