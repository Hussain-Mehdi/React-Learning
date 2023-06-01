import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         userName:'',
         comment:'',
         select:'react'
      }
    }

    handleUsernameChange = (event) => {
        this.setState({
            userName:event.target.value
        })
    }

    handleCommentChange = (event) =>
    {
this.setState({
    comment:event.target.value
})
    }

    handleSelectionChange=event=>{
        this.setState({
            select:event.target.value
        })
    }

    handleSubmission = event =>{
        alert(`${this.state.userName} ${this.state.comment} ${this.state.select}`)
        event.preventDefault();
    }

  render() {
    return (
     <form action="" onSubmit={this.handleSubmission}>
        <div>
            <label htmlFor="">Username</label>
            <input type="text" value={this.state.userName} onChange={this.handleUsernameChange}/>
        </div>
        <div>
            <label htmlFor="">Comments</label>
            <textarea name="" id="" cols="30" rows="10" value={this.state.comment} onChange={this.handleCommentChange}></textarea>
        </div>
        <div>
            <label htmlFor="">Topic</label>
            <select name="" id="" value={this.state.select} onChange={this.handleSelectionChange}>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Vue">Vue</option>
            </select>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
    </form>
    )
  }
}

export default Form