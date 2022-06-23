import React from 'react'
import "./ProductGrid.css"
import { ProductCard } from '../ProductCard/ProductCard'

export const ProductGrid = ({
  products,
  shoppingCart, 
  handleAddItemToCart, 
  handleRemoveItemToCart
}) => {
  return (
    <div className='product-grid'>
      <div className="content">
          <h3>Best Selling Products</h3>
        <div className="grid">
          {products.length > 0 ? products.map((product, idx) =>
          <ProductCard 
            showDescription={false}
            shoppingCart={shoppingCart}
            product={product} 
            productId={product.id} 
            handleAddItemToCart={handleAddItemToCart} 
            handleRemoveItemToCart={handleRemoveItemToCart} 
            key={idx}
          />) : <p>No products available</p>}
        </div>
      </div>
    </div>
  )
}
