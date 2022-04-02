import React from 'react';
import './Carts.css';
const Carts = ({ cart, handleRemoveFromCart }) => {
//conditional render options
//1. element variable
//2. ternery operator
//3. && operator
//4. || operator

    let command;
    if(cart.length === 0){
        command = <div>
            <h5>Ohh Kipta, Khoroch Kor</h5>
            <p>Kinos na ken</p>
        </div>
    }else if (cart.length === 1){
        command = <p>Please add more</p>
    } else {
        command = <p><small>Thanks for adding item</small></p>
    }
    return (
        <div>
            <h1>Selected Item: {cart.length}</h1>
            
                {
                    cart.map(tshirt => <div key={tshirt._id}>
                        <p>{tshirt.name}</p>
                        <button onClick={() => handleRemoveFromCart(tshirt)}>X</button>
                    </div>)
                }
                {cart.length === 0 || <p className='orange'>YAY! you are buying</p>}
                {cart.length === 3 && <div className='orange'>
                    <h3>Trigonal</h3>
                    <p>Tin Jon K ki gift diva?</p>
                    </div>}
                {command}
                {cart.length !== 4 ? <></> : <button>Remove All</button>} 
                {cart.length === 4 && <button className='orange'>Review Order</button>}
        </div>
    );
};

export default Carts;