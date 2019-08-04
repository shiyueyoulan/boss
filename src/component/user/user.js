import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Result, List, WhiteSpace } from 'antd-mobile'

@connect(
  state=>state.user
)
class User extends Component {
  render() { 
    const props = this.props
    const Item = List.Item
    const Brief = Item.Brief
    return this.props.user?(
      <div>
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
              {props.desc.split('\n').map(v=><Brief>{v}</Brief>)}
            </Item>
        </List>
        <WhiteSpace></WhiteSpace>
        <List>
          <Item>退出登录</Item>
        </List>
      </div>
    ):null
  }
}
 
export default User