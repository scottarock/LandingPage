var fs = require('fs'),
    http = require('http'),
    port = 6789;

var server = http.createServer(function(request, response) {

  console.log(`client requested URL: ${request.url}`);

  // route the request
  if ( request.url === '/' ) {
    // root route
    fs.readFile('index.html', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  } else {
    // no matching route
    response.writeHead(404, 'File not found!!!')
  }

});

server.listen(port);

console.log(`Server running on localhost port ${port}`);
