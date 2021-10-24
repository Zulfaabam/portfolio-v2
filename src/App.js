import React, { Component } from 'react'
import './App.css'
import Homepage from './components/Homepage'
import FullProfile from './components/FullProfile'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/fullprofile" component={FullProfile} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
