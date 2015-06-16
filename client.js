var http = require('http');

http.get('http://localhost:4000', function(response){
  response.on('data', function(chunk) {
    console.log(chunk.toString());
  })
})

//sends request and loads the response
