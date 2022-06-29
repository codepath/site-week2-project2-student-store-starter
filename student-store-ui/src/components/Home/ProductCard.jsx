import * as React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default function ProductCard({
  product, productId, quantity, handleAddItemToCart, handleRemoveItemFromCart, showDescription,
}) {
  return (
    <div className="card product-card">

      <div className="card-image product-image">
        <Link to={`/product/${productId}`}>
          <img alt="img of product" src={product.image} />
        </Link>
      </div>
      <div className="card-content">
        <div className="product-name">{product.name}</div>
        <div className="product-price">
          $
          {product.price.toFixed(2)}
        </div>
        <button type="button" className="add" onClick={() => handleAddItemToCart(productId)}>+1</button>
        <button type="button" className="remove" onClick={() => handleRemoveItemFromCart(productId)}>-1</button>
        {quantity > 0 ? <div className="product-quantity">{quantity}</div> : null }
        {showDescription ? <div className="product-description">{product.description}</div> : null}
      </div>

    </div>

  );
}
