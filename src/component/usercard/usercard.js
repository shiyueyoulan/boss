import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, WhiteSpace, WingBlank } from 'antd-mobile'
import { withRouter } from 'react-router-dom'

@withRouter
class UserCard extends Component {
  static propTypes={
    userlist: PropTypes.array.isRequired
  }
  handleClick(v){
    this.props.history.push(`/chat/${v._id}`)
  }
  render() { 
    console.log('aaa',this.props.userlist)
    return (
      <WingBlank>
        <WhiteSpace></WhiteSpace>
        {this.props.userlist.map(v=>(
          v.avatar?
          <Card 
            onClick={()=>this.handleClick(v)}
            key={v._id}>
            <Card.Header
              title={v.user}
              thumb={require(`../images/${v.avatar}.png`)}
              extra={<span>{v.title}</span>}
            ></Card.Header>
            <Card.Body>
              {v.type=='boss'?<div>公司:{v.company}</div>:null}
              {v.desc.split('\n').map(d=>(
                <div key={d}>{d}</div>
              ))}
              {v.type=='boss'?<div>薪资:{v.salary}</div>:<div>期望薪资:{v.salary}</div>}
            </Card.Body>
          </Card>:null
        ))}
      </WingBlank>
    )
  }
}
 
export default UserCard