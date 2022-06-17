import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({products}) {
    
    return (<div className="product-grid">
        {products.map((product) => {
            return <div key={product.id} className="card-container"><ProductCard showDescription={false} product={product}/></div>
        })}
    </div>);
}