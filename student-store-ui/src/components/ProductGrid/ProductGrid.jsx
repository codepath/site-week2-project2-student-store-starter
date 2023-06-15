import React from "react";
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({products, handleAddItemToCart, handleRemoveItemToCart}){
    return (
        <div className="product-grid">
            {products.map(product => (<ProductCard product={product}/>))}
        </div>
    )
}