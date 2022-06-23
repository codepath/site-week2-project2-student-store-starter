/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { Link } from 'react-router-dom';
import formatPrice from '../currency';
import './ProductCard.css';

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
  // if on homepage (not product detail)
  if (!showDescription) {
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
          <p className="product-price">{formatPrice(product.price)}</p>
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
  // if on product detail view
  return (
    <div className="product-card-wrapper detail">
      <span className={quantity === 0 ? 'amt-in-cart hidden detail' : 'amt-in-cart detail'}>
        In cart:
        {' '}
        {quantity}
      </span>
      <div className="product-card detail">
        <img
          className="product-img detail"
          src={product.image}
          alt={product.name}
        />
        <p className="product-name detail">{product.name}</p>
        <p className="product-price detail">{formatPrice(product.price)}</p>
        {showDescription ? <p className="product-description">{product.description}</p> : null}
        <button
          onClick={() => handleAddItemToCart(productId, 10)}
          className="add-item detail"
          type="button"
        >
          Add Item
        </button>
        <button
          onClick={() => handleRemoveItemFromCart(productId, 10)}
          className="remove-item detail"
          type="button"
        >
          Remove Item
        </button>
      </div>
    </div>
  );
}
