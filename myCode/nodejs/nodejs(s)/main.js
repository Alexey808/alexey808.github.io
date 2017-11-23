/*
--- Заметки ---
	дополнительные библиотеки для сложного ассинхроного программирования
		'async(асИнк)'
		нативные промисы 'promises' и библиотеки для работы с ним
		'icedcoffeescript(аисдкоффескрипт)'


	4 класса стрима. Стримы - это обстрактный интерфейс. Они имеют общий родительский класс EventEmitter
		Duplex
		Readable
		Writable
		Transform


HEX — формат файла, предназначенного для представления произвольных двоичных данных в текстовом виде.
octet - байты в двоичном представлении

// --- Проверка работы node/nodemon ---
var counter = 0;
setInterval(function(){
	console.log("Counter value " + counter++);
}, 5000);

// --- Глобал ---
// вывести все свойства global
	console.log(global); 

// --- Стандартная библиотека fs---
//Cтандартная библиотека существующая в виде набора стандартных модулей. 
//Если метод с препиской Sync это синхронный метод, другие асинхронные.

//Вывести все методы
	var fs = require('fs');
	console.log(fs);

//Запись в файл
	var fs = require('fs');
	fs.writeFile('hello.txt', 'Some contents', function(err){
		if (err) throw err;
	});
	
//Запись в конец файла
	var fs = require('fs');
	fs.appendFile('hello.txt', '\nSome contents', function(err){
		if (err) throw err;
		//если нужно сделать чтонибудь после записи в файл, то в асинхроном пишется тут в колбэке, а не после.
	});

//Чтение файла
	var fs = require('fs');
	console.log(fs.readFileSync('hello.txt')); // в бинарном виде
	console.log(fs.readFileSync('hello.txt', {encoding: 'utf-8'})); //расшифровываем и выводим
	console.log(''+fs.readFileSync('hello.txt')); //автоопределение кодировки и вывод


// --- Класс Buffer(массив байтов) ---
	//Кодирование строки
	var buffer = new Buffer('Sometimes the same is different, but mostly its the same', 'utf-8');//закодируем строку
	//console.log(buffer);//вывод буфера в консоль, пока в 16-ти ричном представлении
	[].slice.call(buffer).forEach(function(octet){//преоброзование буфера в массив, и вывод октетов(octet)
	//поскольку в байте 8бит, нужно добавить 8 нулей
	process.stdout.write(('00000000' + octet.toString(2)).slice(-8)); //где process.stdout.write аналог console.log
	});


// ---  ---

var fs =require('fs');
path = require('path'); //модуль path, возращает расширение файла


//fs.mkdirSync('myFolder'); //создание папки

//fs.renameSync('hello.txt', 'newName.txt'); //переименование файла

//fs.renameSync('newName.txt', 'myFolder/newName.txt'); //перемещение файлов

// console.log(process.cwd()); //показать путь откуда выполняются все методы

//чтение файлов в папке
// fs.readdir('myFolder', function(err, files){
// 	console.log(files);
// });

//добавление преписки old к файлам до расширения txt
// fs.readdir('myFolder', function(err, files){
// 	files.forEach(function(file){
// 		var ext = pathc.extname(file);
// 		fs.renameSync(file, pathc.basename(file, ext) + '_old' + ext);
// 	});
// });

// //добавление преписки old к файлам до расширения txt, работая из текущей директории, способом указания пути
// var folder = 'myFolder';
// fs.readdir(folder, function(err, files){
// 	files.forEach(function(file){
// 		var ext = path.extname(file);
// 		fs.renameSync(folder + '/' + file, folder + '/' +_path.basename(file, ext) + '_old' + ext);
// 	});
// });

//добавление преписки old к файлам до расширения txt, работая из текущей директории, способом определения пути
// var folder = 'myFolder';
// fs.readdir('myFolder', function(err, files){
//	if (err) throw err;
// 	process.chdir(folder); //определяем путь
// 	files.forEach(function(file){
// 		var ext = path.extname(file);
// 		fs.renameSync(file, path.basename(file, ext) + '_old' + ext);
// 	});
// });

//пример вывода ошибки, если папки unexistringFolder не существует
// var folder = 'unexistringFolder';
// try {
// 	var files = fs.readdirSync(folder);
// } catch (e) {
// 	console.log(e);
// }
*/

