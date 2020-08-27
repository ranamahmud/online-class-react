import React from 'react';

const Cart = (props) => {
   
    const cart = props.cart;
    const total = cart.reduce((total, course) => total + course.price, 0)
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    } else
        if (total > 15) {
            shipping = 4.99;
        } else if (total > 0) {
            shipping = 12.99;
        }

        const tax = Math.round(total/10, 2);
        const formatNumber = num => {
            const precision = num.toFixed(2);
            return Number(precision);
        }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Courses Ordered: {cart.length}</p>
            <p>Course Price: {formatNumber(total)}</p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p>Total Price: {total  + tax}</p>
        </div>
    );
};

export default Cart;