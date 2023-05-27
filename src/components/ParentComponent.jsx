import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

constructor(props) {
  super(props)
  this.state = {
     parentMessage:"Hello Parent"
  }
  this.GreetParent=this.GreetParent.bind(this)
}
 
  GreetParent(props){
    alert(`Hello ${props} `)
  }


  render() {
    return (
    <ChildComponent greetHandler={this.GreetParent} />
    )
  }
}

export default ParentComponent