import React, { Component } from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { login } from '../../redux/user.redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

@connect(
  state=>state.user,
  {login}
)

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: '',
      pwd: ''
    }
    this.register = this.register.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }
  register(){
    this.props.history.push('/register')
  }
  handleLogin(){
    this.props.login(this.state)
  }
  handleChange(key, val){
    this.setState({
      [key]: val
    })
  }
  render() { 
    return (
      <div>
        {this.props.redirectTo?<Redirect to={this.props.redirectTo}/>:null}
        <Logo></Logo>
        <WingBlank>
          <List>
            {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
            <InputItem
              onChange={v=>this.handleChange('user', v)}
            >用户</InputItem>
            <WhiteSpace/>
            <InputItem
              onChange={v=>this.handleChange('pwd', v)}
            >密码</InputItem>
          </List>
          <Button 
            onClick={this.handleLogin}
            type='primary'>登录</Button>
          <WhiteSpace/>
          <Button type='primary' onClick={this.register}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}
 
export default Login;