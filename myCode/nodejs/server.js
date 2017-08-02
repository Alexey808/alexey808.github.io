

// --- Модули ------------------------------------------------------+
var http = require('http'); // SERVER

// --- SERVER ------------------------------------------------------+
http.createServer((request, response)=> {
	response.end('Hello NodeJS!');
}).listen(3000, '127.0.0.1', ()=> {
	console.log('Сервер начал прослушивание запросов на порту 3000');
});


