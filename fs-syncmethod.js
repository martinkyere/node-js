// BUILT IN MODULE
// FILE SYSTEM(FS) MODULE
// 2FLAVOURS OF FS ARE
// 1, ASYNC(NON BLOCKING)
// 2, SYNC(BLOCKING)

// SYNC METHOD
// how to read from a file system
// the (flag:) overwrites everything
const { Console } = require('console')
const {readFileSync, writeFileSync, writeFile} = require('fs')

const first = readFileSync('./content/subfolder/app.text', 'utf-8')
const second = readFileSync('./content/subfolder/test.text', "utf-8")
console.log(first)
console.log(second)

writeFileSync(
   './content/result-sync.txt',
   `Here is the result : ${first}, ${second}`, {flag: 'a'}
)