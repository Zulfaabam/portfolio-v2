import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })
  const animationLeft = useAnimation()
  const animationRight = useAnimation()

  useEffect(() => {
    console.log(inView)
    if (inView) {
      animationLeft.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1.5,
          bounce: 0.3,
        },
      })
      animationRight.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1.5,
          bounce: 0.3,
        },
      })
    } else if (!inView) {
      animationLeft.start({
        x: '-100vw',
      })
      animationRight.start({
        x: '100vw',
      })
    }
  }, [inView, animationLeft, animationRight])

  return (
    <div className="about" id="about">
      <h2 className="subtitle">About Me</h2>
      <div ref={ref} className="about-wrapper">
        <motion.div className="illustration" animate={animationLeft}>
          <img
            src="https://i.ibb.co/XSrjqCb/Web-Developer-Flatline.png"
            alt="Developer illustration"
          />
        </motion.div>
        <motion.div className="about-details-wrapper" animate={animationRight}>
          <img
            src="https://i.ibb.co/M7yRxfv/mdi-hand-wave-outline.png"
            alt="waving icon"
          />
          <p>
            My name is Zulfa Fatah Akbar Ahmad, you can call me Abam. I am 20
            years old and a third-year student of Computer Engineering at
            Diponegoro University, Indonesia. Currently focusing on my goal to
            become a Front-end Developer.
          </p>
          <div className="links">
            <Link to="/fullprofile">Read More</Link>
            <a
              href="https://drive.google.com/file/d/1Wszn1CkqDRylc5-IkwNGG6AU6lV0Tp5I/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              CV
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
