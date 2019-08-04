import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, WhiteSpace, WingBlank } from 'antd-mobile'


class UserCard extends Component {
  static propTypes={
    userlist: PropTypes.array.isRequired
  }
  render() { 
    console.log(this.props.userlist)
    return (
      <WingBlank>
        <WhiteSpace></WhiteSpace>
        {this.props.userlist.map(v=>(
          v.avatar?
          <Card key={v._id}>
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