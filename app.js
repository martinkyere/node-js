// Reading data in chunks with stream
// Default 64kb
// last buffer - remainder
// highWaterMark = control size


const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt')

stream.on('data', (result) => {
    console.log(result)
})