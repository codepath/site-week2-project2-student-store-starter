import React from "react";
import "./ProductView.css"
import ProductCard from "../ProductCard/ProductCard";

export default function ProductView({product, id}){
    return (
        <div className="product-view">
            <h1 className="product-id">Product {id}</h1>
            <ProductCard product={product} showDescription={true}/>
        </div>
    )
}