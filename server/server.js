const express = require('express')
const mongoose = require('mongoose')
//连接mongo 并且使用boss集合
const DB_URL = 'mongodb://localhost:27017/boss'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function(){
  console.log('mongo connect success')
})
//类似mysql的表 mongo里面有文档 字段的概念
const User = mongoose.model('user', new mongoose.Schema({
  user: {type: String, require: true},
  age: {type: Number, require: true}
}))
//新增数据
User.create({
  user: 'xiaoming',
  age: 18
}, function(err, doc){
  if(!err) {
    console.log(doc)
  }else{
    console.log(err)
  }
})
//新建app
//删除数据
// User.remove({age:26}, function(err, doc){
//   console.log(doc)
// })
//修改数据
// User.update({'user': 'xiaoming'},{'$set':{age:26}},function(err,doc){
//   console.log(doc)
// })
const app = express()

app.get('/', function(req, res){
  res.send('<h1>Hello word<h1>')
})
app.get('/data', function(req, res){
  //查找数据
  User.find({}, function(err, doc){
    res.json(doc)
  })
})

app.listen(9093, function(){
  console.log('Node app start at port 9093')
})