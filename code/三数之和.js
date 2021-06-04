
var threeSum = function(nums) {
    let length = nums.length
    if (length < 3) return []
    if (length == 3) {
        if (nums[0] + nums[1] + nums[2] == 0) {
            return nums
        }
        return []
    }
    nums = nums.sort((a, b) => a-b)
    length = nums.length
    let arr = []
    for (let i=0; i<length-2; i++) {
        if (nums[i] > 0) break
        for (let j=i+1; j<length-1; j++) {
            for (let x=j+1; x<length; x++) {
                let sum = nums[i] + nums[j] + nums[x]
                if (sum == 0) {
                    console.log(i, j, x);
                    arr.push([nums[i], nums[j], nums[x]])
                    if (nums[i] == nums[i+1]) {
                        i++
                    }
                    if (nums[j] == nums[j+1]) {
                        j++
                    }
                    if (nums[x] == nums[x+1]) {
                        x++
                    }
                }
                if (sum > 0) break
            }
        }
    }
    return Array.from(new Set(arr))
};

let arr = [ 0, 0, 0 ]
console.log(threeSum(arr));