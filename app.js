var express = require('express');

var api = require('./routes/api.js');


var app = new express();

app.use('/api',api);

var server = app.listen(3000,function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://", host,':', port)
})