// ### СТРИМЫ ###	
	/*
	//---Создания стрима класс Readable---
		var net = require('net');//модуль net

		var Readable = require('stream').Readable, 
			stream = new Readable(),
			data = ('At the end of 2012, I Was talking with a good friend of mine who runs  small custom woodworking company. We were discussing business over the last year and a few things we learned.').split(' ');

			stream._read = function() {
				if (data.length) {
					setTimeout(function(){
						stream.push(data.shift());
					}, 200);
				} else {
				stream.push(null); //сигнал что весь стрим прочитан
			}
		};
		//метод pipe вытаскивает все данные из стрима, и направляет их в стрим 1 аргумента
		//где process.stdout - это стандартный вывод, консоль
		stream.pipe(process.stdout); 

	//---Создание стрима класс Transform.
		//Если это отдельный файл с названием transform.js а стрим Readable с названием main.js то при 
		//введении в консоли "node main.js | node transform.js" будет выполнятся совместная работа 2 файлов
		var Transorm = require('stream').Transform, 
		tr = new Transform();

		tr._transform = function(chunk, enc, cb){ //(кусок данных, кодировка, кол бэк)
			var string = String(chunk);
			this.push(string + '(' + string.lenght + ') ');
			cb();
		};

		process.stdin
		.pipe(tr)
		.pipe(process.stdout);
	*/

// ### НАПИСАНИЕ ПРОСТЕЙШЕГО "TCP" СЕРВЕРА ###
	/*
	// При подключении к серверу, пишет адрес и номер порта подключившегося, также если он напишет к примеру
	//слово, то оно выведется в верхнем регистре.
	//
	//подключаем модуль net
	var net = require('net');
	//функция которую мы передаём в createServer будет вызыватся для каждого новго соединения
	var server = net.createServer(function(socket){
		//выводим в консоль удалённый адрес и порт при помощи геттеров
		console.log('Connected ' + socket.remoteAddress + ' ' + socket.remotePort);
		//метод стрима on  позволяет регистрировать колбэки для определённых событий, когда приходят данные
		socket.on('data', function(data){
			console.log(data);
			//возращаем данные назад, но изменённые. приведём к верхнему регистру
			socket.write(String(data).toUpperCase());
		});
		//если удалённый хост закрое соединение, выведем сообщение
		socket.on('close', function(){
			console.log('Connection closed');
		});
	});
	//у объекта класса server есть метод listen, нужен для запуска сервера, он принимает номер порта
	server.listen(8000);
	//выводим что всё хорошо мы слушаем на 8000 порту
	console.log('Listening on port 8000');
*/	

// ### НАПИСАНИЕ "HTTP" СЕРВЕРА ###
/*
//подключение модуля http
	var http = require('http'),
		server = http.createServer(function(req, res) { //(запрос,ответ)
			console.log(req.headers);//показать заголовки (как доп инф)
			console.log(req.url);//показать url (как доп инф)
			//метод чтобы писать http Заголовки(код ответа,объект содержащий заголовки)
			res.writeHead(200, {
				'Content_Type': 'text/plain'
			}) 
		//метод write чтобы писать тело ответа
		res.write('Hello http!');
		//закрываем соединение
		res.end();
		});
	//у объекта класса server есть метод listen, нужен для запуска сервера, он принимает номер порта
	server.listen(8000);
	//выводим что всё хорошо мы слушаем на 8000 порту
	console.log('Listening on port 8000');
*/

// ### СОЗДАНИЕ СЕРВЕРНОГО ПРИЛОЖЕНИЯ ###
/*
---команды (node.js command prompt)---
npm init 					-создание файла package.json
npm install express --save	-установка framework express с добавлением в список зависимостей флагом --save
npm install jade --save		-установка шаблонизатора

Плагин для хрома JSON Formatter, для отлидки
Плагин для хрома Wappalyzer, для определения на чём сделан сайт

шаблонизатор jade
middleware(миделвэа) небольшая обстакция появилась от фроемворка connect на котором основан express.
framework express, простой минималистичный фреймвор (создание серверной части приложений).
для локальной установки нужно создать package.json (команда "npm init" и везде enter) который будет содержать основную информацию о
проекте и список зависимостей



var express = require('express') //подключение фроемворка
var app = express(); //вызываем объект
server;

app.use(function(req,res,next){ //где next-следующий колбэк в очереди
	console.log('%s %s', req.method, req.url); //вывести адресную строку
	next();
});

//app.disable('x-powered-by'); //отключить инфу о том что сайт на nodejs express
//console.log(app); //посмотреть методы express
app.get('/', function(req, res){
	res.send('Content');
});


//создаём и запускаем сервер (порт, колбек)
var server = app.listen(3000, function(){
	console.log('Listening on port 3000');
});


//после 30м обзорного видео перестал записывать примеры




----------------

js
	express(фроемворк)
	jade(шаблонизатор)
	body-parser(модуль)
---

body-parser


express
jade
middleware

Don't Repeat YouRself


--------
gulp - система сборки js, позволяет собирать большие проекты
	coffe-script
	gulp-connect
	gulp-clean
	gulp-coffe
	gulp-stylus
	gulp-jade
	gulp-uglify
	gulp-requirejs
--------
raphael.js - библиотека для работы с векторной графикой в браузере
	snap.svg библиотека основанная на raphael.js только с отказом поддержки старых браузеров. Расширяет возможности для программирования.
	snap animate глобальная функция анимации
--------
приватные методы должны начинатся с _name

1 46 55*/