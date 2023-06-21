import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({
  product,
  productId,
  quantity = 0,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription,
}) => {
  const [productQuantity, setProductQuantity] = useState(0);
  const [productAmount, setProductAmount] = useState(0);
  //   const { productId } = useParams();
  const decrement = () => {
    setProductQuantity(productQuantity - 1);
  };
  const increment = () => {
    setProductQuantity(productQuantity + 1);
  };

  console.log(productQuantity);

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
          <span onClick={decrement} className="minus">
            -
          </span>
          <span className="01">{productQuantity}</span>
          <span onClick={increment} className="plus">
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
