const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    if(req.url === '/') {
        res.end('Server starting out on port 8888')
    }
    if (req.url === '/about') {
        res.end('Here\'s our about page');
    }

    res.write(`
    <h1>You're all caught up</h1>
    <a href="/">Go back home</a>
    `)
})

server.listen(8888)