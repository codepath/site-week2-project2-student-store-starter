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
  //   const { productId } = useParams();

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
        <button className="add" onClick={handleAddItemToCart}>
          +
        </button>
        <button className="remove" onClick={handleRemoveItemToCart}>
          -
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
