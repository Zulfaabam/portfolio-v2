import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="header" id="header">
        <div
          className="theme-changer"
          onClick={() => {
            document.body.classList.toggle('light')
          }}
        ></div>
        <div className="intro-wrapper">
          <div className="intro-img">
            <img
              src="https://i.ibb.co/R4pTgPX/abam-rounded.png"
              alt="Abam's"
              title="It's me, Abam"
            />
          </div>
          <div className="intro-info">
            <h1 className="title">
              Hello, I'm <span>Abam</span>
            </h1>
            <p className="title-span-1">
              Computer Engineering student, <br />
              Passionate on Front-End Web <br />
              Development
            </p>
            <button
              className="contact-btn"
              onClick={() => {
                window.open('mailto:zulfafatahakbar@gmail.com')
              }}
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    )
  }
}
