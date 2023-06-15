import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({
  product,
  productId,
  quantity = 0,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription,
}) => {
  console.log("productCard");
  // console.log("showdescripton", showDescription);
  const [productQuantity, setProductQuantity] = useState(0);

  return (
    <div className="product-card">
      <div className="product-name">
        //renders price
        <p className="product-price">${product.price}</p>
        <div className="media">
          <Link to={`/${productId}`}>
            <img></img>
          </Link>
        </div>
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
