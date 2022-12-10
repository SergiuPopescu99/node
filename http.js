const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our homepage!')
    }
    if (req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`<h1>Oooops!</h1>
    <p>We cant seem to find ${req.url.slice(1, req.url.length)}</p>
    <a href="/">Back home </a>`)

})

server.listen(5000);