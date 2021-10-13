import React, { Component } from 'react'
import { socmedLists } from './Lists'
import Socmed from './Socmed'

export default class Footer extends Component {
  render() {
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
}
