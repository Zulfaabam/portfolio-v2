import React, { Component } from 'react'

export default class Tools extends Component {
  render() {
    return (
      <img
        src={this.props.image}
        alt={this.props.alt}
        title={this.props.title}
      />
    )
  }
}
