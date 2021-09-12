// STREAMS
// using streams when reading files
// streaming is very handy when comes to reading continues files or big files
// Writeable - use to write data sequencially
// Readable - use to read data sequencially
// Duplex - use to read and write data sequencially
// Transform - use to modify data when writing or reading
// we can use Events on streams


// creates file with big data
const { writeFileSync } = require('fs')
for (let i = 0; i < 10000; i++) {
  writeFileSync(
      './content/big.txt',
      `hello world ${i}\n`,
       { flag: 'a' } 
       )
}