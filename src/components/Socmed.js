import React from 'react'

export default function Socmed({ link, image, alt, title }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img src={image} alt={alt} title={title} />
    </a>
  )
}
