import React, { useEffect, useState } from 'react';
import './OrderConfirmation.css'; // Make sure the CSS is present and correct

const OrderAnimation = ({ onAnimationEnd }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
        const timer = setTimeout(() => {
            setAnimate(false);
            onAnimationEnd();
        }, 10000);
        return () => clearTimeout(timer);
    }, [onAnimationEnd]);

    return (
        <div className="order-container">
            <button className={`order ${animate ? 'animate' : ''}`}>
                <span className="default">Complete Order</span>
                <span className="success">
                    Order Placed
                    <svg viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1" />
                    </svg>
                </span>
                <div className="box"></div>
                <div className="truck">
                    <div className="back"></div>
                    <div className="front">
                        <div className="window"></div>
                    </div>
                    <div className="light top"></div>
                    <div className="light bottom"></div>
                </div>
                <div className="lines"></div>
            </button>
        </div>
    );
};

export default OrderAnimation;
