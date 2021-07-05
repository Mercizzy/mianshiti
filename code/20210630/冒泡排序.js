let arr = [4,5,1,3,2,6,7]

function bubbleSort(arr) {
    let count = 0
    for (let i=arr.length; i>1; i--) {
        for (let j=0; j<i-1; j++) {
            count++
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1)
            }
        }
    }
    console.log(arr, count);
}
function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
bubbleSort(arr)

// 定义一个flag，标志一次循环有没有发生位置交换，
// 如果没有，则可以判断为已经排好序，后面的循环不用再做了
function betterBubbleSort(arr) {
    let count = 0
    for (let i=arr.length; i>1; i--) {
        let flag = false
        for (let j=0;  j<i-1; j++) {
            count++
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1)
                flag = true
            }
        }
        if (!flag) break
    }
    console.log(arr, count);
}

let arr2 = [4,5,1,3,2,6,7]
betterBubbleSort(arr2)

// 定义一个值，记录一次遍历里，最后交换位置的index
// 因为后面的位置都没有发生交换，说明已经排好序
function bestBubbleSort(arr) {
    let len = arr.length-1
    let pos = 0
    let count = 0
    for (let i=arr.length; i>1; i--) {
        let flag = false
        for (let j=0;  j<len; j++) {
            count++
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1)
                pos = j
                flag = true
            }
        }
        len = pos
        if (!flag) break
    }
    console.log(arr, count);
}
let arr3 = [4,5,1,3,2,6,7]
bestBubbleSort(arr3)