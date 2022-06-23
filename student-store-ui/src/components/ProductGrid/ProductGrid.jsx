import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";
export default function ProductGrid({products ,handleAddItemsToCart, handleRemoveItemToCart}) {
  // const [loadedProd, setLoadedProd] = useState(null);
  // const currentLoaded = products.
  return (
    <section className="products">
      <div class="products-grid">
        {products.map((product, idx) => (
          <div className="product-card">
            <ProductCard  product={product} productId={product.id} 
            quantity={product.quantity} handleAddItemsToCart ={handleAddItemsToCart} handleRemoveItemToCart={handleRemoveItemToCart}/>
            </div>
        ))}
      </div>
    </section>
  )
}
 