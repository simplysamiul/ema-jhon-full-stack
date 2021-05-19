import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shope.css';

const Shope = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    const handelAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (

        <div className="container d-flex">
            <div className="row">
                <div className="col-md-9">
                    <div className="product-container">

                        {
                            products.map(product =>
                                <Product
                                    handelAddProduct={handelAddProduct}
                                    product={product} key={product.key}>
                                </Product>)
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cart-container">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Shope;