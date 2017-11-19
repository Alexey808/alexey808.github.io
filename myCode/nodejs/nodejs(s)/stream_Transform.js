//---Создание стрима класс Transform
var Transorm = require('stream').Transform, 
tr = new Transform();

tr._transform = function(chunk, enc, cb){ //(кусок данных, кодировка, кол бэк)
	var string = String(chunk);
	this.push(string + '(' + string.lenght + ') ');
	cb();
};

process.stdin.pipe(tr).pipe(process.stdout);
