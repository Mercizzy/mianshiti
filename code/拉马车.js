function manacher (s) {
    if (s.length < 2) return s

    // 第一步：预处理，将原字符串转换为新字符串
    let handleString = '$'
    for (let i = 0; i < s.length; i++) {
        handleString += '#' + s[i]
    }
    // 尾部再加上字符@，变为奇数长度字符串
    handleString += '#@';

    // 第二步：计算数组p、起始索引、最长回文半径
    let n = handleString.length;
    // p数组
    let p = [];
    let id = 0, mx = 0;
    // 最长回文子串的长度
    let maxLength = -1;
    // 最长回文子串的中心位置索引
    let index = 0;
    for (let j = 1; j < n-1; j++) {
        // 参看前文第五部分
        p[j] = mx > j ? Math.min(p[2*id-j], mx-j) : 1;
        // 向左右两边延伸，扩展右边界
        while (handleString[j+p[j]] == handleString[j-p[j]]) {
            p[j]++;
        }
        // 如果回文子串的右边界超过了mx，则需要更新mx和id的值
        if (mx < p[j] + j) {
            mx = p[j] + j;
            id = j;
        }
        // 如果回文子串的长度大于maxLength，则更新maxLength和index的值
        if (maxLength < p[j] - 1) {
            // 参看前文第三部分
            maxLength = p[j] - 1;
            index = j;
        }
    }

    // 第三步：截取字符串，输出结果
    // 起始索引的计算参看前文第四部分
    let start = (index - maxLength) / 2;
    return s.substring(start, start + maxLength);
}

let s = 'assadeccedaqqds'
console.log(manacher(s))