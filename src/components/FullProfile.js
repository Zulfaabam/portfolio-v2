import React from 'react'
import { motion } from 'framer-motion'
import Footer from './Footer'
import '../Profile.css'

export default function FullProfile() {
  return (
    <motion.div
      className="full-profile"
      id="full-profile"
      initial={{ y: '-100vh' }}
      animate={{ y: 0 }}
      exit={{ y: '-100vh' }}
      transition={{ duration: 1 }}
    >
      <div className="content-profile">
        {/* <motion.div
          className="theme-changer"
          initial={{ y: '-100vh' }}
          animate={{ y: 0 }}
          transition={{
            type: 'spring',
          }}
          onClick={() => {
            document.body.classList.toggle('light')
          }}
        ></motion.div> */}
        <div className="timeline-wrapper">
          <h1 className="title">About Me</h1>
          <p className="subtitle">Under Construction</p>
          <div className="timeline">
            <div className="container right">
              <div className="content">
                <h2>2017</h2>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci,</p>
              </div>
            </div>
            <div className="container right">
              <div className="content">
                <h2>2017</h2>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci,</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  )
}
