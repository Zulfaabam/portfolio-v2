import React from 'react'

export default function About() {
  return (
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
            My name is Zulfa Fatah Akbar Ahmad, you can call me Abam. I am 20
            years old and a third-year student of Computer Engineering at
            Diponegoro University, Indonesia. Currently focusing on my goal to
            become a Front-end Developer.
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
  )
}
