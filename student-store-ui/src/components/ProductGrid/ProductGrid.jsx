import React from 'react'
import "./ProductGrid.css"
import { ProductCard } from '../ProductCard/ProductCard'

export const ProductGrid = ({products, handleAddItemToCart, handleRemoveItemToCart}) => {
  return (
    <div className='product-grid'>
      <div className="content">
        <div className="grid">
          {products.map((product, idx) => <ProductCard showDescription={false} product={product} productId={product.id} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} key={idx}/>)}
        </div>
      </div>
    </div>
  )
}
