import React from 'react'

// function Car() {
//     return (
//         <h2>this is component Car</h2>
//     )
// }

/* const Car = () => {
    return <h2>this is component Car</h2>
}

export default Car */

export default (props) => {
    return (
        <div>
            <h3>{props.name}</h3>  
            <p>Год: {props.year}</p>
        </div>
    )
}