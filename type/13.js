// abbac->c

function xxl(str) {
    if (str.length < 2) {
        return str == 'b' ? '' : str
    }
    let arr = str.split('')
    let slow = 0,fast = 1
    while(fast < arr.length && arr.length > 0) {
        if (arr[slow] == arr[fast]) {
            arr.splice(slow, 2)
        } else if (arr[slow] == 'b') {
            arr.splice(slow, 1)
        } else if (arr[fast] == 'b') {
            arr.splice(fast, 1)
        } else {
            slow++
            fast++
        }
    }
    return arr.join('')
}

let str = 'abbaac'
console.log(xxl(str));