import React from 'react'
import Portfolio from './Portfolio'
import About from './About'
import TechStack from './TechStack'

export default function Main() {
  return (
    <div className="main">
      <About />
      <TechStack />
      <Portfolio />
    </div>
  )
}
