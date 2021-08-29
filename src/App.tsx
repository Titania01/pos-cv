import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Login} exact/>
        <Route path="/" component={Dashboard}></Route>
      </Switch>
    </div>
  )
}

export default App
