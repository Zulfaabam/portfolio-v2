import React, { Component } from 'react'
import Portfolio from './Portfolio'
import About from './About'
import TechStack from './TechStack'

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <About />
        <Portfolio />
        <TechStack />
      </div>
    )
  }
}
