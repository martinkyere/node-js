// Problem start if we want to perform multiple actions
// for example if we wnant to read a file from multiple files
// the better solution is to write the code in promise and in async await
// But the best way is to use the 'util' module


// single readFile code 
// readFile('./content/async.txt', 'utf-8', (not, yes) => {
//     if (not) {
//         console.log('there is no file here')
//         return
//     } else {
//         console.log(yes)
//     }
// })

const { readFile, writeFile, } = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


// the async aproach that can select more than one file without multiple 'fs' modules
const start = async () => {
    try {
        const first = await readFilePromise('./content/async.txt', 'utf8')
        const second = await readFilePromise('./content/subfolder/app.text', 'utf8')
        await writeFilePromise('./content/mind-granade.txt',
         `This is awesome : ${first} ${second}`)
        console.log(first)
        console.log(second)
    } catch (error) {
        console.log(`The file does'nt exist in your directory`)
    }
}

start()




// multiple readFile code 
// promise/async await

// const getText = (file) => {
//     return new Promise((resolve, reject) => {
//         writeFile, readFile(file, 'utf-8', (not, yes) => {
//             if (not) {
//                 reject(not)
//             } else {
//                 resolve(yes)
//             }
//         })
        // writeFile(file, 'utf-8', (err, result) => {
        //     if (err) {
        //         reject(err)
        //     } else {
        //         resolve(result)
        //     }
        // })       
//     })
// }

// getText('./content/async.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(`there's no such file`))
