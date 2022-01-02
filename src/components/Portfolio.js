import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { imgLists } from './Lists'
import { useInView } from 'react-intersection-observer'
import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs'

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
    <div
      ref={ref}
      className="portfolio bg-work-light dark:bg-work-dark bg-cover w-full py-6 mb-[-1px] overflow-hidden"
      id="portfolio"
    >
      <h2 className="subtitle">My Latest Works</h2>
      <motion.div
        className="portfolio-wrapper flex justify-center flex-wrap mt-12"
        animate={animation}
      >
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
    <div className="box w-80 lg:w-96 xl:w-[448px] 2xl:w-[512px] h-auto m-4 bg-dark-gray text-white rounded-xl shadow-lg shadow-gray-400 dark:shadow-none  hover:-translate-y-1">
      <img
        className="img-fluid rounded-t-xl h-40 lg:w-96 xl:w-[448px] 2xl:w-[512px] lg:h-48 xl:h-56 2xl:h-64"
        src={image}
        alt={alt}
        title={title}
      />
      <div className="info p-2">
        <div className="caption flex justify-between">
          <h4 className="capitalize text-blue-light">{title}</h4>
          <div className="flex gap-2">
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-cyan transition-all"
            >
              Visit <BsBoxArrowUpRight />
            </a>
            <a
              href={git}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-cyan transition-all"
            >
              GitHub <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
