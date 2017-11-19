//--- Эхо сервер ---
// http://127.0.0.1/echo?message=Hello -> Hello
/* Всё что после = выводит если это "/echo?message=" иначе стр не найдена.*/

var http = require('http');
var url = require('url');

var server = new http.Server(function(req, res) {

	var urlParsed = url.parse(req.url, true);

	console.log(req.method, req.rul, urlParsed);

	if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
		res.end(urlParsed.query.message);
	} else {
		res.statusCode = 404;
		res.end('Page not found');
	}
});

server.listen(8000, '127.0.0.1');
