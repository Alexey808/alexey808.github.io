var http = require("http");
//http.createServer(function(request,response){
//     
//    response.end("Hello NodeJS!");
//     
//}).listen(3000, "127.0.0.1",function(){
//    console.log("Сервер начал прослушивание запросов на порту 3000");
//});


http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(3000);
 
console.log('Server running at http://localhost:3000/');