import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { FaSun, FaMoon } from 'react-icons/fa'
import { ThemeContext } from './ThemeContext'

export default function TopNav() {
  const { theme, setTheme } = useContext(ThemeContext)
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
          // onClick={() => {
          //   document.documentElement.classList.toggle('dark')
          // }}
        >
          {theme === 'dark' ? (
            <FaSun
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-white text-2xl cursor-pointer"
            />
          ) : (
            <FaMoon
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-dark-gray text-2xl cursor-pointer"
            />
          )}
        </motion.div>
      </div>
    </div>
  )
}
