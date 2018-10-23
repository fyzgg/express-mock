var express = require('express');
var api = require('./routes/api.js');
var bodyParser = require('body-parser');


var app = new express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) { 
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/api',api);

var server = app.listen(3000,function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://", host,':', port)
})