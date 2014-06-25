var http = require('http');
var port = process.env.PORT || 8080; // use value from environment variable or 8080 if not set

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!\n');
}).listen(port);
console.log('The server is running! Listening connections at port ' + port);
