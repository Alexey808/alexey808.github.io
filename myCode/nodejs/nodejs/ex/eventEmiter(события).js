
//- основной объект для работы с событиями
var EventEmitter = require('events').EventEmitter;

//- создали объект
var server = new EventEmitter;

//- метод on, подписка на события и функция обработчик
server.on('request', function(request) {
	//request.approved = true;
});

server.on('request', function(request) {
	console.log(request);
});

//- обработчик ошибок
server.on('error', function(err) {
	//...
});

//- метод emit, генерация события и передача данных
server.emit('request', {from: 'Клиент'});
server.emit('request', {from: 'Ещё клиент'});

server.emit('error', new Error('Серверная ошибка'));