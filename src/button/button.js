import React, { Component } from 'react'

class Button extends Component {
  saludoCholo = () => {
    alert('Hello hommie');
  }

  render(){
    return(
      <div>
        <button onClick={this.props.saludo}>
          Click me!
        </button>
        <button onClick={this.saludoCholo}>
          Click me!
        </button>
      </div>
    )
  }
}

export default Button;