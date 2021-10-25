import React from 'react'
import { socmedLists } from './Lists'

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-upper">
        <p>Connect with me on social media</p>
        <div className="socmed-wrapper">
          {socmedLists.map((socmedList, index) => {
            return (
              <Socmed
                key={index}
                title={socmedList.title}
                image={socmedList.image}
                alt={socmedList.alt}
                link={socmedList.link}
              />
            )
          })}
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; Copyright 2021 | Created by <a href="#header">Abam</a>
        </p>
      </div>
    </div>
  )
}

const Socmed = ({ link, image, alt, title }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img src={image} alt={alt} title={title} />
    </a>
  )
}
