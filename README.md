## es6语法
  - 作用域
  let和const
    1. 定义变量使用 let代替var
    2. Const 定义不可修改的变量
    3. 作用域和{}

  - 字符串
  模板字符出纳
    1. 使用反引号，直接写变量
    2. 多行字符串
    3. es5用 + 拼接字符串
    demo：
      name = 'boos'
      course = 'React开发App'
      es5: console.log('hello' + name + ', course is' + course)
      es6: console.log(`hello ${name}, course is ${course}`)
        console.log(`
           asdasdad
           fdsfaas
        `)

  - 函数扩展
  es6中函数的用法
    1. 参数默认值
      const hello = (name='boss')=>{
        console.log(`hello ${name}!`)
      }
      hello()   hello boss!
      hello('mengge')   hello mengge!
    2. 箭头函数： 简写函数  修改this作用域
    3. 展开运算符 ...
      function hello(name1, name2) {
        console.log(name1, name2)
      }
      let arr = ['boss', 'mengge']
      es5: hello.apply(null,arr)
      es6: hello(...arr)

  - 对象扩展
    1. Object.keys, value, entires
      const obj = { name: 'boss', course: 'React开发App' }
      console.log(Object.keys(obj))
      console.log(Object.values(obj))
      console.log(Object.entires(obj))
    2. 对象方法简写，计算属性
    3. 展开运算符

  - 解构赋值
    1. 数组解构
      const arr = ['hello', 'boss']
      es5: let arg1 = arr[0]
            let arg2 = arr[1]
      es6:
            let [arg1, arg2] = arr
    2. 对象解构
      const obj = { name: 'boss', course: 'React开发App' }
      const {name,course} = obj

  - 类
  提供class的语法糖
    1. 是prototype的语法糖
    2. Extends继承
    3. Constructor构造函数

  - 模块化
  ES6自带模块化机制， 告别了seajs和require.js
    1. import, import{}
    2. export, export default
    3. Node现在还不支持, 还需要用require来加载文件



### 项目
  # Express + mongodb开发web后台接口
    1. express开发web接口
     - 基于nodejs的极简开发框架
     - app.get/app.post分别开发get和post接口
     - app.use使用模块
     - res.send, res.json, res.sendfile
    2. 非关系型数据库mongodb
    3. 使用nodejs的mongoose模块链和操作mongodb
      mongoose基础使用
        - connect 链接数据库
        - 定义文档模型，Schema和model新建模型
          1. String, Number等数据结构
          2. create，remove，update分别用来增，删，改的操作
          3. find和findOne用来查询数据
        - 一个数据库对应一个模型，通过模型对数据库进行操作

  ##组件之间的数据传递
    1. 使用<组件 数据="值">的形式传递
    2. 组建里使用this.props获取值
    3. 若组件只有render函数， 还可以用函数的形式写组件

  ##组件内部state
    组件内部通过state管理状态
      1. JSX本质就是js， 所以直接数组.map 渲染列表
      2. Constructor设置初始状态，记得执行super(props)
      3. State就是一个不可变的对象， 使用this.state来获取 

  ##onClick点击事件
    1. JSX里，onClick={this.函数名}来绑定事件
    2. this引用的问题，需要在构造函数里用bind绑定this
    3. this.setState修改state，是返回新的state，而不是修改

  ##React 生命周期
    React组件有若干钩子函数，在组件不同的状态执行
      1. 初始化周期
      2. 组件重新渲染生命周期
      3. 组件卸载生命周期

  ## Redux
    专注于状态管理的库
      1. Redux专注于状态管理，和react解耦
      2. 单一状态，单向数据流
      3. 核心概念： store，state，action，reducer

### 前后端联调
  ##使用axios发送异步请求
    1. 端口不一致， 使用proxy配置转发
    2. axios拦截器，统一loading处理
    3. redux里使用异步数据，渲染页面

## 开发模式
  # 基于cookie用户验证
   用户加载页面   (带cookie像后端获取信息)-> 用户加载页面 ->(登录页面(登录成功 前端存储cookie)) -> app内部页面

## 高阶组件
  # 属性代理和反向继承