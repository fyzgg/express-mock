var express = require('express');
var app = express();
app.get('/',function(req,res){
	console.log("主页 GET 请求");
	res.send('hello world!');
})
app.post('/',function(req,res){
	console.log('主页POST 请求');
	res.send('Hello Post!');
})
app.get('/list_user',function(req,res){
	console.log('/list_user GET 请求');
	res.send('用户列表页面')
})
//  /del_user 页面响应
app.get('/del_user', function (req, res) {
   console.log("/del_user 响应 DELETE 请求");
   res.send('删除页面');
})
// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {   
   console.log("/ab*cd GET 请求");
   res.send('正则匹配');
})
var server = app.listen(8000,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})