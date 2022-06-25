import * as React from "react"
import "./ProductCard.css"
import {BrowserRouter as Router, Link} from 'react-router-dom';

export default function ProductCard(props) {


    let linkAddress = "/products/" + props.productId;
    let price = props.price.toFixed(2);
    let quantity;
    
    props.shoppingCart.map((item) => {
      if (item.itemId === props.productId) {
        quantity = item.quantity
      }
    })



  return (

    <div className = "product-card">
        <Link to = {linkAddress}><img className = "media" src={props.image} alt="product image" /></Link>
        <div className = "product-details">
            <h5 className = "product-name">{props.name}</h5>
            <button className = "add" onClick = { () => props.handleAddItemToCart(props.productId)}><i class="fa-solid fa-cart-plus"></i></button>
            <button className = "remove" onClick = { () => props.handleRemoveItemFromCart(props.productId)}><i class="fa-solid fa-trash-can"></i></button>
            <p className = "product-price"><i class="fa-solid fa-coins"></i>  ${price}</p>
            {quantity ? <p className = "product-quantity">{quantity} in cart</p> : ""}
        </div>


    </div>

  )
}