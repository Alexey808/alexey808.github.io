var http = require('http');
var fs = require('fs');
var chat = require('./chat');



http.createServer(function(req, res) {
	

	switch (req.url) {

		case "/":
			sendFile('index.html', res);
			break;

		case '/subscribe':
			chat.subscribe(req, res);  //запоминаем что обращался клиент
			break;

		case '/publish':
			var body = '';
			req 
				.on('readable', function() {
					body += req.read(); //считываем поток и добовляем все данные в body
					if (body.length > 1e4) { //если пакет слишком большой...
						res.statusCode = 313;
						res.end('Your message is too big for my little chat');
					}
				})
				.on('end', function() {
					//отлавливаем ошибки если json будет не валидным
					try {
						//когда данные полностью получены, разбираем их как json и публикуем в чат
						body = JSON.parse(body);
					} catch(e) {
						res.statusCode = 400;
						res.end('Bad Request');
						return;
					}
					chat.publish(body.message); //пересылаем сообщения всем клиентам
					res.end('ok'); //завершаем вызов post c текущем запросом
				});

			break;

		default:
			res.statusCode = 404;
			res.end('Not found');
	}

}).listen(3000);


function sendFile(fileName, res) {
	var fileStream = fs.createReadStream(fileName);
	fileStream 
		.on('error', function() {
			res.statusCode = 500;
			res.end('Server error');
		})
		fileStream.pipe(res);
}