/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
    this.nums = nums
    this.preNums = [].concat(nums)
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.nums = this.preNums
    return this.nums
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    this.nums = this.nums.sort(() => Math.random() - 0.5)
    return this.nums
};
let arr = [1, 2, 3]
let s = new Solution(arr)
console.log(s.shuffle());
console.log(s.reset());
console.log(s.shuffle());