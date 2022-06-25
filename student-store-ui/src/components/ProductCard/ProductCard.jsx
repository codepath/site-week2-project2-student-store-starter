import * as React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"


export default function ProductCard({product, handleAddItemToCart, productId, handleRemoveItemToCart}) {
   
    //const product = props.product
    
    
    console.log("product CARD", handleRemoveItemToCart)
    return (
        <div className="product-card">
            <div className="media">
                <Link to={"/products/" + product.id}>
                    <img src={product.image} alt="product pic" loading="lazy"/>   
                </Link>     
            </div>
            <div className="product-info">
                <div className="info">
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">${product.price}</p>
                </div>
                <div className="actions">
                    <div className="buttons">
                        <button id="material-icons" onClick={() => handleAddItemToCart(productId)}>
                            <i className="material-icons" >
                            add
                            </i>
                        </button>
                        <button id= "material-icons" onClick={() => handleRemoveItemToCart(productId)} >
                            <i className="material-icons" >
                            remove
                            </i>
                        </button>
                    </div>

                    {product.quantity ? <span className="quantity"><span className="amt">{props.quantity}</span></span> : null}
                </div>
            </div>    
        </div>
    )
}
