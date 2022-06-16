import * as React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"

export default function ProductCard(props) {
    return (
        <div className="product-card">
            <div className="media">
                <Link to={"/products/" + props.id}>
                    <img src="" alt="product pic" loading="lazy"/>   
                </Link>     
            </div>
            <div className="product-info">
                <div className="details">
                    <p className="product-name"></p>
                    <div className="rating">

                    </div>
                    <p className="product-price">${100}</p>
                </div>
                <div className="actions">
                    <div className="shop-btns">
                        <button className="remove"></button>
                        <button className="add"></button>
                        <span className="quantity">
                            <span className="amt"></span>
                        </span>
                    </div>
                </div>    
            </div>    
        </div>
    )
}
