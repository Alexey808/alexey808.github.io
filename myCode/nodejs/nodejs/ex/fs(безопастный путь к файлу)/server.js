//http://127.0.0.1:3000/index.html?secret=true
//
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var ROOT = __dirname + "/public";

//сервер
http.createServer(function(req, res) {
    if (!checkAccess(req)) {
        res.statusCode = 403;
        res.end('Tell me the secret to access!');
        return;
    }
    sendFileSafe(url.parse(req.url).pathname, res);
}).listen(3000); //

//Проверка доступа
function checkAccess(req) {
    return url.parse(req.url, true).query.secret == 'true'
}

//Отправка файла
function sendFileSafe(filePath, res) {
    //получив путь от пользователя отослать файл из соответствующей 
    //директории учитывая поддиректории

    //декодирование
    try {
        filePath = decodeURIComponent(filePath);
    } catch(e) {
        res.statusCode = 400;
        res.end('Bad Request');
        return;
    }

    //проверка на нулевой байт
    if (~filePath.indexOf('\0')) {
        res.statusCode = 400;
        res.end('Bad Request');
        return;
    }

    //получаем путь дирректории
    filePath = path.normalize(path.join(ROOT, filePath));

    //проверка полученного пути директории
    if (filePath.indexOf(ROOT) != 0) {
        res.statusCode = 404;
        res.end('File not found');
        return;
    }

    //проверяем что по этому пути найдено
    fs.stat(filePath, function(err, stats) {
        if (err || !stats.isFile()) {
            res.statusCode = 404;
            res.end('File not found');
            return;
        }
        //файл найден отправляем
        sendFile(filePath, res);
    });
}
//читаем файл и выводим
function sendFile(filePath, res) {
    fs.readFile(filePath, function(err, content) {
        if (err) throw err;

        var mime = require('mime').lookup(filePath);
        res.setHeader('Content-Type', mime + '; charset=utf-8');
        res.end(content);
    });
}