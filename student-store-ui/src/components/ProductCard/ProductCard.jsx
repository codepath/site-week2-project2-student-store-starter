import React from 'react'
import "./ProductCard.css"
import { Link } from 'react-router-dom'

export const ProductCard = ({product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart, showDescription}) => {
  return (
    <div className='product-card'>
      <div className="media">
        <Link to={`products/${productId}`}><img src={product.image} alt=""/></Link>
      </div>
      <p className="product-name">{product.name}</p>
      <p className="product-price">${product.price}</p>
      {showDescription == true ? <p className='product-description'>{product.description}</p> : null}
      <button className="add" onClick={() => handleAddItemToCart(productId)}>+</button>
      <button className="remove" onClick={() => handleRemoveItemToCart(productId)}>-</button>
      {quantity > 0 ? <span className='product-quantity'>{quantity}</span> : null}
    </div>
  )
}
