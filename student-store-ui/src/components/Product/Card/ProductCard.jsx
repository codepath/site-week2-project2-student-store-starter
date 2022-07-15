import "./ProductCard.css"

import * as React from "react"
import {Link} from "react-router-dom"


export default function ProductCard(props) {
    //  formats the prices correctly
    function priceFormat(price){
        return "$" + price.toFixed(2)
    }


    return (
        <div className = "product-card">

            <p className = "product-name">  {props.product.name}  </p>
            <p className = "product-price">  {priceFormat(props.product.price)}  </p>
            {props.showDescription ?  <p className = "product-description">  {props.product.description}  </p> : null}

            <Link to = {`products/${props.productId}`}>  <img src = {props.product.image}/>  </Link>

            <div className = "buttons">
                <button className = "add" onClick = {(e) => {props.handleAddItemToCart(e, props.productId)}}> + </button>
                <button className = "remove" onClick = {(e) => {props.handleRemoveItemFromCart(e, props.productId)}}> - </button>
                <p className = "product-quantity"> {props.quantity} </p>
            </div>
        </div>
    )
}