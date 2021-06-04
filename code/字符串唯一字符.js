var firstUniqChar = function(s) {
    let map = new Map()
    for (let i=0; i<s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], true)
        } else {
            map.set(s[i], i)
        }
    }
    console.log(map);
    for (let [key, value] of map.entries()) {
       if (value !== true) return value
    }
};
let str = 'leetcode'

console.log(firstUniqChar(str));