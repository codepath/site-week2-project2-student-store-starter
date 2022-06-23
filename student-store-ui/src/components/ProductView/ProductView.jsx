import * as React from "react"
import ".ProductView.css"
import ProductGrid from "../ProductGrid/ProductGrid";
import { useState } from "react"
import ProductCard from "../ProductCard/ProductCard";
export default function ProductView(product, productId, quantity, handleAddItemsToCart, handleRemoveItemToCart) {
    const [prodState, setProdState] = useState("");
  return (
        <div className="product-view">
          <h1 className="product-id">Product # {productId}</h1>
          <ProductCard product={product} productId={product.id} 
            quantity={product.quantity} handleAddItemsToCart ={handleAddItemsToCart} handleRemoveItemToCart={handleRemoveItemToCart} showDescription={true}/>
        </div>
  )}