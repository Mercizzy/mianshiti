function PrintMinNumber(numbers) {
    if (!numbers || numbers.length === 0) {
        return "";
    }
    return numbers.sort(compare).join('');
}

function compare(a, b) {
    const front = "" + a + b;
    const behind = "" + b + a;
    return front - behind;
}

let arr = [7, 9, 8]

console.log(PrintMinNumber(arr));