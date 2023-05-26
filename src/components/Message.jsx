import react, { Component } from "react"


class Message extends Component{

    constructor(){
        super()
        this.state ={
            message:"@FlutterDev"
        }
       
    }
    changeMessage(){
        this.setState({
            message:"Thanks you for Subscribing"}
        )
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;