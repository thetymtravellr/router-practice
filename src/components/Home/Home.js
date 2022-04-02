import React, { useState } from 'react';
import useTshirt from '../../hooks/useTshirts';
import Carts from '../Carts/Carts';
import TShirt from '../TShirt/TShirt';
import './Home.css';
const Home = () => {
    const [tshirts,setTshirts] = useTshirt();
    const [cart, setCart] = useState([]);

    const handleAddToCart = item => {
        const exist = cart.find(tShirt => tShirt._id === item._id);
        if(!exist) {
            const newCart = [...cart, item];
            setCart(newCart);
        } else {
            alert('already added')
        }
    };

    const handleRemoveFromCart = item => {
        const rest = cart.filter(tShirt => tShirt._id !== item._id);
        setCart([...rest])
    }

    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <TShirt
                    key={tshirt._id}
                    tShirt={tshirt}
                    handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Carts 
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                ></Carts>
            </div>
        </div>
    );
};

export default Home;