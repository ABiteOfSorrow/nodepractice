const http = require('http');

let server = http.createServer(function (request, response) {
    response.end('<h1>Hello World</h1>')
});

// 127.0.0.1:3000 or localhost:3000
server.listen(3000);