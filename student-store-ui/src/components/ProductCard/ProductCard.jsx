import * as React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"

export default function ProductCard(props) {
    const product = props.product
    //console.log(product)
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
                    <p className="product-price">${product.price}</p>
                </div>
            </div>    
        </div>
    )
}
