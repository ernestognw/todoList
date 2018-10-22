import React, { Component } from 'react'

class Box extends Component {
  render() {
    return(
      <p>{this.props.value}</p>
    )
  }
}

export default Box;