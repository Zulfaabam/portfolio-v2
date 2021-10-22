import React from 'react'

export default function Tools({ image, alt, title, className }) {
  return (
    <div className="tools-box">
      <img src={image} alt={alt} title={title} className={className} />
    </div>
  )
}
