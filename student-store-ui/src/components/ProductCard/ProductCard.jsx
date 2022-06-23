import React from 'react'
import "./ProductCard.css"
import { Link } from 'react-router-dom'

export const ProductCard = ({
  product, 
  productId,
  shoppingCart,
  handleAddItemToCart, 
  handleRemoveItemToCart, 
  showDescription
}) => {
  const getQuantity = () => {
    let idx = shoppingCart.findIndex(item => item.itemId === productId)
    return idx !== -1 ? <span className='quantity'><span className='amt'>{shoppingCart[idx].quantity}</span></span> : null
  }
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  return (
    <div className='product-card'>
      <div className="media">
        <Link to={`products/${productId}`}><img src={product.image} alt=""/></Link>
      </div>
      <div className="product-info">
        <div className="main-info">
          <p className="product-name">{product.name}</p>
          <p className="product-price">{formatter.format(product.price)}</p>
        </div>
        {showDescription == true ? <p className='product-description'>{product.description}</p> : null}
        <div className="actions">
          <div className="buttons">
            <button className="add" onClick={() => handleAddItemToCart(productId)}><i className="material-icons">add</i></button>
            <button className="remove" onClick={() => handleRemoveItemToCart(productId)}><i className="material-icons">remove</i></button>
          </div>
          {getQuantity()}
        </div>
      </div>
      {/* {quantity > 0 ? <span className='product-quantity'>{quantity}</span> : null} */}
    </div>
  )
}
