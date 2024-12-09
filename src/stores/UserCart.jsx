

import React from 'react';
import { Usecart } from "../stores/contex/Usecontex";
import Nava from "./componets/nav";
import "./UserCart.css";

const UserCart = () => {
    const { cartitem, RemoveCart } = Usecart();

    const handleBuyNow = (item) => {
        // Add logic for "Buy Now", such as redirecting to a payment page
        alert(`Proceeding to buy: ${item.product}`);
    };

    return (
        <>
            <Nava />
            <div>
            <center>  <h2 className='y-cart'>Your Cart</h2></center>
                {cartitem.length === 0 ? (
                   <center> <p className='empty'>Your Cart is Empty</p></center>
                ) : (
                    <div>
                        {cartitem.map((item) => {
                            return (
                                <div className='cart-section' key={item.id}>
                                    <div className="cart-img">
                                        <img src={item.image} alt={item.product} />
                                    </div>
                                    <div className="cart-details">
                                        <h3>{item.product}</h3>
                                        <h2>{item.price}$</h2>
                                        <h3>{item.model}</h3>
                                    </div>
                                    <div className="cart-buttons">
                                        <button
                                            className='removeBtn'
                                            onClick={() => RemoveCart(item)}
                                        >

                                            Remove
                                        </button>
                                        <button
                                            className='buyNowBtn'
                                            onClick={() => handleBuyNow(item)}
                                        >
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
};

export default UserCart;


