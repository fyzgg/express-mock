var express = require('express');
var app = express();
 
app.use(express.static('public'));// 应用添加处理静态文件的功能。
 
app.get('/', function (req, res) {
   res.send('Hello World');
})
 
var server = app.listen(8000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})