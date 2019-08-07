import React, { Component } from 'react'
import { List, InputItem, NavBar, Icon } from 'antd-mobile'
import { connect } from 'react-redux'
import io from 'socket.io-client'
import { getMsgList, sendMsg, recvMsg, readMsg } from '../../redux/chat.redux'
import { getChatId } from '../../util'
const socket = io('ws://localhost:9093')

@connect(
  state => state,
  { getMsgList, sendMsg, recvMsg, readMsg }
)
class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      msg: []
    }
  }
  componentDidMount() {
    this.props.getMsgList()
    this.props.recvMsg()
    const to = this.props.match.params.user
    this.props.readMsg(to)
  }
  componentWillUnmount(){
    const to = this.props.match.params.user
    this.props.readMsg(to)
  }
  fixCarousel(){
    setTimeout(()=>{
      window.dispatchEvent(new Event('resize'))
    },0)
  }
  handleSubmit = () => {
    // socket.emit('sendmsg', {text:this.state.text})
    const from = this.props.user._id
    const to = this.props.match.params.user
    const msg = this.state.text
    this.props.sendMsg(from, to, msg)
    this.setState({ text: '' })
  }
  render() {
    console.log('---',this.props)
    const userid = this.props.match.params.user
    const Item = List.Item
    const users = this.props.chat.users
    const chatid = getChatId(userid,this.props.user._id)
    const chatmsgs = this.props.chat.chatmsg.filter(v=>v.chatid==chatid)
    if(!users[userid]){
      return null
    }
    return (
      <div id="chat-page">
        <NavBar mode='dark'
          icon = {<Icon type="left"/>}
          onLeftClick={()=>{
            this.props.history.goBack()
          }}
          >
          {users[userid].name}
        </NavBar>
        <div>
          {chatmsgs.map(v => {
            const avatar = require(`../images/${users[v.from].avatar}.png`)
            return v.from == userid?
            <List key={v._id} ><Item thumb={avatar}>{v.content}</Item></List>:
              <List key={v._id} >
                <Item 
                  className='chat-me'
                  extra={<img src={avatar}/>}
                  >{v.content}</Item></List>
          })}
          <div className="stick-flooter">
            <List>
              <InputItem
                placeholder='请输入'
                value={this.state.text}
                onChange={v => {
                  this.setState({ text: v })
                }}
                extra={<span onClick={this.handleSubmit}>发送</span>}
              ></InputItem>
            </List>
          </div>
        </div>
      </div>
    )
  }
}

export default Chat