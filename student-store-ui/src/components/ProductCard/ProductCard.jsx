import * as React from "react"
import "./ProductCard.css"
import {BrowserRouter as Router, Link} from 'react-router-dom';

export default function ProductCard(props) {
    console.log(222,props.name)
    let linkAddress = "/products/" + props.productId
    let price = props.price.toFixed(2)
    console.log(linkAddress)
  return (

    <div className = "product-card">
        <Link to = {linkAddress}><img className = "product-image" src={props.image} alt="product image" /></Link>
        <div className = "product-details">
            <h3 className = "product-name">{props.name}</h3>
            <button className = "add"><i class="fa-solid fa-cart-plus"></i></button>
            <button className = "remove"><i class="fa-solid fa-trash-can"></i></button>
            <h5 className = "product-price">Price: ${price}</h5>
        </div>


    </div>

  )
}