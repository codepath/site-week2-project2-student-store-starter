import React from "react";
import "./ProductCard.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default function ProductCard({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  showDescription = false,
}) {
  const classNameAppend = showDescription ? "view-" : "";
  const addItem = (event) => handleAddItemToCart(productId)
  const removeItem = (event) => handleRemoveItemFromCart(productId)
  return (
    <div className={`${classNameAppend}product-card`}>
      <div className={`${classNameAppend}media`}>
        <Link to={`/products/${product?.id}`}>
          <img
            className={`${classNameAppend}product-image`}
            src={product?.image}
            alt={`image for${product?.name}`}
          />
        </Link>
      </div>
      <div className={`${classNameAppend}product-info`}>
        <div className={`${classNameAppend}product-text`}>
          <p className={`${classNameAppend}product-name`}>{product?.name}</p>
          <p className={`${classNameAppend}product-price`}>
            ${product?.price.toFixed(2)}
          </p>
          {/* todo: show description is true */}
        </div>

        <div className={`${classNameAppend}add-remove-qty`}>
          <span
            style={{
              fontSize: "90px",
              fontWeight: "100",
              opacity: "20%",
              marginTop: "-20%",
            }}
          >
            |
          </span>
          {/* increase button */}
          <button className={`${classNameAppend}add-remove-btn`} onClick={addItem}>
            <p className={`${classNameAppend}btn-text`} >{"\u2295"}</p>
          </button>
          <p className={`${classNameAppend}product-quantity`}>{quantity ? quantity: 0}</p>
          {/* decrease button */}
          <button className={`${classNameAppend}add-remove-btn`} onClick={removeItem}>
            <p className={`${classNameAppend}btn-text`}>{"\u2296"}</p>
          </button>
        </div>
      </div>
      <div
        className={`${classNameAppend}description`}
        style={{ display: showDescription ? "" : "none" }}
      >
        {product.description}
      </div>
    </div>
  );
}
