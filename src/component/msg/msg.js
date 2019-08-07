import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Badge } from 'antd-mobile'

@connect(
  state=>state
)
class Msg extends Component {
  getLast=(arr)=>{
    return arr[arr.length-1]
  }
  render() { 
    //根据chatid 分组
    const Item = List.Item
    const Brirf = Item.Brief
    const userid = this.props.user._id
    const msgGroup = {}
    this.props.chat.chatmsg.forEach(v=>{
      msgGroup[v.chatid] = msgGroup[v.chatid] || []
      msgGroup[v.chatid].push(v)
    })
    const chatList = Object.values(msgGroup).sort((a,b)=>{
      const a_last = this.getLast(a).create_time
      const b_last = this.getLast(b).create_time
      return b_last - a_last
    })
    return (
      <div>
        <List>
          {chatList.map(v=>{
            const lastItem = this.getLast(v)
            const targetId = v[0].from == userid?v[0].to:v[0].from
            const unreadNum = v.filter(v=>!v.read && v.to==userid).length
            const name = this.props.chat.users[targetId]?this.props.chat.users[targetId].name:null
            const avatar = this.props.chat.users[targetId]?this.props.chat.users[targetId].avatar:null
            if(!this.props.chat.users[targetId]){
              return null
            }
            return (
              <Item key = {lastItem._id}
                extra={<Badge text={unreadNum}></Badge>}
                thumb = {require(`../images/${avatar}.png`)}
                arrow="horizontal"
                onClick={()=>{
                  this.props.history.push(`/chat/${targetId}`)
                }}
              >
                {lastItem.content}
                <Brirf>{name}</Brirf>
              </Item>
            )
          })}
        </List>
      </div>
    )
  }
}
 
export default Msg