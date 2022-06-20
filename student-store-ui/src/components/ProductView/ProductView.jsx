import React from 'react'
import "./ProductView.css"

export const ProductView = ({product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart}) => {
  return (
    <div className='product-view'>
        <h1 className='product-id'>Product #{productId}</h1>
    </div>
  )
}
