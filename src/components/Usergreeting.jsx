
import React, { Component } from 'react'

class Usergreeting extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }

  render() {
    if(this.state.isLoggedIn)
    {
        return(
            <div>
                <h2>User loggedIn</h2>
            </div>
        )
    }else
    return (
      <div>
        <h2>Not LoggedIn</h2>
      </div>
    )
  }
}

export default Usergreeting