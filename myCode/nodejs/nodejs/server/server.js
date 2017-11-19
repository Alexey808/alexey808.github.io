
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


/*

const net = require('net');

// common proxy ports
var honeyPort = [ 8000 ]; //8080, 3128, 3129, 80


function FakeSrv(port){
    this.port = port;
    this.server = net.createServer((socket) => {
        socket.end('Bye\n');
    });
    this.server.on('connection', (socket) => {
        console.log('FaksSrv (port %s) <-- %s:%s', this.port, socket.remoteAddress, socket.remotePort);
    });
    this.server.on('listening', () => {
        console.log('Listening on port %s ...', this.port);
    });
    this.server.on('error', () => {
        console.log('Error binding port %s', this.port);
    });
    this.server.listen(this.port, '127.0.0.1');
}

for (var i=0; i<honeyPort.length; i++) {
    try{
        new FakeSrv(honeyPort[i]);
    } catch(e) {
        console.log('Error ' + e.message);
    }
}



 */