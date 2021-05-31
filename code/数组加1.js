var plusOne = function(digits) {
    let length = digits.length
    digits[length-1] = digits[length-1] + 1
    for (let i = length - 1; i >= 0; i--) {
        if (i == 0 && digits[0] == 10) {
            digits[0] = 0
            digits.unshift(1)
        }
        if (digits[i] == 10) {
            digits[i] = 0
            digits[i - 1] = digits[i - 1] + 1
        }
    }
    return digits
};
let arr = [1, 2, 3]
console.log(plusOne(arr));