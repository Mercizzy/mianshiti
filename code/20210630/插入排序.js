let arr = [3,2,5,1,7,9,6]

function selectionSort(arr) {
    for (let i=1; i < arr.length; i++) {
        for (let j=i; j>0; j--) {
            if (arr[j] < arr[j-1]) {
                swap(arr, j, j-1)
            } else {
                break
            }
        }
    }
    console.log(arr);
}
function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

selectionSort(arr)