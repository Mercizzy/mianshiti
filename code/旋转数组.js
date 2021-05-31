var rotate = function(nums, k) {
    if (k > nums.length) k = k % nums.length
    Array.prototype.unshift.apply(nums, nums.splice(nums.length-k, k))
};

let nums = [1,2,3,4,5,6,7]
let k = 3
rotate(nums, k)
console.log(nums);
