const mongoose = require('mongoose')
//连接mongo 并且使用boss集合
const DB_URL = 'mongodb://localhost:27017/imooc-chat'
mongoose.connect(DB_URL,{ useNewUrlParser: true })
// mongoose.connection.on('connected', function(){
//   console.log('mongo connect success')
// })
//类似mysql的表 mongo里面有文档 字段的概念
// const User = mongoose.model('user', new mongoose.Schema({
//   user: {type: String, require: true},
//   age: {type: Number, require: true}
// }))
//新增数据
// User.create({
//   user: 'xiaoming',
//   age: 18
// }, function(err, doc){
//   if(!err) {
//     console.log(doc)
//   }else{
//     console.log(err)
//   }
// })
//删除数据
// User.remove({age:26}, function(err, doc){
//   console.log(doc)
// })
//修改数据
// User.update({'user': 'xiaoming'},{'$set':{age:26}},function(err,doc){
//   console.log(doc)
// })

const models = {
  user: {
    'user': {type: String, require: true},
    'pwd': {type: String, require: true},
    'type': {type: String, require: true},
    'avatar': {type: String},
    'desc': {type: String},
    'title': {type: String},
    'company': {type: String},
    'money': {type: String}
  },
  chat:{}
}

for(let m in models){
  mongoose.model(m, new mongoose.Schema(models[m]))
}
module.exports = {
  getModel: function(name){
    return mongoose.model(name)
  }
}