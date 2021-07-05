/**
 * 给定一个包含 n 个整数的数组nums，判断 nums 中是否存在三个元素a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]
 * 满足要求的三元组集合为：
 * [[-1, 0, 1],[-1, -1, 2]]
 */

function threeSum(arr) {
    let returnArr = []
    if (arr.length < 3) return returnArr
    arr.sort((a, b) => a-b)
    let length = arr.length
    let first = 0, end = length - 1
    while (first < end-1) {
        let twoSUm = arr[first] + arr[end]
        if (twoSUm < 0) {
            first++
        } else {
            for (let i=first+1; i<end; i++) {
                if (twoSUm + arr[i] === 0) {
                    returnArr.push([arr[first], arr[i], arr[end]])
                    while(first == ++first) {
                        first++
                    }
                    while(end == --end) {
                        end--
                    }
                    break
                }
            }
        }
    }
    return returnArr
}

let nums = [-1, 0, 1, 2, -1, -4]

console.log(threeSum(nums));