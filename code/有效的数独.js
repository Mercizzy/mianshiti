var isValidSudoku = function(board) {
    let row = [], col = [], cell = [],length = board.length
    for (let i=0; i<length; i++) {
        for (let j=0; j<length; j++) {
            let num = board[i][j]
            let k = parseInt(i / 3) * 3 + parseInt(j / 3);
            if (num == '.') continue
            row[i] = row[i] instanceof Array ? row[i] : []
            col[j] = col[j] instanceof Array ? col[j] : []
            cell[k] = cell[k] instanceof Array ? cell[k] : []
            if (row[i].includes(num) || col[j].includes(num) || cell[k].includes(num)) {
                console.log(row);
                console.log(col);
                console.log(cell);
                console.log(num);
                return false
            }
            row[i].push(num)
            col[j].push(num)
            cell[k].push(num)
        }
    }
    return true
};
let arr = [[".","8","7","6","5","4","3","2","1"],["2",".",".",".",".",".",".",".","."],["3",".",".",".",".",".",".",".","."],["4",".",".",".",".",".",".",".","."],["5",".",".",".",".",".",".",".","."],["6",".",".",".",".",".",".",".","."],["7",".",".",".",".",".",".",".","."],["8",".",".",".",".",".",".",".","."],["9",".",".",".",".",".",".",".","."]]
console.log(isValidSudoku(arr));