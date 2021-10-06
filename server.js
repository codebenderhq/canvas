var connect = require('connect');
var http = require('http');

var app = connect();

// respond to all requests
app.use(function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ a: 1 }));
});


console.log('creating server')
//create node.js http server and listen on port
http.createServer(app).listen(3000)
console.log('server created on port',3000);