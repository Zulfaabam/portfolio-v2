import React, { Component } from 'react'

export default class Box extends Component {
  render() {
    return (
      <div className="box">
        <img
          className="img-fluid"
          src={this.props.image}
          alt={this.props.alt}
          title={this.props.title}
        />
        <div className="info">
          <div className="caption">
            <h4>{this.props.title}</h4>
            <a href={this.props.live} target="_blank" rel="noreferrer">
              Live site
            </a>
            <a href={this.props.git} target="_blank" rel="noreferrer">
              GitHub repo
            </a>
          </div>
        </div>
      </div>
    )
  }
}
