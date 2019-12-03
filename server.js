var http = require('http');
var fs = require('fs')

http.createServer(function (request, response) {
    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    console.log(request.url)
    if (request.url == '/') {
      response.writeHead(200, {'Content-Type': 'text/html'});
      const page = fs.readFileSync(__dirname + '/loading.html')
      response.end(page.toString());
    }
    if (request.url == '/734-circle-grow.json') {
      response.writeHead(200, {'Content-Type': 'text/text'});
      const page = fs.readFileSync(__dirname + '/734-circle-grow.json')
      response.end(page.toString());
    }
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');