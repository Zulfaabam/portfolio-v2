import React from 'react'
import './App.css'
import Homepage from './components/Homepage'
import FullProfile from './components/FullProfile'
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const location = useLocation()

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter initial={false}>
        <ScrollToTop />
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Homepage} />
          <Route path="/fullprofile" component={FullProfile} />
        </Switch>
      </AnimatePresence>
    </div>
  )
}
