// Event-Driven Programming
// on - Listen for an event
// emit - emit an event

/* const EventEmitter = require('events')

const customEmitter = new EventEmitter()


customEmitter.on('response', (name, id) => {
    console.log(`data recieved from: ${name}, with id: ${id}`)
})

customEmitter.emit('response', 'Martin', 1556)
*/



const http = require('http')

const server = http.createServer()
server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(1000)