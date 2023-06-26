import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({
  product,
  productQuantity,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  shoppingCart,
}) => {
  const { productId } = useParams();
  // const decrement = (event) => {
  //   setProductQuantity(productQuantity - 1);
  //   handleRemoveItemFromCart;
  // };
  // const increment = (event) => {
  //   setProductQuantity(productQuantity + 1);
  //   handleAddItemToCart(event);
  // };

  // console.log(shoppingCart);
  // const handleRemoveItemFromCart = (event) => {
  //   handleAddItemToCart++;
  // };
  // const handleRemoveItemFromCart = (event) => {
  //   handleRemoveItemFromCart--;
  // };

  return (
    // returns the productbar the main card
    <div className="product-card">
      <div className="product-name">
        <div className="media">
          <Link to={`/products/${productId}`}>
            <img className="img-resize" src={product.image} />
          </Link>
        </div>
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">${product.price}</p>

        <div className="wrapper">
          <button
            onClick={handleRemoveItemFromCart}
            value={product.id}
            className="minus"
          >
            -
          </button>
          <span className="01">{productQuantity}</span>
          <button
            onClick={handleAddItemToCart}
            value={product.id}
            className="plus"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
