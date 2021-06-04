var rotate = function(matrix) {
    let length = matrix.length;
    for (let i = 0; i < parseInt(length / 2); i++)
        for (let j = i; j < length - i - 1; j++) {
            let temp = matrix[i][j];
            let m = length - j - 1;
            let n = length - i - 1;
            console.log(i, j, m, n);
            matrix[i][j] = matrix[m][i];
            matrix[m][i] = matrix[n][m];
            matrix[n][m] = matrix[j][n];
            matrix[j][n] = temp;
        }
};
let arr = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
rotate(arr)
console.log(arr);


// 00->30 30->33 33->03 03->00
// 01->20 20->32 32->13 13->01
// 02->10 10->31 31->23 23->02
// 11->21 21->22 22->12 12->11