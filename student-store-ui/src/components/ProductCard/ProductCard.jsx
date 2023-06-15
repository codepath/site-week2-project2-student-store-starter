import React from "react";
import "./ProductCard.css"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

export default function ProductCard({product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart,
    showDescription = false}){
    return (
        <div className="product-card">
            <div className="media">
                <Link to={`/products/${product.id}`}>
                    <img className="product-image" src ={product.image} alt={`image for${product.name}`} />
                </Link>
            </div>
            <div className="product-info">
                <div className="product-text">
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                    {/* todo: show description is true */}
                </div>
                <div className="add-remove-qty">
                    <button className="add-remove-btn"><p className="btn-text">{"\u2295"}</p></button>
                    <p className="product-quantity">0</p>
                    <button className="add-remove-btn"><p className="btn-text">{"\u2296"}</p></button>
                </div>
            </div>
        </div>
    )
}