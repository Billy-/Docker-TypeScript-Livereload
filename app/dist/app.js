"use strict";
var http = require('http');
http.createServer(function (req, res) {
    res.end('Hello World');
}).listen('8080');
console.log('server listening');
