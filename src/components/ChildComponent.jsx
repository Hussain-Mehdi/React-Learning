
import React from 'react'

function ChildComponent(props) {

  return (
    <button onClick={()=>props.greetHandler("I am Child")}>Greet Parent</button>
  )
}

export default ChildComponent