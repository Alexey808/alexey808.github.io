var clients = [];

exports.subscribe = function(req, res) {
	console.log('subscribe');
	clients.push(res);

	//если соединение было закрыто
	res.on('close', function() {
		clients.splice(clients.indexOf(res), 1);
	});
};

//отправляем сообщение всем кто подписался "publish"
exports.publish = function(message) {

	console.log("publish '%s'", message);

	clients.forEach(function(res) {
		res.end(message);
	});

	clients = [];
};


//показать активные соединения для отладки
setInterval(function() {
	console.log(clients.length);
}, 5000);