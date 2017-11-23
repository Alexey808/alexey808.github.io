var util = require('util');

//-

var pharses = {
	'hello': 'привет',
	'world': 'мир'
};

//-

function PhraseError(message) {
	this.message = message; //получаем сообщение об ошибке
	Error.captureStackTrace(this, PhraseError);//получаем стек ошибки до тек констр
}
util.inherits(PhraseError, Error);
PhraseError.prototype.name = 'PhraseError';

function HttpError(status, message) {
	this.status = status; //получить статус ошибки
	this.message = message; //получаем сообщение об ошибке
	Error.captureStackTrace(this, HttpError); //получаем стек ошибки до тек констр
}
util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';

//- 

function getPhrase(name) {
	if (!pharses[name]) {
		throw new PhraseError('Нет такой фразы: ' + name); //HTTP 500
	}
	return pharses[name];
}

function makePage(url) {
	if (url != 'index.html') {
		throw new HttpError(404, 'Нет такой страницы'); //HTTP 404
	}
	return util.format('%s, %s!', getPhrase('hello1'), getPhrase('world'));
}

//-

try {
	var page = makePage('index.html');
	console.log(page);
} catch (e) { 
	if (e instanceof HttpError) {
		console.log(e.status, e.message);
	} else {
		console.error('Ошибка %s\n сообщение: %s\n стек: %s', e.name, e.message, e.stack);
	}
}