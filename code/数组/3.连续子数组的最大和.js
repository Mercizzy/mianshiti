/**
 * 输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值，要求时间复杂度为O(n)
 * 例如:{6,-3,-2,7,-15,1,2,2},连续子向量的最大和为8(从第0个开始,到第3个为止)。
 */

function max(arr) {
    if (arr.length == 1) {
        console.log(arr[0]);
        return 
    }
    let max = arr[0], sum = arr[0]
    for (let i=1; i<arr.length; i++) {
        sum = sum + arr[i] > 0 ? sum + arr[i] : arr[i]
        max = Math.max(sum, max)
    }
    console.log(max); 
}

let arr = [6,-3,-2,7,-15,1,2,2]
max(arr)