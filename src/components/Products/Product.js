import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const product = (props) => {
    // console.log(props)
const {img, name,seller,stock,price,} = props.product;
    return (
        <div className ="product">
           <div>  
               <img src={img} alt="" srcset=""/>
           </div>
           <div className ="product_name">
               <h3>{name}</h3>
               <br/>
               <p><small>by : {seller}</small></p>
               <br/>
               <p> ${price}</p>
               <br/>
               <p>stock only {stock} left in stock - order soon </p>
               <button onClick = {() => props.handleAddToProduct(props.product)} className="add_cart"> <FontAwesomeIcon icon={faShoppingCart} /> add cart</button>
           </div>
        </div>
    );
};

export default product;