var express = require('express');
var router = express.Router();
var Mock = require('mockjs');

router.get('/',function(req,res) {
  var page = req.query.page;
  var data = Mock.mock({
    'data|10':[{
      'id|+1':1,
      name: '@cname',
      'age|11-80':1,
      address:'@region'
    }],
    page:{
      total:100,
      current:parseInt(page)
    },
    success:true
  });
  res.send(data)
})

router.get('/delete',function(req,res){
  var userId = req.query.userId;
  var data;
  if (userId<100) {
    data = {
      success:true,
      message:"操作成功!"
    }
  }else {
    data = {
      success:false,
      message:"该用户不存在!"
    }
  }
  res.send(data);
})

router.post('/modify',function(req,res){
  var id = req.body.id;
  var json;
  if (id) {
    json = {
      success: true,
      message:"操作成功!"
    }
  }else {
    json = {
      success: false,
      message:"操作失败,请稍后重试!"
    }
  }
  res.send(json);
})
router.get('/create',function(req,res){
  var name = req.query.name;
  var age = req.query.age;
  var address = req.query.address;
  console.log(name,age,address)
  var flag = !!name && !!address && !!age;
  var json;
  if (flag) {
    json = {
      success: true,
      message:"操作成功!"
    }
  }else {
    json = {
      success: false,
      message:"操作失败,请稍后重试!"
    }
  }
  res.send(json);
})


module.exports = router;