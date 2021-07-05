// 循环找数组中最小的值，放在数组的最前面
let arr = [5, 2, 4, 3, 1]

function selectSort(arr) {
    for (let i=0; i<arr.length-1; i++) {
        let minIndex = i
        for (let j=i+1; j<arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }
        swap(arr, i, minIndex)
    }
    console.log(arr);
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

selectSort(arr)