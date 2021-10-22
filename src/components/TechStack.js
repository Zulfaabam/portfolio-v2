import React, { useEffect } from 'react'
import { toolLists } from './Lists'
import Tools from './Tools'
import { useAnimation } from 'framer-motion'
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
    <div ref={ref} className="tools" id="tools">
      <h2 className="subtitle">Tools & Languages</h2>
      <div className="tools-wrapper">
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
