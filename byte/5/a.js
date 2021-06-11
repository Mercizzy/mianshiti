// a.js
const b = require('./b');
console.log(exports.x);
exports.x = 'x';
require('./c');
