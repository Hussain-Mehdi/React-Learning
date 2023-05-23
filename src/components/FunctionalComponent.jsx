import React from 'react'


//Functional Component

function Greet(props) {
    return (
        <h1>Hello {props.name}</h1>
    );
}

export default Greet;



// ES6 Callback component

// const Greet = ()=> <h1>Hi Hussain</h1>
// export default Greet;

// export const Greet = ()=> <h1>Assalam o Alikum Hussain</h1>