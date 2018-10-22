import React, { Component } from 'react'

class Input extends Component {
  render(){
    return(
      <input onChange={this.props.change} type="text"/>
    )
  }
}

export default Input;