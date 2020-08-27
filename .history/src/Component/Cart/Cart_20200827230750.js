import React from 'react';
import { Button } from 'react-bootstrap'
const Cart = (props) => {

    const cart = props.cart;
    const total = cart.reduce((total, course) => total + course.price, 0)


    const tax = Math.round(total / 10, 2);
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div style={
            {
                marginTop: "20px"
            }

        }>
            <h4>Order Summary</h4>
            <p>Courses Enrolled: {cart.length}</p>
            <p>Total Course Price: {formatNumber(total)}</p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p>Total Price: {total + tax}</p>

            <Button variant="primary">Checkout</Button>
        </div>
    );
};

export default Cart;