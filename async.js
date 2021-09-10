

// BUILT IN BODULE
// FILE SYSTEM(FS) MODULE
// 2FLAVOURS OF FS ARE
// 1, ASYNC(NON BLOCKING)
// 2, SYNC(BLOCKING)


// ASYNC METHOD
// async is callback function
// async await is somewhat easier to use 

// const { readFile, writeFile } = require('fs')

// console.log('start')
// readFile('./content/subfolder/app.text','utf8', (err, result) => {
//    if (err) {
//       console.log(err)
//       return
//    }
//    const first = result;
//    readFile('./content/subfolder/test.text','utf-8',(err)=>{
//       if (err) {
//          console.log(err)
//          return
//       }
//       const second = result
//       writeFile(
//          './content/async.txt',
//       'Here is the result',
//       (err, result) => {
//          if (err){
//             console.log(err);
//             return;
//          }
//          console.log('done with this task');
//       }) 
//    })
// })
// console.log('startin a new task')

//EXAMPLE 2
// const { readFileSync, writeFileSync } = require ('fs')
// console.log('start');
// const first = readFileSync('./content/subfolder/app.text', 'utf8')
// const second = writeFileSync('./content/subfolder/file.txt',`my name is Martin Kyere Dadzie:`, 'utf8')

// writeFileSync(
//    './content/subfolder/result.txt',
//    `the year is over ${first},${second}`, {flag: 'a'}
// )
// console.log('done with the task');
// console.log('starting the next one');





// ASYNC PATTERNS IN NODE JS

const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/subfolder/file.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/result-sync.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/async-patterns.txt',
            `Here is the result : ${first}, ${second}`,
        (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log('done with this task')
        })
    })
})
