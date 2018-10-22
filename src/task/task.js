import React, { Component } from 'react';
import './task.css';

class Task extends Component {
  render() {
    return(
      <div className="listElements">
        <h4>{this.props.value}</h4>
        <small>{this.props.time}</small>
      </div>
    )
  }
}

export default Task;