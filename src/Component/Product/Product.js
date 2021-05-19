import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, img, seller, price, stock } = props.product
    return (
        <div className="product">

            <div className="row">
                <div className="col-md-4 image-area">
                    <img src={img} alt="" />
                </div>
                <div className="col-md-8 info-area">
                    <h4>{name}</h4>
                    <p><small>by : {seller}</small></p>
                    <br />
                    <h6>$ {price}</h6>
                    <p><small>Only {stock} left in stock - order soon</small></p>
                    <button className="main-button"
                    onClick={()=>{props.handelAddProduct(props.product)}}>
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                    </button>

                </div>
            </div>
        </div>

    );
};

export default Product;