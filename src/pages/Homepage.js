import React from 'react'
import Hero from '../components/Hero'
import Main from '../components/Main'
import Footer from '../components/Footer'
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
