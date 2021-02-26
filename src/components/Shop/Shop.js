import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import "./Shop.css";

const Shop = () => {

    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        
    }

    return (
        <div className="shop_area">
            <div className="products_area">
            {
                products.map(pd => <Product 
                    handleAddToProduct = {handleAddToCart}
                    product = {pd}
                    ></Product>)
            }
            </div>
            <div className="cart_area">
                <Cart cart ={cart}></Cart>
            </div>
          
        </div>
    );
};

export default Shop;