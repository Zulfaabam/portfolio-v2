import React, { Component } from 'react'

export default class Socmed extends Component {
  render() {
    return (
      <a href={this.props.link} target="_blank" rel="noreferrer">
        <img
          src={this.props.image}
          alt={this.props.alt}
          title={this.props.title}
        />
      </a>
    )
  }
}
