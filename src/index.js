import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import  thunk  from 'redux-thunk'
import Register from './container/regist/register'
import Login from './container/login/login'
import AuthRoute from './component/AuthRoute/AuthRoute'
import BossInfo from './container/bossinfo/bossinfo'
import GeniusInfo from './container/geniusinfo/geniusinfo'
import Dashboard from './component/dashboard/dashboard'
import reducers from './Reducer'
import './config'
import './index.css'
const store = createStore(
  reducers, 
  compose(applyMiddleware(thunk), window.devToolsExtension?window.devToolsExtension():f=>f)
)

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute></AuthRoute>
        <Switch>
          <Redirect exact from='/' to='/login'></Redirect>
          <Route path='/geniusinfo' component={GeniusInfo}></Route>
          <Route path='/bossinfo' component={BossInfo}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Register}></Route>
          <Route component={Dashboard}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

