function printMatrix(matrix) {
    if (!(matrix instanceof Array) || matrix.length == 0 || matrix[0].length == 0) {
      console.log('')
      return
    }
    let [length1, length2] = [matrix[0].length, matrix.length]
    let top = 0, left = 0, right = length1-1, bottom = length2-1
    let arr = []
    while (top <= bottom && left <= right) {
      // 先从顶部 从左往右 打印数字
      for (let i=left; i<=right; i++) {
        arr.push(matrix[top][i])
      }
      top++
      // 再从右边 从上往下 打印数字
      for (let i=top; i<=bottom; i++) {
        arr.push(matrix[i][right])
      }
      right--
      // 再从下边 从右往左 打印数字
      if (top -1 != bottom) {
        for (let i=right; i>=left; i--) {
            arr.push(matrix[bottom][i])
        }
      }
      bottom--
      // 再从左边 从下往上 打印数字
      if (left != right+1) {
        for (let i=bottom; i>=top; i--) {
            arr.push(matrix[i][left])
        }
      }
      left++
    }
    console.log(arr);
}

// let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
let matrix = [[1],[2],[3],[4],[5]]
printMatrix(matrix)