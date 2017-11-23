//Чтение файла
	var fs = require('fs');
	//console.log(fs.readFileSync('code.txt')); // в бинарном виде
	//console.log(fs.readFileSync('code.txt', {encoding: 'utf-8'})); //расшифровываем и выводим
	



/* записали
	fs.writeFile('code.txt', 'text', function(err){
		if (err) throw err;
	});
*/


/* декодим */
	console.log(''+fs.readFileSync('code.txt')); //автоопределение кодировки и вывод