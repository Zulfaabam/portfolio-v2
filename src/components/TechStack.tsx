import React, { useEffect } from 'react'
import { toolLists } from './Lists'
// import Tools from './Tools'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function TechStack() {
  const { ref, inView } = useInView({
    threshold: 0.725,
  })
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        rotate: 360,
        scale: 1,
        transition: {
          type: 'spring',
          stiffness: 110,
          damping: 20,
        },
      })
    } else if (!inView) {
      animation.start({
        scale: 0,
        rotate: 0,
      })
    }
  }, [inView, animation])

  return (
    <div
      ref={ref}
      className="tools bg-white dark:bg-dark p-6 text-center flex flex-col justify-center items-center"
      id="tools"
    >
      <h2 className="subtitle">Tech Stack</h2>
      <div className="tools-wrapper flex justify-center items-center flex-wrap my-4">
        {toolLists.map((toolList, index) => {
          return (
            <Tools
              key={index}
              title={toolList.title}
              image={toolList.image}
              alt={toolList.alt}
              className={toolList.className}
              animation={animation}
            />
          )
        })}
      </div>
    </div>
  )
}

const Tools = ({ image, alt, title, className, animation }) => {
  return (
    <motion.div
      className="tools-box bg-sky-100 dark:bg-white flex justify-center items-center rounded-xl m-2 w-[65px] lg:w-[75px] aspect-square shadow-lg dark:shadow-dark"
      animate={animation}
      whileHover={{ translateY: '-0.25rem' }}
    >
      <img
        src={image}
        alt={alt}
        title={title}
        className={`${className} h-[35px] lg:h-[45px]`}
      />
    </motion.div>
  )
}
