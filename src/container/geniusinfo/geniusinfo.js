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
class GeniusInfo extends Component {
  constructor(props){
    super(props)
    this.state={
      title: '',
      salary: '',
      desc: '',
      school: '',
      avatar: ''
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
      avatar: imgname
    })
  }
  render() { 
    return (
      <div>
        {this.props.redirectTo && this.props.redirectTo !== this.props.location.pathname?
            <Redirect to={this.props.redirectTo}></Redirect>:null}
        <NavBar>牛人信息完善</NavBar>
        <AvatarSelect selectAvatar={this.selectAvatar}></AvatarSelect>
        <InputItem onChange={v=>{this.onChange('title',v)}}>
          应聘职位
        </InputItem>
        <InputItem onChange={v=>{this.onChange('school',v)}}>
          毕业院校
        </InputItem>
        <InputItem onChange={v=>{this.onChange('salary',v)}}>
          期待薪资
        </InputItem>
        <TextareaItem
          onChange={v=>this.onChange('desc', v)}
          rows={6}
          autoHeight
          title='自我评价'
        >
        </TextareaItem>
        <WhiteSpace/>
        <WhiteSpace/>
        <Button type='primary'
            onClick={()=>{this.props.update(this.state)}}
        >保存</Button>
      </div>
    )
  }
}
 
export default GeniusInfo