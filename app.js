// EVENT LOOPS IN NODE JS

const { readFile } = require('fs')

console.log('start a first task')
// CHECK FILE PATH
readFile('./content/async.txt', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('complete next task')
})
console.log('starting next task')