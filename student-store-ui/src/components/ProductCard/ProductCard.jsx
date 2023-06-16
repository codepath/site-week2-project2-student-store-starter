import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard(prop) {
  return (
    <Link id="product-link" to={"products/" + prop.product.id}>
      <div className="product">
        <img
          className="product-poster"
          src={prop.product.image}
          alt={`Image of ${prop.product.name}`}
        />
        <div className="product-info">
          <p>{prop.product.name}</p>
          <p>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
          <p>${prop.product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
}
