import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid({products, handleAddItemToCart, handleRemoveItemToCart}) {
  return (
    <div className="products-container">
        <h1 className="header">Best Selling Products</h1>
        <div className="product-grid">
            {products.map((product, index) => 
                <ProductCard
                    key={index}
                    product={product}
                    productId={product.id}
                    quantity={0}
                    handleAddItemToCart={handleAddItemToCart}
                    handleRemoveItemToCart={handleRemoveItemToCart}
                    showDescription={false}
                />
            )}
        </div>
    </div>
  )
}
