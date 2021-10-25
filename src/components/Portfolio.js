import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { imgLists } from './Lists'
import { useInView } from 'react-intersection-observer'

export default function Portfolio() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  })
  const animation = useAnimation()

  useEffect(() => {
    console.log(inView)
    if (inView) {
      animation.start({
        y: 0,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
          delay: 0.75,
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

const Box = ({ image, alt, title, live, git }) => {
  return (
    <div className="box">
      <img className="img-fluid" src={image} alt={alt} title={title} />
      <div className="info">
        <div className="caption">
          <h4>{title}</h4>
          <a href={live} target="_blank" rel="noreferrer">
            Live site
          </a>
          <a href={git} target="_blank" rel="noreferrer">
            GitHub repo
          </a>
        </div>
      </div>
    </div>
  )
}
