import * as React from "react"
import ProductCard from "../ProductCard/ProductCard";

export default function ProductView({product, productId, handleAddItemToCart, handleRemoveItemToCart}) {
    console.log("PV", handleRemoveItemToCart)
    
    return (<div className="product-view">
        <h1 className="product-id"> Product #{productId}</h1>
        <ProductCard product={product} showDescription={true} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} ></ProductCard>
    </div>);
}