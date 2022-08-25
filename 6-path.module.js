// const { normalize, resolve, isAbsolute, relative, toNamespacedPath, basename } = require('path');
const path = require('path');

console.log(path.isAbsolute)
console.log(path.normalize)
console.log(path.resolve)

console.log(path.sep)
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath)
const base = path.basename(filePath);
console.log(base)
console.log(__dirname)
console.log(__filename)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
