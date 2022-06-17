import * as React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"

export default function ProductCard(props) {
    const product = props.product
    console.log(product)
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
                <div className="actions">
                    <div className="shop-btns">
                        <button className="remove"><i className="material-icons">remove</i></button>
                        <button className="add"><i className="material-icons">add</i></button>
                        <span className="quantity">
                            <span className="amt"></span>
                        </span>
                    </div>
                </div>    
            </div>    
        </div>
    )
}
