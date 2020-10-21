import React from 'react'

function Greeter(props) {
    const things = ['Water', 'Cattle', 'Plutonium', 'Gold']
    // const listOfThings = things.map(thing => <li>{thing}</li>)
    return (
        <React.Fragment>
            <h1>Greetings Earthling {props.earthling.name}</h1>
            <h2>Welcome to {props.earthling.town}</h2>
            <h4>We have come { new Date().getDay() === 1 ? 'on a Monday' : 'in peace' } </h4>
            <h3>Give us your:</h3>
            <ul>{things.map(thing => <li key={thing}>{thing}</li>)}</ul>
        </React.Fragment>
    );
}

export default Greeter