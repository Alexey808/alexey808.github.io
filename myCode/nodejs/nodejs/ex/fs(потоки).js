/*Обработчики будут установлены до того как будет считан первый фрагмент данных*/

var fs = require('fs');
var stream = new fs.ReadStream('bigFile.html');

//читаем
stream.on('readable', function() {
	var data = stream.read();
	console.log(data.length);
});

//завершаем
stream.on('end', function() {
	console.log('the end');
});

//ловим ошибки
stream.on('error', function(err) {
	if (err.code == 'ENOENT') {
		console.log('Файл не найден.');
	} else {
		console.error(err);
	}
});

/* 
Вывод будет следующий:
65536 //размер куска данных в потоке 64кб
65536
65536
65536
65536
65536
65536
65536
65536
65536
65536
65536
9170
 */