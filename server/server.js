const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user')
//新建app
const app = express()
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter)
// app.get('/', function(req, res){
//   res.send('<h1>Hello word<h1>')
// })
// app.get('/data', function(req, res){
//   //查找数据
//   User.find({}, function(err, doc){
//     res.json(doc)
//   })
// })

app.listen(9093, function(){
  console.log('Node app start at port 9093')
})