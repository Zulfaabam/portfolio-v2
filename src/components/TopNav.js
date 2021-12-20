import React from 'react'
import { motion } from 'framer-motion'

export default function TopNav() {
  return (
    <div className="topnav w-full h-24 fixed top-0 left-0 px-4">
      <div className="max-w-5xl mx-auto h-full flex items-center">
        <motion.div
          className="theme-changer"
          initial={{ y: '-100vh' }}
          animate={{ y: 0 }}
          transition={{
            type: 'spring',
          }}
          onClick={() => {
            document.documentElement.classList.toggle('dark')
          }}
        ></motion.div>
      </div>
    </div>
  )
}
