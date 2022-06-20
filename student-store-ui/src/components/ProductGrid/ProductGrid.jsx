import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid({products, handleAddItemToCart, handleRemoveItemToCart}) {
  return (
    <div className="product-grid">
        {products.map(product => {
            <ProductCard
                product={product}
                productId={productId}
                quantity={quantity}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemToCart={handleRemoveItemToCart}
                showDescription={false}
            />
        })}
    </div>
  )
}
