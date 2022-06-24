import * as React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import "./ProductCard.css";

export default function ProductCard({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription,
}) {
  return (
    <div className="product-card">
      <div className="media">
        <Link to={`/products/${product.id}`}>
          <img src={product.image} />
        </Link>
      </div>
      <div className="header">
        <div className="text-container">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">${product.price}</p>
          <Rating readonly initialValue={4} />
          {quantity > 0 && (
            <p className="product-quantity">Quantity: {quantity}</p>
          )}
        </div>
        <div className="button-container">
          <button
            className="add"
            onClick={() => handleAddItemToCart(productId)}
          >
            +
          </button>
          <button
            className="remove"
            onClick={() => handleRemoveItemToCart(productId)}
          >
            -
          </button>
        </div>
      </div>
      {showDescription && (
        <p className="product-description">{product.description}</p>
      )}
    </div>
  );
}
