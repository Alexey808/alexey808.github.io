
--- Синхронный ------------------------------------------------------

	//Блокирует интерпретатор javascript
	var http = require('http');
	var fs = require('fs');

	http.createServer(function(req, res) {
		var info;
		if (req.url == '/') {
			try {
				info = fs.readFilesSync('index.html');
			} catch (err) {
				console.error(err);
				res.statusCode = 500;
				res.end('На сервере произошла ошибка!');
				return;
			}
			res.end(info);
		} else { /* 404 */ }
	}).listen(3000);


--- Асинхронный -----------------------------------------------------

	var http = require('http');
	var fs = require('fs');

	http.createServer(function(req, res) {
		var info;

		if (req.url == '/') {

			fs.readFile('index.html', function(err, info) {
				if (err) {
					console.error(err);
					res.statusCode = 500;
					res.end('На сервере произошла ошибка!');
					return;
				}
				res.end(info);
			});
		} else { /* 404 */ }
	}).listen(3000);