import * as React from "react"
import ProductCard from "../ProductCard/ProductCard";

export default function ProductView({product, productId, handleAddItemToCart}) {
    console.log("PRODUCT VIEW", handleAddItemToCart)
    
    return (<div className="product-view">
        <h1 className="product-id"> Product #{productId}</h1>
        <ProductCard product={product} showDescription={true} handleAddItemToCart={handleAddItemToCart} ></ProductCard>
    </div>);
}