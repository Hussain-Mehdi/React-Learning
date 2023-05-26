import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hello"
      }
    }
    ClickHandler(){
        this.setState({
            message:"Good Bye"
        })
    }

    

  render() {
    return (
      <div>
        <h1 id='eventbindingheading'>{this.state.message}</h1>
        <button onClick={this.ClickHandler.bind(this)}>EventBind</button></div>
    )
  }
}

export default EventBind