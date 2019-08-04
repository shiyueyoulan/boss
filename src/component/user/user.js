import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Result, List, WhiteSpace, Modal } from 'antd-mobile'
import browserCookie from 'browser-cookies'
import { logoutSubmit } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'

@connect(
  state=>state.user,
  {logoutSubmit}
)
class User extends Component {
  logout= ()=>{
    const alert = Modal.alert
    alert('注销', '确认退出登录吗？', [
      {text: '取消', onPress: ()=>console.log('cancel')},
      {text: '确认', onPress: ()=>{
        browserCookie.erase('userid')
        // window.location.href = window.location.href
        this.props.logoutSubmit()
      }}
    ])
  }
  render() { 
    const props = this.props
    const Item = List.Item
    const Brief = Item.Brief
    return this.props.user?(
      <div>
        {/* {props.redirectTo && props.redirectTo!==props.location.pathname?
            <Redirect to={props.redirectTo}/>:null} */}
        <Result
          img={<img 
            src={require(`../images/${props.avatar}.png`)}
              style={{width:50}}
            ></img>}
          title={props.user}
          message={props.type=='boss'?props.company:null}
        ></Result>
        <List renderHeader={()=>'简介'}>
            <Item multipleLine >
              {props.title}
              {props.desc.split('\n').map(v=><Brief key={v}>{v}</Brief>)}
            </Item>
        </List>
        <WhiteSpace></WhiteSpace>
        <List>
          <Item onClick={this.logout}>退出登录</Item>
        </List>
      </div>
    ):<Redirect to={props.redirectTo}/>
  }
}
 
export default User