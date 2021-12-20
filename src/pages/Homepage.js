import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import Loading from '../components/Loading'

export default function Homepage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  if (loading) {
    return <Loading />
  }

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
