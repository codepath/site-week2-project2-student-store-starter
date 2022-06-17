import * as React from "react"
import {Link} from 'react-router-dom';
import "./ProductCard.css"


// Props = product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart, showDescription (T/F)
export default function ProductCard(props) {
  return (
    <div className="product-card">
        <div className="product-name">{props.productName}</div>
        <div className="product-price">${props.product.price}</div> {/* The price should formatted so that it starts with a $, and has at least one integer digit, along with exactly two decimal digits. */}
        {props.showDescription ? <div>{props.product.description}</div> : <></>}
        <Link to={"products/" + props.product.id} className="media">
            <img src={props.product.image} className="product-image"></img>
        </Link>
        <button className="add"></button> {/* Add functionality to the buttons*/}
        <button className="remove"></button>
        {/*  If item is added to cart, show quantity of the product. If not in cart, show nothing*/}
    </div>
  )
}
