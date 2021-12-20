import React from 'react'
import { socmedLists } from './Lists'

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-upper bg-gray text-center p-2 sm:p-4 sm:flex sm:justify-evenly sm:items-center ">
        <p className="text-white text-sm sm:text-base">
          Connect with me on social media
        </p>
        <div className="socmed-wrapper flex justify-center gap-4">
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
      <div className="footer-bottom bg-black text-center p-2">
        <p className="text-[#6c757d] text-sm sm:text-base">
          &copy; Copyright 2021 | Created by{' '}
          <a
            href="#header"
            className="text-white transition-all hover:text-blue-light"
          >
            Abam
          </a>
        </p>
      </div>
    </div>
  )
}

const Socmed = ({ link, image, alt, title }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img
        src={image}
        alt={alt}
        title={title}
        className="w-6 transition-all mt-2 sm:mt-0 hover:scale-125"
      />
    </a>
  )
}
