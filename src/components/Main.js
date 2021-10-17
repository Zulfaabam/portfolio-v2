import React, { Component } from 'react'
import { imgLists, toolLists } from './Lists'

import Box from './Box'
import Tools from './Tools'

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="about" id="about">
          <h2 className="subtitle">About Me</h2>
          <div className="about-wrapper">
            <div className="illustration">
              <img
                src="https://i.ibb.co/XSrjqCb/Web-Developer-Flatline.png"
                alt="Developer illustration"
              />
            </div>
            <div className="about-details-wrapper">
              <img
                src="https://i.ibb.co/M7yRxfv/mdi-hand-wave-outline.png"
                alt="waving icon"
              />
              <p>
                My name is Zulfa Fatah Akbar Ahmad, you can call me Abam. I am
                20 years old and a third-year student of Computer Engineering at
                Diponegoro University, Indonesia. Currently focusing on my goal
                to become a Front-end Developer.
              </p>
              <div className="links">
                <a
                  href="https://www.linkedin.com/in/zulfa-fatah-akbar-ahmad/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Full Profile
                </a>
                <a
                  href="https://drive.google.com/file/d/1Wszn1CkqDRylc5-IkwNGG6AU6lV0Tp5I/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  CV
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio" id="portfolio">
          <h2 className="subtitle">My Latest Works</h2>
          <div className="portfolio-wrapper">
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
          </div>
        </div>

        <div className="tools" id="tools">
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
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
