//http.Server -> net.Server -> EventEmitter
const http = require('http');
const server = new http.Server();

server.listen(8000, '127.0.0.1');

//- свой метод emit для отслеживания событий
var emit = server.emit;
server.emit = function(event) {
	console.log(event);
	emit.apply(server, arguments);
};

server.on('request', (req, res) => {
	res.end('Start server');
});