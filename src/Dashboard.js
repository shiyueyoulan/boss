import React, { Component } from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import App from './App'
import { logout } from './Auth.redux'

function Erying(){
  return (
    <div>erying</div>
  )
}
function Qibinglian(){
  return (
    <div>Qibinglian</div>
  )
}
@connect(
  state=>state.auth,
  {logout}
)
class Dashboard extends Component {
  render() { 
    const match = this.props.match
    const redirectToLogin = <Redirect to='/login'></Redirect>
    const app = (
      <div>
        {this.props.isAuth?<button onClick={this.props.logout}>注销</button>:null}
        <ul>
          <li>
            <Link to={`${match.url}/`}>yiying</Link>
          </li>
          <li>
            <Link to={`${match.url}/erying`}>erying</Link>
          </li>
          <li>
            <Link to={`${match.url}/qibinglian`}>qibinglian</Link>
          </li>
        </ul>
        <Route path={`${match.url}/`} exact component={App}></Route>
        <Route path={`${match.url}/erying`} component={Erying}></Route>
        <Route path={`${match.url}/qibinglian`} component={Qibinglian}></Route>
      </div>
    )
    return this.props.isAuth? app:redirectToLogin
  }
}
 
export default Dashboard;