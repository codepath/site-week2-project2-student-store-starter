import * as React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"

export default function ProductCard(props) {
    const product = props.product
    return (
        <div className="product-card">
            <div className="media">
                <Link to={"/products/" + product.id}>
                    <img src={product.image} alt="product pic" loading="lazy"/>   
                </Link>     
            </div>
            <div className="product-info">
                <div className="details">
                    <p className="product-name">{product.name}</p>
                    <div className="stars">
                        <i className="star fa-solid fa-star"></i>
                        <i className="star fa-solid fa-star"></i>
                        <i className="star fa-solid fa-star"></i>
                        <i className="star fa-solid fa-star"></i>
                        <i className="star fa-solid fa-star-half-stroke"></i>
                    </div>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                </div>
                {props.showDescription ? <div className="desc">
                    <p className="product-description">{product.description}</p>
                </div> : null}
                <div className="actions">
                    <div className="shop-btns">
                        <button className="remove" disabled={props.quantity === 0 ? true : false} onClick={() => props.handleRemoveItemFromCart(product.id)}><i className="material-icons remove-btn">remove</i></button>
                        <button className="add" onClick={() => props.handleAddItemToCart(product.id)}><i className="material-icons">add</i></button>
                    </div>
                    <span className="quantity">
                        {props.quantity === 0 ? <span className="product-quantity hide">{props.quantity}</span> : <span className="product-quantity">{props.quantity}</span>}
                    </span>
                </div>    
            </div>    
        </div>
    )
}
