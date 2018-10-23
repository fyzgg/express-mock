var express = require('express');
var app = express();
//文件上传
var fs = require("fs");
var multer = require('multer');
var Mock = require('mockjs');

//post
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());

app.use(express.static('public'));//启用静态资源
//文件上传
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));


app.get('/',function(req,res){
	res.sendFile(__dirname+"/html/"+"index.html")
})
//get方式 提交表单
app.get('/process_get',function(req,res){
	var response = {
		"first_name":req.query.first_name,
		"last_name":req.query.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
})
//post方式提交表单
app.post('/process_post',urlencodedParser,function(req,res){
	var response = {
		"firstName":req.body.first_name,
		"lastName":req.body.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));

})

//上传文件
app.post('/file_upload',function(req,res){
	console.log(req.files[0]);  // 上传的文件信息
   var des_file = __dirname + "/upload/" + req.files[0].originalname;
	fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'上传成功!', 
                   filename:req.files[0].originalname
              };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
   });
})
app.get('/getJson',function(req,res){
	var response = {
		"key":req.query.key,
		"name":req.query.name
	};
	console.log(response);
	res.end(JSON.stringify(response));
})
var cookieParser = require('cookie-parser');
var util = require('util');
app.use(cookieParser());
app.get('/',function(req,res) {
	console.log('cookie:'+util.inspect(req.cookies))
})
//post方式提交表单
app.post('/postJson',urlencodedParser,function(req,res){
	var response = {
		"key":req.body.key,
		"name":req.body.name
	};
	console.log(response);
	res.end(JSON.stringify(response));
})


app.get('/api/users',function(req,res){
  var data = Mock.mock({
    'data|100':[{
      'id|+1':1,
      name: '@cname',
      'age|11-99':1,
      address:'@region'
    }],
    page:{
      total:100,
      current:1
    },
    success:true
  });
  res.send(data)
})

app.post('/api/users',urlencodedParser,function(req,res){
  var data = Mock.mock({
    'data|100':[{
      'id|+1':1,
      name: '@cname',
      'age|11-99':1,
      address:'@region'
    }],
    page:{
      total:100,
      current:1
    },
    success:true
  });
  res.send(data)
})



var server = app.listen(3000,function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})