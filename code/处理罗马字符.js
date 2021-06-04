const obj = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
};
function romanToInt(s) {
    const result = s.match(/(IV?X?)|(XL?C?)|(CD?M?)|[VLDM]/g);
    let n = 0;
    console.log(result);
    if (result) {
        result.forEach((digest) => {
            n += obj[digest];
        });
    }
    return n;
};

let str = 'MCMXCIV'
console.log(romanToInt(str));