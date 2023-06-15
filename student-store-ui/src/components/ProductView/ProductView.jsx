import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const ProductView = ({product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart}) => {
    console.log("Product view product " +product)
    console.log("Product id " +productId)

  return (
    <div className='product-view'>
        <h1 className='product-id'>Product # {productId}</h1>
        
        <ProductCard productNeeded={handleAddItemToCart} product={product} quantity={quantity} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} showDescription={false}/>
    </div>
  )
}

export default ProductView