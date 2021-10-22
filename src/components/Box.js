import React from 'react'

export default function Box({ image, alt, title, live, git }) {
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
