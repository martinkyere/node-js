// EVENT LOOPS IN NODE JS

// const { readFile } = require('fs')

// console.log('start a first task')
// // CHECK FILE PATH
// readFile('./content/async.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(result)
//     console.log('complete next task')
// })
// console.log('starting next task')



// EXAMPLE 1

// SETTIMEOUT
// started operating system process
// console.log('first')
// setTimeout(() => {
//     console.log('second')
// }, 3000)
// console.log('third')
// completed and exited operating system process



// EXAMPLE 2
// SETINTERVAL 
// process stays alive unless
// kill process CONTROL + C
// unexpected error

// setInterval(() => {
//     console.log('hello world')
// }, 2000)
// console.log('I will run first')



// EXAMPLE 3
// SERVER

const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event')
    res.end('Hello people')
})

server.listen(5000, () => {
    console.log('server listening on port : 5000....')
})