const { readFileSync, writeFileSync} = require('fs');

console.log(readFileSync)
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(`
${first}
${second}
`)

const writeThird = writeFileSync('./content/third.txt', 'The third file did change, I think!');
console.log(writeThird)
console.log('Done with this task!')
console.log('Starting with the next one!')
// const third = readFileSync('./content/third.txt', 'utf8', {flag : 'a'});
// console.log(third)

readFileSync('./content/third.txt', 'utf8', {flag : 'a'})