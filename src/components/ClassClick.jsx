import React, { Component } from 'react'
 class ClassClick extends Component {

  render() {
    
    return (
      <div>
        <button onClick={this.ClassHandler}>ClassClick</button>
      </div>
    )
  }
}

export default ClassClick