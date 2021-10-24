import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const title = `Hello, I'm Abam`
  const desc1 = 'Computer Engineering student,'
  const desc2 = 'Passionate on Front-End Web'
  const desc3 = 'Development'

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  }

  const sentence2 = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.02,
      },
    },
  }

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <div className="header" id="header">
      <motion.div
        className="theme-changer"
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        transition={{
          type: 'spring',
        }}
        onClick={() => {
          document.body.classList.toggle('light')
        }}
      ></motion.div>
      <div className="intro-wrapper">
        <motion.div
          className="intro-img"
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{
            type: 'spring',
            duration: 1.5,
          }}
        >
          <img
            src="https://i.ibb.co/R4pTgPX/abam-rounded.png"
            alt="Abam's"
            title="It's me, Abam"
          />
        </motion.div>
        <div className="intro-info">
          <motion.h1
            className="title"
            initial="hidden"
            animate="visible"
            variants={sentence}
          >
            {title.split('').map((char, index) => {
              return (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              )
            })}
          </motion.h1>
          <motion.p
            className="title-span-1"
            initial="hidden"
            animate="visible"
            variants={sentence2}
          >
            {desc1.split('').map((char, index) => {
              return (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              )
            })}
            <br />
            {desc2.split('').map((char, index) => {
              return (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              )
            })}
            <br />
            {desc3.split('').map((char, index) => {
              return (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              )
            })}
          </motion.p>
        </div>
      </div>
    </div>
  )
}
