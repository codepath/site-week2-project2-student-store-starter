/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

// currency formatter
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

// helper function; get quantity of specific product in cart
function getProductQuantity(shoppingCart, productId) {
  const productIndex = shoppingCart.findIndex((product) => product.itemId === productId);
  if (productIndex !== -1) return shoppingCart[productIndex].quantity;
  return 0;
}

export default function ProductCard({
  product, productId, shoppingCart, showDescription, handleAddItemToCart, handleRemoveItemFromCart,
}) {
  const quantity = getProductQuantity(shoppingCart, productId);
  return (
    <div className="product-card-wrapper">
      <span className={quantity === 0 ? 'amt-in-cart hidden' : 'amt-in-cart'}>
        {quantity}
      </span>
      <div className="product-card">
        <Link to={`products/${productId}`} className="media">
          <img
            className="product-img"
            src={product.image}
            alt={product.name}
          />
        </Link>
        <p className="product-name">{product.name}</p>
        <p className="product-price">{formatter.format(product.price)}</p>
        {showDescription ? <p className="product-description">{product.description}</p> : null}
        <button
          onClick={() => handleAddItemToCart(productId)}
          className="add-item"
          type="button"
        >
          Add Item
        </button>
        <button
          onClick={() => handleRemoveItemFromCart(productId)}
          className="remove-item"
          type="button"
        >
          Remove Item
        </button>
      </div>
    </div>
  );
}
