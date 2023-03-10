const http = require('http');

const users = ['Tom', 'Andy', 'Jessica', 'Paul'];

const server = http.createServer((request, response) => {

    /* test 1. change url bar's text ex) http://127.0.0.1:3000/programming
       response.end(`<h1>Hello ${request.url}</h1>}`) */

    // test 2. 
    // if there is nothing default url = "/""
    if (request.url === '/') {
        response.end(`<h1>Welcome developer</h1>`);
    } else if (request.url === `/users`) {
        response.end(`<h1>${users}</h1>`);
    } else if (request.url.split('/')[1] === 'users') {
    //url : /users/1, /users/2 ...
        const userIdx = request.url.split('/')[2];
        const userName = users[userIdx - 1];

        response.end(`<h1>${userName}</h1>`);
    } else {
        response.end(`<h1>Page Not Available</h1>`);
    }
});

// 127.0.0.1:3000 or localhost:3000
server.listen(3000);
