const fs = require('fs');


const first = fs.readFileSync('./content/first.txt', 'utf8')
const second = fs.readFileSync('./content/second.txt', 'utf8')
console.log(first, second)

const newFile = fs.writeFileSync('./content/GOAT.txt',
    'MESSI IS THE GOAT\n!', { flag: 'a' })
