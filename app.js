const logger = require("./logger")

function sayHello(name) {
    console.log("Hello " + name);
}

//logger.log("Popica")
// console.log(__filename); //complete path to that file
// console.log(__dirname); //
const path = require('path')
// var pathObj = path.parse(__filename);
// console.log(pathObj)
const os = require("os");
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log('TOTAL MEMORY ' + totalMemory);
console.log(`free memory ${freeMemory}`);
const user = os.userInfo();
//Method returns the shystem uptime in senconds
console.log(`System uptime is ${os.uptime()} seconds`);
console.log(user);
const currentOs = {

    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs)

const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath)
console.log(path.basename(filePath))

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);
// const fs = require("fs");
// const { fileURLToPath } = require('url');
// const file = fs.readdirSync("./");
// console.log(file);
// fs.readdir('./', (err, res) => {
//     if (err) console.log("Error", err);
//     else console.log("Result", res)

// })
// const EventEmitter = require("events");//class
// const emitter = new EventEmitter();
// emitter.on('messageLogged', function (arg) { console.log('Listener called!', arg) })
// emitter.emit('messageLogged', { id: 1, url: "http://" }) //signalling that n event has happends
