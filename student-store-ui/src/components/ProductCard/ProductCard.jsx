/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard({
  product, productId, quantity, showDescription, handleAddItemToCart, handleRemoveItemFromCart,
}) {
  return (
    <div className="product-card">
      <Link to={`products/${productId}`}>
        <p>
          Product Card for:
          {' '}
          {product.name}
        </p>
      </Link>
    </div>
  );
}
