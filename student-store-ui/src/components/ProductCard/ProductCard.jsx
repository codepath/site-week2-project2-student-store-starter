import * as React from "react";
import "./ProductCard.css";

export default function ProductCard(props) {
  return (
    <div className="product-grid">
      {props.products?.length === 0 ? (
        <p className="grid-p">No products available 🛑</p>
      ) : (
        props.products?.map((product) => {
          return (
            <div className="product">
              <img
                className="product-poster"
                src={product.image}
                alt={`Image of ${product.name}`}
              />
              <div className="product-info">
                <p>{product.name}</p>
                <p>${product.price}</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
