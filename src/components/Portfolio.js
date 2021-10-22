import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { imgLists } from './Lists'
import Box from './Box'
import { useInView } from 'react-intersection-observer'

export default function Portfolio() {
  const { ref, inView } = useInView({
    threshold: 0.25,
  })
  const animation = useAnimation()

  useEffect(() => {
    console.log(inView)
    if (inView) {
      animation.start({
        y: 0,
        transition: {
          type: 'spring',
          duration: 1.5,
          bounce: 0.3,
        },
      })
    } else if (!inView) {
      animation.start({
        y: '100vh',
      })
    }
  }, [inView, animation])

  return (
    <div ref={ref} className="portfolio" id="portfolio">
      <h2 className="subtitle">My Latest Works</h2>
      <motion.div className="portfolio-wrapper" animate={animation}>
        {imgLists.map((imgList, index) => {
          return (
            <Box
              key={index}
              title={imgList.title}
              image={imgList.image}
              alt={imgList.alt}
              live={imgList.live}
              git={imgList.git}
            />
          )
        })}
      </motion.div>
    </div>
  )
}
