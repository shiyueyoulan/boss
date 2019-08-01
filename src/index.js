import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import  thunk  from 'redux-thunk'
import Auth from './Auth'
import Dashboard from './Dashboard'
import reducers from './Reducer'
import './config'
import 'antd-mobile/dist/antd-mobile.css'
const store = createStore(
  reducers, 
  compose(applyMiddleware(thunk), window.devToolsExtension?window.devToolsExtension():f=>f)
)


function Test() {
  return(
    <div></div>
  )
}
ReactDom.render(
  <Provider store={store}>
    {/* <App /> */}
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Auth}></Route>
        <Route path='/dashboard' component={Dashboard}></Route>
        <Redirect to='/dashboard'></Redirect>
      </Switch>
      <div>
      
      
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

