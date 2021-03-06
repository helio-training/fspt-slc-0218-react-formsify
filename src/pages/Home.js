import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import {Tabs, Tab} from 'material-ui/Tabs'

import Login from '../components/Login'
import LoginMUI from '../components/LoginMUI'
import Bricks from '../components/Bricks'

export default class extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/mui">To Mui</Link></li>
          <li><Link to="/">Or Not To Mui</Link></li>
          <li><Link to="/tabs">Nah, Bro! Tabs!</Link></li>
          <li><Link to="/bricks">Buy my Bricks!</Link></li>
        </ul>
        <hr/>
        <Switch>
          <Route exact path='/' component={() => (<Login submitHandler={handleSubmit}/>)}/>
          <Route path='/mui' component={() => (<LoginMUI submitHandler={handleSubmit}/>)}/>
          <Route path='/tabs' component={renderTabs}/>
          <Route path='/bricks' component={() => <Bricks/>}/>
        </Switch>
      </div>
    );
  }
}

const renderTabs = () =>{
  return(
    <Tabs>
      <Tab label="Standard Login" value="/">
        <Login submitHandler={handleSubmit}/>
      </Tab>
      <Tab label="Material-UI Login" value="/mui">
        <LoginMUI submitHandler={handleSubmit}/>
      </Tab>
    </Tabs>
  )
}

const handleSubmit = (payload) => {
  payload.event.preventDefault()
  console.log(payload.username + " : " + payload.password)
}