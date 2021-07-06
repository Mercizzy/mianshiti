// 一般用于范围小，数量达的排序

let arr = [1, 2, 0, 4, 5, 1, 4, 5, 3, 2, 1, 0, 2, 4, 3, 0, 1, 2]
function countSort(arr) {
    let temp = []
    for (let i=0; i<arr.length; i++) {
        temp[arr[i]] = temp[arr[i]] ? temp[arr[i]]+1 : 1
    }
    let reArr = []
    for (let i=0; i<temp.length; i++) {
        for (let j=0; j<temp[i]; j++) {
            reArr.push(i)
        }
    }
    return reArr
}
console.log(countSort(arr));

let arr2 = [
    {
        name: '小灰',
        score: 90,
    },
    {
        name: '大黄',
        score: 99,
    },
    {
        name: '小红',
        score: 94,
    },
    {
        name: '小白',
        score: 95,
    },
    {
        name: '小绿',
        score: 94,
    },
]
function betterCountSort(arr) {
    let temp = []
    for (let i=0; i<arr.length; i++) {
        let score = arr[i].score-90
        temp[score] = temp[score] ? temp[score]+1 : 1
    }
    // console.log(temp);
    let sum = 0
    for (let i=0; i<temp.length; i++) {
        sum += temp[i] ? temp[i] : 0
        temp[i] = sum
    }
    console.log(temp);
    let reArr = []
    for (let i=arr.length-1; i>=0; i--) {
        let score = arr[i].score-90
        console.log(score, temp[score]);
        reArr[temp[score]-1] = arr[i]
        temp[score] = temp[score] - 1
    }
    console.log(reArr);
    console.log(reArr.length);
}
betterCountSort(arr2)