
// code blocking(code that slows the stack) users
// should be avoided since it slows the call stack
 

const http = require('http')

const Server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home page')
    }
    if (req.url === '/about') {
        // BLOCKING CODE
        for (let i = 0; i < 70; i++) {
            for (let j = 0; j < 70; j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end('About Page')
    }
    res.end('Ooops! Your page could not be found')
})

Server.listen(5000, () => {
    console.log('Server is Listening on port 5000....')
})