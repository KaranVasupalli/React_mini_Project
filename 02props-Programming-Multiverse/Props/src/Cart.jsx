import React from 'react';
import './App.css'

const Cart = (props) => {
    return (
        <div className='cart'>
            <h2>{props.PrograrmmingLanguage}</h2>
            <h2>Year of Start:{props.year}</h2>
            <h2>Creator:{props.creator}</h2>
            <h2>Use Case:{props.data}</h2>
        </div>
    );
}

export default Cart;
