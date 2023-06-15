import React from "react";

export default function ProductDetails({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
}
