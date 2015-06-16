var http = require('http');

var server = http.createServer(function(request, response) {
  response.end('You got it! Good Job!')
})

server.listen(4000)
