import * as React from "react";
import "./Home.css";

export default function Home({ products }) {
  return (
    <div className="home">
      <div className="productGrid">
      {products?.map((product) => {
        return (
          <div className="product">
            <img className="product-poster" src={product.image} alt={`Image of ${product.name}`} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        );
      })}
      </div>
    </div>
  );
}
