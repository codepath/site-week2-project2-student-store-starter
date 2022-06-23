import * as React from "react"
import "./ProductCard.css"
import {BrowserRouter as Router, Link} from 'react-router-dom';

export default function ProductCard(props) {

    let linkAddress = "/products/" + props.productId
    let price = props.price.toFixed(2)

  return (

    <div className = "product-card">
        <Link to = {linkAddress}><img className = "product-image" src={props.image} alt="product image" /></Link>
        <div className = "product-details">
            <h5 className = "product-name">{props.name}</h5>
            <button className = "add"><i class="fa-solid fa-cart-plus"></i></button>
            <button className = "remove"><i class="fa-solid fa-trash-can"></i></button>
            <p className = "product-price"><i class="fa-solid fa-coins"></i>  ${price}</p>
        </div>


    </div>

  )
}