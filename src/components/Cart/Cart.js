import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price; 
    }
    let shipping = 0;
    if ( total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 3.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }
    const totalPrice = total + shipping;
    const tax = Math.round(total % 10);
    return (
        <div>
              <h3>Order Cart Summary</h3>
                <br/>
                <h5>Items ordered:{cart.length} </h5>
                <br/><br/>
                <ul>
                    <li>Items : $ {total}</li>
                    <li>Shipping & Handling : $ {shipping}</li>
                    <li>Total before tax : $ {totalPrice}</li>
                    <li>Estimated Tax : $ {tax}</li>
                    <li className="total_order_List">Order Total : $ {totalPrice + tax}</li>
                </ul>
                
        </div>
    );
};

export default Cart;