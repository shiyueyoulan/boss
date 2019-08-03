import React, { Component } from 'react'
import { Grid, List } from 'antd-mobile'
import PropTypes from 'prop-types'
class AvatarSelect extends Component {
  static propTypes={
    selectAvatar: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    const avatarList = '1,2,3,4,5,6'
      .split(',')
      .map(v => ({
        icon: require(`../images/${v}.jpg`),
        text: v
      }))
    const gridHeader = this.state.icon ? <div>
      <span>已选择头像</span>
      <img src={this.state.icon} style={{ width: 20 }} alt='' />
    </div> : '请选择头像'
    return (
      <div>
        <List renderHeader={()=>gridHeader}>
          <Grid data={avatarList}
            columnNum={6}
            onClick={elm => {
              this.setState(elm)
              this.props.selectAvatar(elm.text)
            }
            } />
        </List>
      </div>
    )
  }
}

export default AvatarSelect;