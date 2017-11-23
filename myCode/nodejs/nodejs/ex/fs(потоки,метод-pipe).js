/* Данный пример можно применять на практике */

/* Происходит следующее:
1) соединение открывается
2) поток считывания и записывания в буфер файла
3) вывод
4) закрытие соединения
*/

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
	if (req.url == '/big.html') {
		var file = new fs.ReadStream('big.html');
		sendFile(file, res);
	}
}).listen(3000);

function sendFile(file, res) {

	//поток считывания и записывания файла
	file.pipe(res); //ридебл.pipe(врайтебл)
	//file.pipe(process.stdout);//вывод в консоль для отладки
	

	//обработка ошибок
	file.on('error', function(err) {
		res.statusCode = 500;
		res.end('Server Error');
		console.error(err);
	});

	//открытие и закрытие файла
	file 
		.on('open', function() {
			console.log('open');
		})
		.on('close', function() {
			console.log('close');
		});

	//если соединение было оборванно, закрываем соединение освобождаем ресурсы
	res.on('close', function() {
		file.destroy();
	});
}

