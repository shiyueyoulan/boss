import React, { Component } from 'react'
import { NavBar, InputItem, TextareaItem, Button, WhiteSpace } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import  AvatarSelect  from '../../component/avatar-select/avatar-select'
import { update } from '../../redux/user.redux'
@connect(
  state=>state.user,
  {update}
)
class BossInfo extends Component {
  constructor(props){
    super(props)
    this.state={
      title: '',
      company: '',
      salary: '',
      avatar: '',
      desc: ''
    }
    this.selectAvatar = this.selectAvatar.bind(this)
  }
  onChange(key, val){
    this.setState({
      [key]: val
    })
  }
  selectAvatar(imgname){
    this.setState({
      avatar:imgname
    })
  }
  render() {
    return (
      <div>
        {this.props.redirectTo && this.props.redirectTo !== this.props.location.pathname?
            <Redirect to={this.props.redirectTo}></Redirect>:null}
        <NavBar mode="dark" >Boss完善信息页面</NavBar>
        <AvatarSelect selectAvatar={this.selectAvatar}></AvatarSelect>
        <InputItem onChange={v=>this.onChange('title', v)}>
          招聘职位
        </InputItem>
        <InputItem onChange={v=>this.onChange('company', v)}>
          公司名称
        </InputItem>
        <InputItem onChange={v=>this.onChange('salary', v)}>
          职位薪资
        </InputItem>
        <TextareaItem 
          onChange={v=>this.onChange('desc', v)}
          rows={4}
          autoHeight
          title='职位简介'
          >
        </TextareaItem>
        <Button 
          onClick={()=>{
            this.props.update(this.state)
          }}
          type='primary' >保存</Button>
      </div>
    )
  }
}

export default BossInfo;