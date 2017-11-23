var clients = [];

//запоминаем запросы от клиентов
exports.subscribe = function(req, res) {
	console.log('subscribe');
	clients.push(res);

	//если соединение было закрыто
	res.on('close', function() {
		clients.splice(clients.indexOf(res), 1);
	});
};

//Ответ.
exports.publish = function(message) {

	console.log("publish '%s'", message);
	//кикл по массиву и отправляем им ответ
	clients.forEach(function(res) {
		res.end(message);
	});

	clients = []; //очищаем массив, все соединения закрыты
};


//показать активные соединения для отладки
// setInterval(function() {
// 	console.log(clients.length);
// }, 2000);