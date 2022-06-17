import * as React from "react"
import "./ProductView.css"
import ProductCard from "../ProductCard/ProductCard";

export default function ProductView({product, productId}) {
    return (<div className="product-view">
        <h1 className="product-id"> Product #{productId}</h1>
        <ProductCard product={product} showDescription={true} ></ProductCard>
    </div>);
}