import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props)
    const cart = props.cart;
    const total = cart.reduce((total, product) => total + product.price, 0);
    let shipping = 0;
    if (total > 1000) {
        shipping = 0;
    }
    else if (total > 500) {
        shipping = 4.99;
    }
    else if (total > 350) {
        shipping = 6.45;
    }
    else if (total > 100) {
        shipping = 8.12
    }
    else if (total > 0) {
        shipping = 12.99
    }

    const tax = total / 8;
    const totalPrice = (total + shipping + tax);
    const formetNumber = (num) => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div className="cart-info">
            <div className="total-cost">
                <h4>Order Summery</h4>
                <h5>Items Orderd : {cart.length}</h5>
                <p>Shipping Cost : <span className="shipping">$ {formetNumber(shipping)}</span></p>
                <p>Tax & Vat : <span className="tax">$ {formetNumber(tax)}</span></p>
            </div>
            <h3>Total Price : <span className="total">$ {formetNumber(totalPrice)}</span></h3>
        </div>
    );
};

export default Cart;