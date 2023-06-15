import * as React from "react";
import "./Home.css";

export default function Home({ products, items }) {
  console.log("test",products)
  console.log("len",products.length)

  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(items))

  return (
    <div className="home" id="Buy">
      <h3>Best Selling Products</h3>

      <div className="product-grid">
        {
          filteredProducts?.map((product) => (
            <div className="product">
              <img src={product.image} alt="" />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
