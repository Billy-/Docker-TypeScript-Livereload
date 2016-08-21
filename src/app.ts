import * as http from 'http'

http.createServer((req, res) => {
    res.end('Hello World')
}).listen('8080')
console.log('server listening')