import React from 'react'
import "./ProductDetail.css"

const ProductDetail = ({product, shoppingCart, handleAddItemToCart, handleRemoveItemFromCart}) => {
  return (
    <div className='product-detail'>

      <div className='buttons'>
        <button title="Remove" id="removeButton" onClick={() => handleRemoveItemFromCart(product)}>-</button>
        <button title="Add" id="addButton" onClick={() => handleAddItemToCart(product)}>+</button>
      </div>
    </div>
  )
}

export default ProductDetail