import React from 'react'
import Hero from './Hero'
import Main from './Main'
import Footer from './Footer'
import { motion } from 'framer-motion'

export default function Homepage() {
  return (
    <motion.div
      initial={{ y: '100vh' }}
      animate={{ y: 0 }}
      exit={{ x: '-100vw' }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Main />
      <Footer />
    </motion.div>
  )
}
