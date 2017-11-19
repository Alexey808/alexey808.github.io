//var phrases = require('db'); //подключаем модуль формата .json
var db = require('./../db'); //Беза данных
var log = require('./../logger')(module);

function User(name) {
	this.name = name;
}

User.prototype.hello = function(who) {
	log(db.getPhrase("Hello") + ", " + who.name);
	//console.log(db.getPhrase("Hello") + ", " + who.name);
};

//...

console.log("user.js is required!");

module.exports = User; //экспортируем наши данные

//console.log(module); //инф о модулях
