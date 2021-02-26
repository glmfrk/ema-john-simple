import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)
    return (
        <div>
              <h3>Order Cart Summary</h3>
                <br/>
                <h5>Items ordered:{cart.length} </h5>
                <br/><br/>
                <ul>
                    <li>Items :$00</li>
                    <li>Shipping & Handling :$00</li>
                    <li>Total before tax :$00</li>
                    <li>Estimated Tax :$00</li>
                    <li className="total_order_List">Order Total :$00</li>
                </ul>
        </div>
    );
};

export default Cart;