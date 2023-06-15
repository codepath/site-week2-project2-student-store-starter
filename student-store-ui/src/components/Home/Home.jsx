import * as React from "react";
import "./Home.css";

export default function Home({ products }) {
  function createProduct(info) {
    return (
      <section className="product">
        <img className="product-image" src={info.image} />
        <div className="main-info">
          <p>
            <b>{info.name}</b>
          </p>
          <p>
            <b>${info.price}</b>
          </p>
        </div>
      </section>
    );
  }
  return (
    <div className="home">
      <br></br>
      <div className="products-grid">
        {products?.map((product) => createProduct(product))}
      </div>
    </div>
  );
}
