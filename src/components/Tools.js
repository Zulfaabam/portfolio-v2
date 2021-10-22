import React from 'react'
import { motion } from 'framer-motion'

export default function Tools({ image, alt, title, className, animation }) {
  return (
    <motion.div className="tools-box" animate={animation}>
      <img src={image} alt={alt} title={title} className={className} />
    </motion.div>
  )
}
