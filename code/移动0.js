var moveZeroes = function(nums) {
    nums.sort((a, b) => {
        if (a == 0) return 1
        if (b == 0) return -1
        return 0
    })
};
let arr = [0,1,0,3,12]
moveZeroes(arr)
console.log(arr);