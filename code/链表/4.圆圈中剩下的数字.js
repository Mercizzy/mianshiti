/**
 * n个人组成一圈，每个m个人杀死一个，求最后剩下的那个
 */
function lastOne(n, m) {
    if (n < 1 || m < 1) {
        return -1
    } else {
        return safe(n, m)
    }
}
function safe(n, m) {
    if (n === 1) {
        return 0
    } else {
        return (safe(n-1, m) + m) % n
    }
}


/**
 * 0,1,3,4,5,6,7,8,9
 * n === 1, reutrn 0
 * n === 2, return (0+3) % 2 === 1
 * n === 3, return (1+3) % 3 === 1
 * n === 4, return (1+3) % 4 === 0
 * n === 5, return (0+3) % 5 === 3
 * n === 6, return (3+3) % 6 === 0
 * n === 7, return (0+3) % 7 === 3
 * n === 8, return (3+3) % 8 === 6
 * n === 9, return (6+3) % 9 === 0
 * n === 10, return (0+3) % 10 === 3
 */

console.log(lastOne(10, 3));