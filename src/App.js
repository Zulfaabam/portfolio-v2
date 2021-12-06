import React from 'react'
import './App.css'
import Homepage from './components/Homepage'
import FullProfile from './components/FullProfile'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const location = useLocation()

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter initial={true}>
        <ScrollToTop />
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/fullprofile" element={<FullProfile />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}
