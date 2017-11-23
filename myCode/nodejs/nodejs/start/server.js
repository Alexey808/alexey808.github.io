
var log = require('./logger')(module);
var db = require('./db');
db.connect(); //обязательный метод коннект

var User = require('./user'); //подключаем директорию user с модулем index.js

function run() { //пример использования модулей
	var vasya = new User("Вася");
	var petya = new User("Петя");

	vasya.hello(petya);

	log(db.getPhrase("Run successful"));
	//console.log(db.getPhrase("Run successful"));
}

if (module.parent) { //если server.js исп как модуль то экспортируем функц run
	exports.run = run;
} else { 	//иначе запускаем run()
	run();
}



