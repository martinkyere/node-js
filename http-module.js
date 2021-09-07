// HTTP MODULE
// HTTP module will help us build a servers
// http takes in callback (requst(incoming requst), responds(sending responds from server))

const http = require("http");

const server = http.createServer((req, res) => {
   if (req.url === '/'){
      res.end('welcome to our website')
   }
    if(req.url === "/about"){
       res.end('Here is our short history')
    }
    res.end(`
      <h1>Oops!<h1>
      <p>we can't seem to find the page you are looking for<p>
      <a href="/">Home<a>
    `)
})

server.listen(3000)