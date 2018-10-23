var express = require('express');
var router = express.Router();
var Mock = require('mockjs');


router.get('/',function(req,res) {
  var page = req.query.page;
  var data = Mock.mock({
    'data|10':[{
      'id|+1':1,
      name: '@cname',
      'age|11-99':1,
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



module.exports = router;